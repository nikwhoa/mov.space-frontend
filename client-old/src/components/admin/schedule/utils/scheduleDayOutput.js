const scheduleDayOutput = (schedule) => {
  return (
    new Date(schedule)
      .toLocaleString('UK-UA', { weekday: 'long' })
      .charAt(0)
      .toUpperCase()
    + new Date(schedule).toLocaleString('UK-UA', { weekday: 'long' }).slice(1)
  );
};

export default scheduleDayOutput;
