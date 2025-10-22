document.addEventListener("DOMContentLoaded", function () {

    function createChart(canvasId, data, color) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
                datasets: [{
                    label: canvasId,
                    data: data,
                    borderColor: color,
                    backgroundColor: color + '33', // light fill
                    tension: 0.1,
                    pointRadius: 0, borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { display: false }, y: { display: false } }
            }
        });
    }

    // Charts for each card
    createChart('paidChart', [11, 212, 55, 99, 333, 120, 144, 120, 6, 150, 100,], '#0F4638'); // Paid
    createChart('dueChart', [500, 550, 200, 610, 420, 500, 500, 550, 200, 610, 420, 500], '#0F4638');      // Due
    createChart('totalOrderChart', [100, 1700, 1600, 80, 200, 14, 500, 550, 200, 610, 420, 500], '#0F4638'); // Total





    // ===========   Expenses overview  ============
    const ctx = document.getElementById('expensesChart').getContext('2d');

    // Sample datasets
    const datasets = {
        "12m": {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            bars: [12, 18, 10, 25, 14, 22, 19, 23, 25, 29, 27, 15],
            trend: [10, 12, 14, 16, 18, 20, 21, 22, 24, 25, 26, 27]
        },
        "30d": {
            labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
            bars: Array.from({ length: 30 }, () => Math.floor(Math.random() * 30) + 5),
            trend: Array.from({ length: 30 }, (_, i) => 10 + i * 0.5)
        },
        "7d": {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            bars: [15, 20, 18, 25, 22, 19, 14],
            trend: [12, 14, 16, 18, 20, 21, 22]
        },
        "24h": {
            labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
            bars: Array.from({ length: 24 }, () => Math.floor(Math.random() * 20) + 5),
            trend: Array.from({ length: 24 }, (_, i) => 5 + i * 0.5)
        }
    };

    // Chart instance
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: datasets["12m"].labels,
            datasets: [
                {
                    type: 'bar',
                    data: datasets["12m"].bars,
                    backgroundColor: '#FF5733',
                    borderRadius: 50,   // thin bars
                    maxBarThickness: 20
                },
                {
                    type: 'line',
                    data: datasets["12m"].trend,
                    borderColor: '#e0c5ffff',
                    borderDash: [4, 4],
                    fill: false,
                    tension: 0.3,
                    borderWidth: 1,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        font: { size: 10 },   // x-axis label size
                        color: '#535862'         // optional: label color
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 10 },   // y-axis label size
                        color: '#535862'
                    }
                }
            }
        }
    });


    // Filter buttons
    document.querySelectorAll('.filters button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const range = btn.dataset.range;
            chart.data.labels = datasets[range].labels;
            chart.data.datasets[0].data = datasets[range].bars;
            chart.data.datasets[1].data = datasets[range].trend;
            chart.update();
        });
    });







    // Filter Head

    function FilterHead() {
        const allTabBtns = document.querySelectorAll('.financial-tabs .tab-btn');

        // Select both headers
        const otherHead = document.getElementById('for-other-tab-head');
        const couponWalletHead = document.getElementById('for-coupon-wallet-head');

        if (!allTabBtns.length || !otherHead || !couponWalletHead) {
            return;
        }


        allTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('for-coupon-wallet-btn')) {
                    // ✅ Show coupon/wallet head
                    otherHead.style.display = 'none';
                    couponWalletHead.style.display = 'block';
                } else {
                    // ✅ Show other tab head
                    couponWalletHead.style.display = 'none';
                    otherHead.style.display = 'block';
                }
            });
        });
    }

    FilterHead();

})
