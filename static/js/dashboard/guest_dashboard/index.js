document.addEventListener("DOMContentLoaded", function () {

    // ==========  For Total Point ===========
    function setProgress(circle, percent) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference; // start hidden

        // force reflow so animation triggers
        circle.getBoundingClientRect();

        // set target with animation
        circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }

    // Example: 3 circle progress
    window.addEventListener("DOMContentLoaded", () => {
        setProgress(document.querySelector('.red'), 90);    // outer red 90%
        setProgress(document.querySelector('.green'), 80);  // middle green 80%
        setProgress(document.querySelector('.purple'), 70); // inner purple 70%
    });




    // Circle Chart
    // Circle Chart
    new Chart(document.getElementById('donutChart'), {
        type: 'doughnut',
        data: {
            labels: ['Done', 'Booked', 'Canceled'],
            datasets: [{
                data: [12, 3, 3],
                backgroundColor: ['#1B4332', '#2A6F5F', '#B0BEC5'],
                borderWidth: 5,   // stroke width 5px
                borderColor: '#fff' // optional, makes gaps visible
            }]
        },
        options: {
            cutout: '70%',  // size of donut hole
            plugins: {
                legend: {
                    position: 'right',
                    labels: {  // ✅ all legend label options go here
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 10,
                        boxHeight: 10,
                        font: {
                            size: window.innerWidth < 768 ? 8 : 13
                        }
                    }
                }
            }
        }
    });




    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Done',
                    data: [11, 15, 27, 12, 16, 17, 19, 27, 28, 24, 17, 15],
                    backgroundColor: '#1B4332', borderRadius: 10,
                    maxBarThickness: window.innerWidth < 768 ? 12 : 32
                },
                {
                    label: 'Staying',
                    data: [25, 12, 13, 10, 29, 27, 13, 30, 11, 16, 21, 10],
                    backgroundColor: '#2A6F5F', borderRadius: 10,
                    maxBarThickness: window.innerWidth < 768 ? 12 : 32
                },
                {
                    label: 'Food',
                    data: [14, 18, 22, 30, 29, 16, 29, 26, 26, 15, 30, 16],
                    backgroundColor: '#B0BEC5', borderRadius: 10,
                    maxBarThickness: window.innerWidth < 768 ? 12 : 32
                },
                {
                    label: 'Tour',
                    data: [28, 26, 14, 10, 16, 19, 11, 17, 17, 17, 12, 19],
                    backgroundColor: '#DCE1E3', borderRadius: 10,
                    maxBarThickness: window.innerWidth < 768 ? 12 : 32
                },
                {
                    label: 'Others',
                    data: [19, 26, 10, 27, 10, 25, 24, 14, 11, 25, 20, 18],
                    backgroundColor: '#E6E0F0', borderRadius: 10,
                    maxBarThickness: window.innerWidth < 768 ? 12 : 32
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: { size: window.innerWidth < 768 ? 8 : 13 },
                        usePointStyle: true,  // 👈 make the legend markers circular
                        pointStyle: 'circle',
                        boxWidth: 8,
                        boxHeight: 8
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    barPercentage: 0.2,
                    categoryPercentage: 0.8,
                    ticks: {
                        font: { size: window.innerWidth < 768 ? 8 : 13 }
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: { size: window.innerWidth < 768 ? 8 : 13 }
                    }
                }
            }
        }
    });


})