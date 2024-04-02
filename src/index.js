function displayTime() {
  //Los Angeles
  let losAngelesDateElement = document.querySelector(`#los-angeles-date`);
  let losAngelesTimeElement = document.querySelector(`#los-angeles-time`);
  let losAngelesDateFormat = moment()
    .tz(`America/Los_Angeles`)
    .format(`MMMM Do YYYY`);
  let losAngelesTimeFormat = moment()
    .tz(`America/Los_Angeles`)
    .format(`h:mm:ss [<span>]A[</span>]`);

  losAngelesDateElement.innerHTML = losAngelesDateFormat;
  losAngelesTimeElement.innerHTML = losAngelesTimeFormat;

  //Paris
  let parisDateElement = document.querySelector(`#paris-date`);
  let parisTimeElement = document.querySelector(`#paris-time`);
  let parisDateFormat = moment().tz(`Europe/Paris`).format(`MMMM Do YYYY`);
  let parisTimeFormat = moment()
    .tz(`Europe/Paris`)
    .format(`h:mm:ss [<span>]A[</span>]`);

  parisDateElement.innerHTML = parisDateFormat;
  parisTimeElement.innerHTML = parisTimeFormat;
}

displayTime();
setInterval(displayTime, 1000);
