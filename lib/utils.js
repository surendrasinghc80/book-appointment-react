<<<<<<< HEAD
import moment from 'moment';

export const formatReadableTime = timeString => {
    if (!timeString || timeString.includes('1899')) return 'N/A';
    return moment(timeString, 'HH:mm:ss').format('hh:mm A');
};
 
 
export const formatDate = dateStr => {
    if (!dateStr) return 'N/A';
 
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};
 
 
=======
import moment from 'moment';

export const formatReadableTime = timeString => {
    if (!timeString || timeString.includes('1899')) return 'N/A';
    return moment(timeString, 'HH:mm:ss').format('hh:mm A');
};
 
 
export const formatDate = dateStr => {
    if (!dateStr) return 'N/A';
 
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
};
 
 
>>>>>>> origin/main
 