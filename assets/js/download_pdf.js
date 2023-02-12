const button = document.getElementById('download-pdf');

function generatePDF() {
    printJS({
        printable: 'graph',
        type: 'html',
        targetStyles: ['*'],
        header: 'Zielpfad in t CO2'
    })
}

button.addEventListener('click', generatePDF);