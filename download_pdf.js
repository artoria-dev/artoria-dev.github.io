const button = document.getElementById('download-pdf');

function generatePDF() {
    const container = document.createElement('div');

    const element = document.getElementById('to-print-as-pdf');
    const opt = document.getElementById('range')

    container.appendChild(element);
    container.appendChild(opt);

    const options = {
        margin: [0, 0, 0, 0],
        filename: 'file.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
        .from(container)
        .set(options)
        .save();
}

button.addEventListener('click', generatePDF);