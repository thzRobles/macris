document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false,
    });
});

//javascript for responsive navigation sidebar menu
window.addEventListener("scroll", function() {
    // var header = document.querySelector("header")
    var header = document.querySelector("header")
    header.classList.toggle("down", window.scrollY > 0);

    // //change logo
    // var logo = document.querySelector(".logo img");
	// if (window.scrollY>0) 
    // {
	//     logo.setAttribute('src', 'img/logo/newlogo/newlogoblack.png');
	// }else {
	//     logo.setAttribute('src', 'img/logo/newlogo/newlogowhite.png');
	// }

});

// show effect
let ubication = window.pageYOffset;
window.onscroll = function() {
    let displacement = window.pageYOffset;
    if (ubication >= displacement) {
        document.getElementById('section-header').style.top = '0';
    }else {
        document.getElementById('section-header').style.top = '-100px'
    }
    ubication = displacement;
}