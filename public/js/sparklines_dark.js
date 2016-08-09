function renderTemperatureSparklineById(id, height, width)
{
    return $(id).sparkline('html', {
        type: 'line',
        width: width,
        height: height,
        lineColor: '#CC5555',
        fillColor: false,
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        spotRadius: 0,
        chartRangeMin: 0,
        chartRangeMax: 40
    });
}

function renderHumiditySparklineById(id, height, width)
{
    return $(id).sparkline('html', {
        type: 'line',
        width: width,
        height: height,
        lineColor: '#5555EE',
        fillColor: false,
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        spotRadius: 0,
        chartRangeMin: 0,
        chartRangeMax: 100
    });
}