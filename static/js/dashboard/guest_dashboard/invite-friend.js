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
                tension: 0,
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
createChart('total-click', [100, 200, 100, 180, 200, 130, 44, 100, 22, 202, 55, 90], '#0F4638'); // total click
createChart('orders-placed', [100, 200, 100, 180, 200, 130, 44, 100, 22, 202, 55, 90], '#0F4638');      // order placed
createChart('approved-order', [100, 200, 100, 180, 200, 130, 44, 100, 22, 202, 55, 90], '#0F4638'); // approved order
createChart('total-reward', [100, 200, 100, 180, 200, 130, 44, 100, 22, 202, 55, 90], '#0F4638'); // total reward
createChart('total-earning', [100, 200, 100, 180, 200, 130, 44, 100, 22, 202, 55, 90], '#0F4638'); // total reward
