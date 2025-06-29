const timeFormat = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  minutes %= 60;
  return `${hours}h ${minutes}m`;
}

export default timeFormat;