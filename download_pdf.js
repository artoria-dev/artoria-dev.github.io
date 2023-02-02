const button = document.getElementById('download-pdf');

function generatePDF() {
    printJS({
        printable: 'graph1',
        type: 'html',
        targetStyles: ['*'],
        header: 'test WOLOLO'
    })
}

button.addEventListener('click', generatePDF);