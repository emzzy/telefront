/**
 * Formats an ISO date string for HTML datetime-local input
 * @param {string} isoDateStr - ISO date string (e.g., "2024-01-15T10:30:00.000Z")
 * @returns {string} - Formatted string for datetime-local input (e.g., "2024-01-15T10:30")
 */

export const formatDateForInput = (isoDateStr) => {
    if (!isoDateStr) return '';
    const date = new Date(isoDateStr); // Converts from UTC to local time
    const pad = (n) => n.toString().padStart(2, '0');
    
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};