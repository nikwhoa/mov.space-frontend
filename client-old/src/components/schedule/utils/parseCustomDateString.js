function parseCustomDateString(dateStr) {
  const [day, month, year, hour, minute, second] = dateStr
    .replace(',', '')
    .split(/\/|:|\s/)
    .map(Number);

  return new Date(year, month - 1, day, hour, minute, second);
}

export default parseCustomDateString;
