const dates = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const calendar = document.getElementById('calendar');

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

renderCal(calendar);
