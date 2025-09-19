export const formatDate = (date: Date) => {
    return date.toLocaleDateString();
};

export const formatTime = (time: Date) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const formatDateTime = (date: Date, time: Date) => {
    return `${formatDate(date)} ${formatTime(time)}`;
};
