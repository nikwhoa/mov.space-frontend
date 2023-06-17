// 2023-04-14T17:00:00.000+00:00
export const formatDate = (inputDate) => {
  // need to return 4/16/2023, 20:00:00
}

const compareDates = (dateStr1, dateStr2) => {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);

  if (Number.isNaN(date1.getTime()) || Number.isNaN(date2.getTime())) {
    throw new Error('Invalid date string');
  }

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate() &&
    date1.getHours() === date2.getHours()
  );
};

export default compareDates;
