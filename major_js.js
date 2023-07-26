

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const tim = new Date();
    const month = tim.getMonth();
    const dat = tim.getDate();
    const day = tim.getDay();
    const hour = tim.getHours();
    const hours_in_12hr_format = hour >= 13 ? hour % 12 : hour;
    const minutes = tim.getMinutes();
    const am_pm = hour >= 12 ? 'PM' : 'AM';
    document.getElementById("time").innerHTML = hours_in_12hr_format + ":" + minutes + ":" + " " + `<span id="am">${am_pm}</span>`;
    document.getElementById("date").innerHTML = days[day] + ", " + dat + " " + months[month];

}, 1000);
