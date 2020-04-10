//Home Page
var image = document.getElementsByClassName('hero-image');
new simpleParallax(image, {
    overflow: false,
    delay: 0.5,
    scale: 2,
    breakpoint: 768
});

//Hack Western Page
//Alien
var image = document.getElementsByClassName('asset-img');
new simpleParallax(image, {
    overflow: true,
    delay: 0.0,
    scale: 1.1,
    breakpoint: 768
});

//Moon
var image = document.getElementsByClassName('asset2-img');
new simpleParallax(image, {
    overflow: true,
    delay: 0.5,
    scale: 2,
    breakpoint: 768
});

//UFO
var image = document.getElementsByClassName('asset-ufo');
new simpleParallax(image, {
    overflow: true,
    delay: 0.2,
    scale: 2,
    breakpoint: 768
});

//Earth
var image = document.getElementsByClassName('asset-earth');
new simpleParallax(image, {
    overflow: true,
    delay: 0.2,
    scale: 1.1,
    breakpoint: 768
});



