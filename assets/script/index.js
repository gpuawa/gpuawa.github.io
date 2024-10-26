async function scrollToTop() {
    window.scrollTo(0, 0);
}
window.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        event.preventDefault();
        scrollToTop();
    }
});