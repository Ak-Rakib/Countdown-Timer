const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("mins");
const second = document.getElementById("seconds");



const newYears = "1 Jan 2024"

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, min, seconds);


    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = mins;
    second.innerHTML = seconds;
}

countdown();
setInterval(countdown, 1000);