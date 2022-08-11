const addHour = (date, hoursToAdd) => {
  date.setTime(date.getTime() + hoursToAdd * 60 * 60 * 1000);
  return date;
};

const emailDelayer = (hoursOfDelayRequired, dateTimeEmailReceived) => {
  if (!parseInt(hoursOfDelayRequired, 10)) return "Invalid time delay received";
  if (!Date.parse(dateTimeEmailReceived)) return "Invalid Date received";
  const dateReceived = new Date(dateTimeEmailReceived);
  let timeToRespond = dateReceived;
  let hoursAdded = 0;
  while (hoursAdded <= hoursOfDelayRequired + 1) {
    let dayOfWeek = timeToRespond.getDay();
    let timeOfDay = timeToRespond.getHours();

    if (
      dayOfWeek === 6 ||
      dayOfWeek === 0 ||
      timeOfDay < 7 ||
      timeOfDay >= 20
    ) {
      timeToRespond = addHour(timeToRespond, 1);
    } else {
      timeToRespond = addHour(timeToRespond, 1);
      hoursAdded++;
    }
  }

  return timeToRespond;
};

export default emailDelayer;