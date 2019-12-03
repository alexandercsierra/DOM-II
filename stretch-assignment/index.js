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

    // block.addEventListener("mouseup", e => {
    //     tween.pause();  
    // });


});



//which child are you currently?

// var index = Array.prototype.indexOf.call(parent.children, block);
// var spot = 0;

//if not first, subtract 1 from child number and move up that number of spots

// if (index !== 0){
//     spot = index -1;

// }

//remove divs from page
//reappend divs in new order
//as block moves up the block currently in that spot moves down

//repeat until in spot 1
