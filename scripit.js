// drop down js
document.getElementById("page").addEventListener('mouseenter', () => {
    document.getElementById("dropdown").style.visibility = "visible"
})
document.getElementById("page").addEventListener('mouseleave', () => {
    document.getElementById("dropdown").style.visibility = "hidden"
})
//dropdown js
//inner sidebar
document.getElementById("page-one").addEventListener('click', (Event) => {
    Event.preventDefault();
    if (document.getElementById("dropdown-one").style.height === "120px") {
        document.getElementById("dropdown-one").style.height = "0px"
    }
    else {
        document.getElementById("dropdown-one").style.height = "120px"
    }
})
let isOpen = false;
let linksOne = document.getElementById("links-one");
document.getElementById("menu-side").addEventListener('click', () => {
    if (isOpen) {
        linksOne.style.height = "0px";
    } else {
        linksOne.style.height = "auto";
    }
    isOpen = !isOpen;
});
// inner sidebar
// sidebar
let menu = document.getElementById("menu")
let sidebar = document.getElementById("sidebar")
let cross = document.getElementById("cross")
menu.addEventListener('click', () => {
    sidebar.style.transform = "translate(0%)"
})
cross.addEventListener('click', () => {
    sidebar.style.transform = "translate(-100%)"
})
//sidebar
//tabs
function All() {
    document.getElementById("btn-2").style.textDecoration = "none"
    document.getElementById("btn-3").style.textDecoration = "none"
    document.getElementById("btn-4").style.textDecoration = "none"
    document.getElementById("btn-5").style.textDecoration = "none"
    document.getElementById("btn-6").style.textDecoration = "none"
    document.getElementById("btn-1").style.textDecoration = "underline red 2px"
    document.getElementById("btn-1").style.textUnderlineOffset = "5px"
    document.getElementById("card-one").style.display = "grid"
    document.getElementById("card-two").style.display = "none"
    document.getElementById("card-three").style.display = "none"
    document.getElementById("card-four").style.display = "none"
    document.getElementById("card-five").style.display = "none"
    document.getElementById("card-six").style.display = "none"
}
function women() {
    document.getElementById("btn-1").style.textDecoration = "none"
    document.getElementById("btn-3").style.textDecoration = "none"
    document.getElementById("btn-4").style.textDecoration = "none"
    document.getElementById("btn-5").style.textDecoration = "none"
    document.getElementById("btn-6").style.textDecoration = "none"
    document.getElementById("btn-2").style.textDecoration = "underline red 2px"
    document.getElementById("btn-2").style.textUnderlineOffset = "5px"
    document.getElementById("card-one").style.display = "none"
    document.getElementById("card-two").style.display = "grid"
    document.getElementById("card-three").style.display = "none"
    document.getElementById("card-four").style.display = "none"
    document.getElementById("card-five").style.display = "none"
    document.getElementById("card-six").style.display = "none"
}
function men() {
    document.getElementById("btn-1").style.textDecoration = "none"
    document.getElementById("btn-2").style.textDecoration = "none"
    document.getElementById("btn-4").style.textDecoration = "none"
    document.getElementById("btn-5").style.textDecoration = "none"
    document.getElementById("btn-6").style.textDecoration = "none"
    document.getElementById("btn-3").style.textDecoration = "underline red 2px"
    document.getElementById("btn-3").style.textUnderlineOffset = "5px"
    document.getElementById("card-one").style.display = "none"
    document.getElementById("card-two").style.display = "none"
    document.getElementById("card-three").style.display = "grid"
    document.getElementById("card-four").style.display = "none"
    document.getElementById("card-five").style.display = "none"
    document.getElementById("card-six").style.display = "none"
}
function kid() {
    document.getElementById("btn-1").style.textDecoration = "none"
    document.getElementById("btn-2").style.textDecoration = "none"
    document.getElementById("btn-3").style.textDecoration = "none"
    document.getElementById("btn-5").style.textDecoration = "none"
    document.getElementById("btn-6").style.textDecoration = "none"
    document.getElementById("btn-4").style.textDecoration = "underline red 2px"
    document.getElementById("btn-4").style.textUnderlineOffset = "5px"
    document.getElementById("card-one").style.display = "none"
    document.getElementById("card-two").style.display = "none"
    document.getElementById("card-three").style.display = "none"
    document.getElementById("card-four").style.display = "grid"
    document.getElementById("card-five").style.display = "none"
    document.getElementById("card-six").style.display = "none"
}
function acc() {
    document.getElementById("btn-1").style.textDecoration = "none"
    document.getElementById("btn-2").style.textDecoration = "none"
    document.getElementById("btn-3").style.textDecoration = "none"
    document.getElementById("btn-4").style.textDecoration = "none"
    document.getElementById("btn-6").style.textDecoration = "none"
    document.getElementById("btn-5").style.textDecoration = "underline red 2px"
    document.getElementById("btn-5").style.textUnderlineOffset = "5px"
    document.getElementById("card-one").style.display = "none"
    document.getElementById("card-two").style.display = "none"
    document.getElementById("card-three").style.display = "none"
    document.getElementById("card-four").style.display = "none"
    document.getElementById("card-five").style.display = "grid"
    document.getElementById("card-six").style.display = "none"
}
function cos() {
    document.getElementById("btn-1").style.textDecoration = "none"
    document.getElementById("btn-2").style.textDecoration = "none"
    document.getElementById("btn-3").style.textDecoration = "none"
    document.getElementById("btn-4").style.textDecoration = "none"
    document.getElementById("btn-5").style.textDecoration = "none"
    document.getElementById("btn-6").style.textDecoration = "underline red 2px"
    document.getElementById("btn-6").style.textUnderlineOffset = "5px"
    document.getElementById("card-one").style.display = "none"
    document.getElementById("card-two").style.display = "none"
    document.getElementById("card-three").style.display = "none"
    document.getElementById("card-four").style.display = "none"
    document.getElementById("card-five").style.display = "none"
    document.getElementById("card-six").style.display = "grid"
}
//tabs
// slider
let scrollcontainer = document.getElementById("scroll");
let dot1 = document.getElementById("dot-1");
let dot2 = document.getElementById("dot-2");
let dot3 = document.getElementById("dot-3");

scrollcontainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
});
function scrollToSection(sectionIndex) {
    const sectionWidth = scrollcontainer.clientWidth;
    scrollcontainer.scrollTo({
        left: sectionWidth * sectionIndex,
        behavior: 'smooth'
    });
}

dot1.addEventListener('click', () => {
    scrollToSection(0)
    dot1.style.backgroundColor = "red"
    dot1.style.border = "red"
    dot2.style.backgroundColor = "gray"
    dot2.style.border = "gray"
    dot3.style.backgroundColor = "gray"
    dot3.style.border = "gray"
});
dot2.addEventListener('click', () => {
    scrollToSection(1)
    dot1.style.backgroundColor = "gray"
    dot1.style.border = "gray"
    dot2.style.backgroundColor = "red"
    dot2.style.border = "red"
    dot3.style.backgroundColor = "gray"
    dot3.style.border = "gray"
});
dot3.addEventListener('click', () => {
    scrollToSection(2)
    dot1.style.backgroundColor = "gray"
    dot1.style.border = "gray"
    dot2.style.backgroundColor = "gray"
    dot2.style.border = "gray"
    dot3.style.backgroundColor = "red"
    dot3.style.border = "red"
});



// slider
// countdown
// Set the date we're counting down to (30 days from now)
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 30);


const countdownInterval = setInterval(function () {

    const now = new Date().getTime();

    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").querySelector("h1").textContent = days;
    document.getElementById("hours").querySelector("h1").textContent = hours;
    document.getElementById("minutes").querySelector("h1").textContent = minutes;
    document.getElementById("seconds").querySelector("h1").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h1>Countdown Over</h1>";
    }
}, 1000);

// countdown

