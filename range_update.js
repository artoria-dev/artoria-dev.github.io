let slider = document.getElementById("range");
let textbox = document.getElementById("textbox");
let xVals = [], yVals = [];


for (let i = 1; i <= 100; i++) {
    xVals.push(i);
    yVals.push(Math.pow(i, slider.value));
}

let trace1 = {
    x: xVals,
    y: yVals,
    type: 'scatter'
}
let data = [trace1];
Plotly.newPlot('graph1', data);

slider.oninput = function() {
    // update textbox value
    textbox.value = slider.value;

    // update y values
    for (let i = 0; i < yVals.length; i++) {
        yVals[i] = Math.pow(xVals[i], slider.value)
    }

    // update plot
    let trace1 = {
        x: xVals,
        y: yVals,
        type: 'scatter'
    }
    let data = [trace1];
    Plotly.newPlot('graph1', data);
}



textbox.oninput = function() {
    // update slider value
    slider.value = textbox.value;

    // update y values
    for (let i = 0; i < yVals.length; i++) {
        yVals[i] = Math.pow(xVals[i], slider.value)
    }

    // update plot
    let trace1 = {
        x: xVals,
        y: yVals,
        type: 'scatter'
    }
    let data = [trace1];
    Plotly.newPlot('graph1', data);
}


/*
// add event listener to textbox
textbox.addEventListener('change',

*/