const timelineSection = document.getElementById("timeline");
const modal = document.getElementById("modal");

// Load events data
async function loadEvents() {
    try {
        const response = await fetch("events.json");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const events = await response.json();

        // Render timeline
        renderTimeline(events);

        // Reduce example: category counts
        const categoryCount = events.reduce((acc, event) => {
            acc[event.category] = (acc[event.category] || 0) + 1;
            return acc;
        }, {});
        console.log("Category count:", categoryCount);

    } catch (error) {
        console.error("Failed to load events:", error);
    }
}

// Render each event
function renderTimeline(events) {
    events.forEach(event => {
        const article = document.createElement("article");

        const marker = document.createElement("div");
        marker.className = "event-marker";

        const yearEl = document.createElement("h2");
        yearEl.textContent = event.year;

        const titleEl = document.createElement("h3");
        titleEl.textContent = event.title;

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = event.imageURL;
        img.alt = event.title;
        img.width = 200;
        figure.appendChild(img);

        const desc = document.createElement("p");
        desc.textContent = event.description.substring(0, 60) + "...";

        const btn = document.createElement("button");
        btn.textContent = "Learn More";
        btn.addEventListener("click", () => {
            openModal(event);
        });

        article.appendChild(marker);
        article.appendChild(yearEl);
        article.appendChild(titleEl);
        article.appendChild(figure);
        article.appendChild(desc);
        article.appendChild(btn);

        timelineSection.appendChild(article);
    });
}

// Open modal
function openModal(event) {
    modal.style.display = "block";

    const modalBox = document.createElement("div");
    modalBox.classList.add("modal-box");

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("modal-close");
    closeBtn.addEventListener("click", closeModal);

    const yearEl = document.createElement("h2");
    yearEl.textContent = event.year;

    const titleEl = document.createElement("h3");
    titleEl.textContent = event.title;

    const img = document.createElement("img");
    img.src = event.imageURL;
    img.alt = event.title;

    const desc = document.createElement("p");
    desc.textContent = event.description;

    modalBox.appendChild(closeBtn);
    modalBox.appendChild(yearEl);
    modalBox.appendChild(titleEl);
    modalBox.appendChild(img);
    modalBox.appendChild(desc);

    modal.innerHTML = "";
    modal.appendChild(modalBox);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}

// Close modal
function closeModal() {
    modal.style.display = "none";
    modal.innerHTML = "";
}

// Example filter function
function filterByYear(events, minYear) {
    return events.filter(e => e.year >= minYear);
}

// Example map function
function getEventTitles(events) {
    return events.map(e => e.title);
}

document.addEventListener("DOMContentLoaded", loadEvents);
