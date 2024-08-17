export const formatDate = (dateTimeStr: string) => {
  const date = new Date(dateTimeStr);
  date.setHours(date.getHours()); // Add 3 hours to the date object

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return {
    date: date.toLocaleDateString("en-US"),
    time: date.toLocaleTimeString("en-US", options).toUpperCase(),
  };
};
