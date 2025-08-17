export async function loadEvents() {
    try {
        const response = await fetch("events.json");
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error("Failed to load events:", error);
        throw error;
    }
}
export function filterByYear(events, minYear) {
    return events.filter(e => e.year >= minYear);
}
export function getEventTitles(events) {
    return events.map(e => e.title);
}
