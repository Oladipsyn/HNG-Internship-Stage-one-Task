function getCurrentDayOfWeek(){
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

function getCurrentUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.toUTCString();
    return utcTime;
}
setInterval(getCurrentUTCTime);
document.getElementById("dayOfWeek").textContent = "Current Day of the week: " + getCurrentDayOfWeek();
document.getElementById("utcTime").textContent = "Current UTC Time: " + getCurrentUTCTime();


setInterval(getCurrentUTCTime, 1000);

// updateDateTime();