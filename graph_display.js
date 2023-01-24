var exp = document.getElementById("range");

let
    xVals = [],
    yVals = [];
for (let i = 1; i <= 100; i++) {
    xVals.push(i);
    yVals.push(Math.pow(i, exp.value));
}

var trace1 = {
    x: xVals,
    y: yVals,
    type: 'scatter'
}
let data = [trace1];
Plotly.newPlot('graph', data);

slider.oninput = function() {
    for (let i = 0; i < yVals.length; i++) {
        yVals[i] = Math.pow(xVals[i], exp.value)
    }
    let trace1 = {
        x: xVals,
        y: yVals,
        type: 'scatter'
    }
    let data = [trace1];
    Plotly.newPlot('graph', data);
}