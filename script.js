

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-nav');

    if (window.scrollY > 0) {
        header.classList.add('sticky-style');
    } else {
        header.classList.remove('sticky-style');
    }
});



function navSelect(navIndex) {
    const elements = document.querySelectorAll('.nav-item');
    elements.forEach(element => element.classList.remove('active'));
    elements[navIndex].classList.add('active');
}