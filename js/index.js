// Your code goes here

let header = document.querySelector("header");
let btns = document.querySelectorAll(".btn");
let p = document.querySelectorAll("p");
let headerImg = document.querySelector(".intro img");
let h2 = document.querySelectorAll("h2");
let imgs = document.querySelectorAll(".img-content img");
let links = document.querySelectorAll("nav a");


header.addEventListener("mouseover", e => {
    header.style.background = "#17a2b8";
});

header.addEventListener("mouseout", e => {
    header.style.background = "white";
});

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        btn.style.background = "#4cb094";
    });
})

btns.forEach(btn => {
    btn.addEventListener("dblclick", e => {
        btn.style.background = "#17A2B8";
    });
})

p.forEach(para => {
    para.addEventListener("copy", e => {
        para.style.background = "#FFEBCD";
    });
})

h2.forEach(h2 => {
    h2.addEventListener("mousedown", e => {
        h2.style.transform = "scale(1.5)";
    });
})

h2.forEach(h2 => {
    h2.addEventListener("mouseup", e => {
        h2.style.transform = "scale(1)";
    });
})


headerImg.addEventListener("click", e => {
    headerImg.style.transform = "rotate(0.5turn)";
    CSSPlugin.defaultTransformPerspective = 400; 
    gsap.to("img", {duration: 3, rotationY: 360});
})

imgs.forEach(imgs => {
    imgs.addEventListener("contextmenu", e => {
        imgs.src = "https://demotix.com/wp-content/uploads/2019/05/crazy-looing-cat.jpg";
        
    });
})

links.forEach(link => {
    link.addEventListener("mouseenter", e => {
        link.style.transform = "translate(120px, 50%)";
    });
})


// Green Sock

// CSSPlugin.defaultTransformPerspective = 400; 
// gsap.to("img", {duration: 3, rotationY: 360});







