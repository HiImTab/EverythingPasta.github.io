
const faders = document.querySelectorAll('#container');
const sliders = document.querySelectorAll('.sliders');

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){

    entries.forEach(entry => {
        //don't do anything if not intersecting
        if(!entry.isIntersecting) {
            return;
        }
        else{
            //if intersectiing, enable appear and stop observing
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
});

//observe each fader
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

//observe each slider
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})