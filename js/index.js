// Your code goes here

let header = document.querySelector("header");
let btns = document.querySelectorAll(".btn");
let headerImg = document.querySelector(".intro img");


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

headerImg.addEventListener("keydown", e => {
    if (keyCode === keyQ){
        headerImg.style.transform = "rotate(0.5turn)";
    }
    
});



