document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    // console.log(currentDate); // DEBUG
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    // console.log(currentMonth); // DEBUG
    // console.log(new Date(1990, 8,12)); // DEBUG

    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const currentMonthHeader = document.getElementById('current-month');
    const calendarBody = document.getElementById('calendar-body');

    renderCalendar(currentYear, currentMonth);

    // content
    prevMonthBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    });

    nextMonthBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth === 12) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    });

    function renderCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        // console.log(new Date(year, month + 1, 0)); // DEBUG
        // console.log(daysInMonth) // DEBUG
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

        // console.log(firstDayOfMonth); // DEBUG

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
                
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }
})