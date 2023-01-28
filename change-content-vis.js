const btn = document.getElementById('change-pdf-content-visibility');

function changeContentVisibility() {
    const element = document.getElementById('to-print-as-pdf');
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible';
        btn.innerHTML = 'disable content';
    } else {
        element.style.visibility = 'hidden';
        btn.innerHTML = 'enable content';
    }
}

btn.addEventListener('click', changeContentVisibility);