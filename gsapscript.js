function loading () {
    


var tl =gsap.timeline()
tl.to("#yellow",{
    top:"-100%",
    delay:0.5,
    duration:1.5,
    ease:"expo.out"
})
tl.from("#yellow2",{
top:"100%",
delay:0.9,
duration:0.7,
ease:"expo.out"
})
tl.to("#Loader h1",{
    delay:0.8,
    color:"black"
},"anim")
tl.to("#Loader",{
    opacity:0,
    display:"none"
})

}
loading()
var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2"); // Corrected to get a single element instead of a NodeList
elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        var bgimage = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimage})`; // Removed the space between url and parentheses
    });
});

