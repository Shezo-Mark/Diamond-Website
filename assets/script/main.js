$('.banner_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayHoverPause:true,
    items:1,
    dots:false,
    animateIn: 'fadeIn',
    // animateOut: 'fadeOut',
    navText:['<img src="./assets/images/left-arrow.png" class="img-fluid">', '<img src="./assets/images/right-arrow.png" class="img-fluid">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
    }
});


$('.system_slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayHoverPause:true,
    items:3,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        },
    }
});

// testomonials
$('.testomonials').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayHoverPause:true,
    items:1,
    dots:false,
    navText:['<img src="./assets/images/left_red_arrow.png" class="img-fluid">', '<img src="./assets/images/right_red_arrow.png" class="img-fluid">'],
    responsive:{
    }
});
$('.carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    responsive:{

    }
})


    