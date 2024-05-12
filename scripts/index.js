function scrollToTop() {
    const scrollDuration = 1200;
    const startTime = performance.now();
    function scrollStep(timestamp) {
        const progress = Math.min((timestamp - startTime) / scrollDuration, 1);
        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // 缓动函数
        window.scrollTo(0, window.pageYOffset * (1 - easeInOutQuad(progress)));
        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }
    requestAnimationFrame(scrollStep);
}
window.addEventListener('keydown', function (event) {
    if (event.key === 'w') {
        event.preventDefault();
        scrollToTop();
    }
});
