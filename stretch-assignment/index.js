var red = document.querySelector('.block--red');
var blue = document.querySelector('.block--blue');
var green = document.querySelector('.block--green');
var red = document.querySelector('.block--red');
var pink = document.querySelector('.block--pink');
var gray = document.querySelector('.block--gray');
var parent = document.querySelector('.blocks');
var blocks = document.querySelectorAll(".block")


blocks.forEach(block => {
    block.addEventListener("click", e => {
    parent.insertBefore(block, parent.firstChild);
    })
});