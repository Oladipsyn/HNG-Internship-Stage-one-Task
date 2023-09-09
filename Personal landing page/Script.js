
const dayElement = document.getElementById("dayOfTheWeek");

function updateDateTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };

    dayElement.textContent = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    timeElement.textContent = currentDate.toTimeString().split(' ')[0]; // Display only the time part
}

setInterval(updateDateTime); // Update every second