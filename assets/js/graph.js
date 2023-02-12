let strom_netzbezogen_kwh = document.getElementById("strom_netzbezogen_in_kwh");
let erdgasverbrauch_m3 = document.getElementById("erdgasverbrauch_in_m3");
let wasser_m3 = document.getElementById("wasser_in_m3");
let strom_netzbezogen_kwh_slider = document.getElementById("strom_netzbezogen_in_kwh_slider");
let erdgasverbrauch_m3_slider = document.getElementById("erdgasverbrauch_in_m3_slider");
let wasser_m3_slider = document.getElementById("wasser_in_m3_slider");
let thg_output = document.getElementById("thg_sum");

let emissionsfaktoren = {
    'heizöl': 1.1,
    'erdgas': 1.1,
    'flüssiggas': 1.1,
    'biogas': 1.1,
    'bioöl': 1.1,
    'holz': 0.2,
    'strom_netzbezogen': 1.8,
    'strom_erzeugt': 0.0
}

let emissionsfaktoren_g_co2_pro_kwh = {
    'heizöl': 310,
    'erdgas': 240,
    'flüssiggas': 270,
    'biogas': 140,
    'bioöl': 210,
    'holz': 20,
    'strom_netzbezogen': 560,
    'strom_erzeugt': 0
}

let zielpfad_dritter_sektor = {
    2020: 118000000,
    2021: 113000000,
    2022: 107700000,
    2023: 101700000,
    2024: 96700000,
    2025: 91700000,
    2026: 86700000,
    2027: 81700000,
    2028: 76700000,
    2029: 71700000,
    2030: 66700000,
    2031: 62048675,
    2032: 57721710,
    2033: 53696486,
    2034: 49951962,
    2035: 46468561,
    2036: 43228076,
    2037: 40213566,
    2038: 37409272,
    2039: 34800536,
    2040: 32373721,
    2041: 30116139,
    2042: 28015990,
    2043: 26062295,
    2044: 24244840,
    2045: 22554126
}

let avg_brennwert_erdgas_kwh_m3 = 11.25;
let zustandszahl_abnahmeort = 0.8981;
let treibhausgasemissionen_leitungswasser_in_g_pro_l = 0.3604;

function updateGraph() {
    let xVals = [], yVals = [];

    // calculate it !
    let sum_in_t = ((((strom_netzbezogen_kwh.value * emissionsfaktoren['strom_netzbezogen']) * emissionsfaktoren_g_co2_pro_kwh[
        'strom_netzbezogen']) + (((erdgasverbrauch_m3.value * avg_brennwert_erdgas_kwh_m3 * zustandszahl_abnahmeort) *
        emissionsfaktoren['erdgas']) * emissionsfaktoren_g_co2_pro_kwh['erdgas']) + ((wasser_m3.value * 1000) *
        treibhausgasemissionen_leitungswasser_in_g_pro_l)) / 1000000);

    //console.log(sum_in_t);

    thg_output.innerHTML = (Math.round(sum_in_t * 100) / 100).toString();

    // add keys from zielpfad_dritter_sektor to xVals
    for (let key in zielpfad_dritter_sektor) {
        xVals.push(key);
    }

    // fill yVals with sum_in_t
    for (let i = 0; i < xVals.length; i++) {
        yVals.push(sum_in_t);
    }

    for (let i = 2; i < xVals.length; i++) {
        yVals[i] = (zielpfad_dritter_sektor[xVals[i]] / zielpfad_dritter_sektor[xVals[i-1]])*yVals[i-1]
    }

    // create dict
    let trace1 = {
        x: xVals,
        y: yVals,
        type: 'scatter'
    }
    let data = [trace1];

    // layout
    let layout = {
        title: 'Zielpfad in t CO2',
        xaxis: {
            autotick: true,
            title: 'Jahr'
        },
        yaxis: {
            autotick: true,
            title: 'Treibhausgasemissionen in t'
        }
    };

    Plotly.newPlot('graph', data, layout);
}

function updateTextBoxValues() {
    strom_netzbezogen_kwh.value = strom_netzbezogen_kwh_slider.value;
    erdgasverbrauch_m3.value = erdgasverbrauch_m3_slider.value;
    wasser_m3.value = wasser_m3_slider.value;
    updateGraph();
}

function updateSliderValues() {
    strom_netzbezogen_kwh_slider.value = strom_netzbezogen_kwh.value;
    erdgasverbrauch_m3_slider.value = erdgasverbrauch_m3.value;
    wasser_m3_slider.value = wasser_m3.value;
    updateGraph();
}

// add event listener

strom_netzbezogen_kwh.addEventListener('input', updateSliderValues);
erdgasverbrauch_m3.addEventListener('input', updateSliderValues);
wasser_m3.addEventListener('input', updateSliderValues);

strom_netzbezogen_kwh_slider.addEventListener('input', updateTextBoxValues);
erdgasverbrauch_m3_slider.addEventListener('input', updateTextBoxValues);
wasser_m3_slider.addEventListener('input', updateTextBoxValues);


// initial call
updateGraph();