window.onload = function () {

    CanvasJS.addColorSet("greenShades",
        [//colorSet Array

            "#f15622",
            "#008080",
            "#2E8B57",
            "#3CB371",
            "#90EE90"
        ]);

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        colorSet:  "greenShades",
        backgroundColor: "transparent",
        axisY: {
            includeZero: false,
            lineColor: '#f25b57',
            tickColor: '#f25b57',
            gridColor: '#f25b57',
            gridThickness: 0,
            interval: 10
        },
        axisX: {
            lineColor: '#f25b57',
            tickColor: '#f25b57',
        },
        data: [{
            type: "area",
            dataPoints: dps
        }]
    });

    var xVal = 0;
    var yVal = 100;
    var updateInterval = 1000;
    var dataLength = 20; // number of dataPoints visible at any point

    var updateChart = function (count) {

        count = count || 1;

        for (var j = 0; j < count; j++) {
            yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }

        if (dps.length > dataLength) {
            dps.shift();
        }

        chart.render();
    };

    updateChart(dataLength);
    setInterval(function(){updateChart()}, updateInterval);

}

