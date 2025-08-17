import { openModal } from './modal.js';
const timelineSection = document.getElementById("timeline");
export function renderTimeline(events) {
    timelineSection.innerHTML = "";
    events.forEach(event => {
        const article = document.createElement("article");
        const marker = document.createElement("div");
        marker.className = "event-marker";
        const yearEl = document.createElement("h2");
        yearEl.textContent = event.year.toString();
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
export function calculateCategoryCount(events) {
    return events.reduce((acc, event) => {
        acc[event.category] = (acc[event.category] || 0) + 1;
        return acc;
    }, {});
}
