let slider = document.getElementById("range");
let output = document.getElementById("outp");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
