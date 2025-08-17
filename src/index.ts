import { loadEvents } from './fetcher.js';
import { renderTimeline, calculateCategoryCount } from './renderer.js';

async function initializeApp(): Promise<void> {
  try {
    const events = await loadEvents();
    
    // Render timeline
    renderTimeline(events);
    
    // Calculate and log category counts
    const categoryCount = calculateCategoryCount(events);
    console.log("Category count:", categoryCount);
    
  } catch (error) {
    console.error("Failed to initialize app:", error);
  }
}

document.addEventListener("DOMContentLoaded", initializeApp);