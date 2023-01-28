const btn = document.getElementById('change-pdf-content-visibility');

function changeContentVisibility() {
    const element = document.getElementById('to-print-as-pdf');
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible';
    } else {
        element.style.visibility = 'hidden';
    }
}

btn.addEventListener('click', changeContentVisibility);