document.addEventListener("DOMContentLoaded", () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();
  const currentDay = days[day];
  const time = new Date().getMilliseconds();
  const year = new Date().getFullYear();

  const currentUTCTimeEl = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  currentUTCTimeEl.innerText = time;
  const currentDayOfTheWeekEl = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  currentDayOfTheWeekEl.innerText = currentDay;

  const copyDateEl = document.querySelector('[data-testid="copyDate"]');
  copyDateEl.innerText = year;

  const myTrackEl = document.querySelector('[data-testid="myTrack"]');
  myTrackEl.innerText = "Frontend";

  const usernameEl = document.querySelector('[data-testid="slackUserName"]');
  usernameEl.innerText = "Olumayokunayo"

 
});
