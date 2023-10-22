document.addEventListener('DOMContentLoaded', function() {

    const scrollingDiv = document.querySelector('.content');
    const h1 = scrollingDiv.querySelectorAll('h1');
    let zoom = 1;
    let lastScroll = window.scrollY;
    let currentScroll = lastScroll;
    let opacity = 100;

    window.addEventListener('scroll', () => {

        currentScroll += window.scrollY;

        if (currentScroll > lastScroll && zoom < 10){
            zoom += 0.4;
            opacity = Math.max(0, opacity - 5);
        }
        else{
            opacity = Math.min(100, opacity + 5);
            zoom = Math.max(1, zoom - 0.4);
        }

        h1.forEach(h => h.style.opacity = opacity + "%");
        scrollingDiv.style.transform = 'scale(' + zoom + ')';
        lastScroll = currentScroll;

    });
});