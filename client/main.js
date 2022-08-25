const dates = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const calendar = document.getElementById('calendar');
const monthbutton = document.getElementById('month-button');

function renderCal(element) {
element.innerHTML = '';
for (let i = 0; i < 5; ++i) {
    for (let j = 0; j < 7; ++j) {
        let date = parseInt("" + i + j - 9);
        const div = document.createElement('div');
        if (i === 0) { div.innerText = dates[j]; }
        else if (date > 31) { continue; }
        else { div.innerText = date; }
        div.classList.add('calendar-item');
        element.appendChild(div);
    }
}
}

window.onload = () => {
    let temp = (new Date).toISOString().split("T")[0];
    temp = temp.split('-');
    monthbutton.value = temp[1] + '-' + temp[0];
}

renderCal(calendar);
