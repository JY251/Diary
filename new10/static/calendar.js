document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const currentMonthHeader = document.getElementById('current-month');
    const calendarBody = document.getElementById('calendar-body');

    renderCalendar(currentYear, currentMonth);

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
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDayOfMonth = new Date(year, month, daysInMonth).getDay();

        currentMonthHeader.textContent = `${new Date(year, month).toLocaleString('default', {month: 'long',})} ${year}`

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
                        // alert(`You clicked on ${year}-${month+1}-${cell.textContent}`);
                        const selectedDate = `${year}-${month+1}-${cell.textContent}`;
                        fetchDiaryData(selectedDate);
                    });
                    dayCount++;
                }
                
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    function fetchDiaryData(selectedDate) {
        fetch(`api/diary?date=${selectedDate}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data); // DEBUG
                // console.log(JSON.stringify(data)); // DEBUG
                localStorage.setItem('diaryData', JSON.stringify(data));
                window.location.href = 'displayData.html';
                // while(1); // DEBUG
                // console.log(data);
                // alert(`Diary data for ${selectedDate}:\n${data.content}`);
            })
            .catch(error => {
                console.error("Error fetching diary data: ", error);
            })
    }
});