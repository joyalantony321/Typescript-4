import { Event } from './types.js';

export async function loadEvents(): Promise<Event[]> {
  try {
    const response = await fetch("events.json");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to load events:", error);
    throw error;
  }
}

export function filterByYear(events: Event[], minYear: number): Event[] {
  return events.filter(e => e.year >= minYear);
}

export function getEventTitles(events: Event[]): string[] {
  return events.map(e => e.title);
}