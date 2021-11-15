// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.
export const COLORS = {
  countdown: "#316E94",
  stopwatch: "#3FA2E0",
  xy: "#E0BB34",
  tabata: "#4E1394",
  purple: "#7C28E0",
  start: "#26DB5C",
  stop: "#DB4E4E",
  reset: "#2F333B",
  text: "#FAF9F6",
  nav: "#231F20",
};

export const timerValue = (value) => {
  const fullTime = new Date(value * 1000).toISOString();
  const hours = fullTime.substr(12, 1);
  const minutes = fullTime.substr(14, 2);
  const seconds = fullTime.substr(17, 2);
  return hours + "h " + minutes + "m " + seconds + "s";
};
