/**
 * Formats an ISO date string for HTML datetime-local input
 * @param {string} isoDateStr - ISO date string (e.g., "2024-01-15T10:30:00.000Z")
 * @returns {string} - Formatted string for datetime-local input (e.g., "2024-01-15T10:30")
 */

export const formatDateForDateInput = (isoDateStr) => {
    if (!isoDateStr) return '';
    const date = new Date(isoDateStr);
    const pad = (n) => n.toString().padStart(2, '0');
    
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    return `${year}-${month}-${day}`;
};

// Format date for display (human readable)
export const formatDateForDisplay = (isoDateStr, options = {}) => {
    if (!isoDateStr) return '';
    const date = new Date(isoDateStr);
    
    const defaultOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return date.toLocaleString('en-US', { ...defaultOptions, ...options });
};
