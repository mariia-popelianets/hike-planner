export const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  return dateString.split("-").reverse().join(".");
};

export const formatDateRange = (
  startDate: string,
  finishDate?: string,
): string => {
  if (!startDate) return "";

  const start = formatDate(startDate);
  const finish = finishDate ? formatDate(finishDate) : start;

  if (!finishDate || start === finish) {
    return start;
  }

  return `${start} – ${finish}`;
};
