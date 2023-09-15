document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    // console.log(currentDate); // DEBUG
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const currentMonthHeader = document.getElementById('current-month');
    const calendarBody = document.getElementById('calendar-body');

    renderCalendar(currentYear, currentMonth);

    // content

    function renderCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        // console.log(new Date(year, month + 1, 0)); // DEBUG
        // console.log(daysInMonth) // DEBUG
        const firstDayOfMonth = new Date(year, month, 1).getDate();
        const lastDayOfMonth = new Date(year, month, daysInMonth).getDate();

        // console.log(new Date(year, month)); // DEBUG
        // console.log(new Date(year, month).toLocaleString); // DEBUG

        currentMonthHeader.textContent = `${new Date(year, month).toLocaleString('default', {month: 'long',})} ${year}`
        // currentMonthHeader.textContent = `${new Date(year, month).toLocaleString('default')} ${year}`
        // currentMonthHeader.textContent = `${new Date(year, month).toLocaleString({month: 'long',})} ${year}`

        let dayCount = 1;
        calendarBody.innerHTML = "";

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if ((i === 0 && j < firstDayOfMonth) || (dayCount > daysInMonth)) {
                    cell.textContent = '';
                } else {
                    cell.textContent = dayCount;
                    cell.addEventListener('click', function () {
                        alert('You clicked on ${year}-${month+1}-${dayCount}');
                    });
                    dayCount++;
                }
            }
        }

    }
})