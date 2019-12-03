var red = document.querySelector('.block--red');
var blue = document.querySelector('.block--blue');
var green = document.querySelector('.block--green');
var red = document.querySelector('.block--red');
var pink = document.querySelector('.block--pink');
var gray = document.querySelector('.block--gray');
var parent = document.querySelector('.blocks');
var blocks = document.querySelectorAll(".block");
let currentBlock = "";


  

blocks.forEach(block => {
    currentBlock = block;

    var tween = gsap.to(currentBlock, {
        duration: 4, 
        x: 750, 
        rotation: 360, 
        ease: "none", 
        paused: true
      });


    // block.addEventListener("click", e => {
    //     parent.insertBefore(block, parent.firstChild);   
    // });

    block.addEventListener("mousedown", e => {
        parent.insertBefore(block, parent.firstChild);  
        tween.play();   
    });

    block.addEventListener("mouseleave", e => {
        
        tween.pause();
    });

    block.addEventListener("mouseup", e => {
        tween.pause();  
    });


});

