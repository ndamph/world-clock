function displayTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector(`#los-angeles`);
  if (losAngelesElement) {
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
  }

  //Paris
  let parisElement = document.querySelector(`#paris`);
  if (parisElement) {
    let parisDateElement = document.querySelector(`#paris-date`);
    let parisTimeElement = document.querySelector(`#paris-time`);
    let parisDateFormat = moment().tz(`Europe/Paris`).format(`MMMM Do YYYY`);
    let parisTimeFormat = moment()
      .tz(`Europe/Paris`)
      .format(`h:mm:ss [<span>]A[</span>]`);

    parisDateElement.innerHTML = parisDateFormat;
    parisTimeElement.innerHTML = parisTimeFormat;
  }
}

function showSelectedCity(event) {
  let selectedCity = event.target.value;
  if (selectedCity === "current") {
    selectedCity = moment.tz.guess();
  }
  let citiesName = selectedCity.replace(`_`, ` `).split(`/`)[1];
  let citiesElement = document.querySelector(`#cities`);
  let citiesDate = moment().tz(selectedCity).format(`MMMM Do YYYY`);
  let citiesTime = moment()
    .tz(selectedCity)
    .format(`h:mm:ss [<span>]A[</span>]`);
  citiesElement.innerHTML = `
          <div class="city">
          <div>
            <h2>${citiesName}</h2>
            <div class="date">${citiesDate}</div>
          </div>
          <div class="time">${citiesTime}</div>
        </div>
        <a href="/">All cities</a>
  `;
}
let citySelectElement = document.querySelector(`#city-select`);
citySelectElement.addEventListener(`change`, showSelectedCity);

displayTime();
setInterval(displayTime, 1000);
