import { Event } from './types.js';

const modal = document.getElementById("modal") as HTMLDivElement;

export function openModal(event: Event): void {
  modal.style.display = "block";

  const modalBox = document.createElement("div");
  modalBox.classList.add("modal-box");

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.classList.add("modal-close");
  closeBtn.addEventListener("click", closeModal);

  const yearEl = document.createElement("h2");
  yearEl.textContent = event.year.toString();

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

  modal.addEventListener("click", (e: MouseEvent) => {
    if (e.target === modal) closeModal();
  });
}

export function closeModal(): void {
  modal.style.display = "none";
  modal.innerHTML = "";
}