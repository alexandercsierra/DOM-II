var red = document.querySelector('.block--red');
var blue = document.querySelector('.block--blue');
var green = document.querySelector('.block--green');
var red = document.querySelector('.block--red');
var pink = document.querySelector('.block--pink');
var gray = document.querySelector('.block--gray');
var parent = document.querySelector('.blocks');
var blocks = document.querySelectorAll(".block");
var blocksArr = Array.from(document.querySelectorAll(".block"));
let currentBlock = "";



blocks.forEach(block => {

    var tween = gsap.to(block, {
        duration: 10, 
        x: 1920, 
        rotation: 360, 
        ease: "none", 
        paused: true
      });

    var tween2 = gsap.to(block, 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: "-30%", paused: true});


    block.addEventListener("mousedown", e => {
        parent.insertBefore(block, parent.firstChild);
        tween.play(); 
        tween2.restart();
        
    });

    block.addEventListener("mouseleave", e => {
        
        tween.pause();
        
    });



});



