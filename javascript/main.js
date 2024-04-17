document.addEventListener('DOMContentLoaded', function() {
    //手機版選單
    let menuBtn  = document.querySelector('.menuBtn');
    let menuBox  = document.querySelector('.menuBox');
    menuBtn.addEventListener('click', function() {
        if( !menuBtn.classList.contains('open') ) {
            menuBtn.classList.add('open');
            menuBox.classList.add('show');
        } else {
            menuBtn.classList.remove('open');
            menuBox.classList.remove('show');
        }
    });

});


var toAbout = document.querySelector("#about");
var block1 = document.querySelector(".block1");
var toPortfolio = document.querySelector("#portfolio");
var block2 = document.querySelector(".block2");
var toOther = document.querySelector("#other");
var block3 = document.querySelector(".block3");
let menuBtn  = document.querySelector('.menuBtn');
let menuBox  = document.querySelector('.menuBox');

function to(toEl) {
    let bridge = toEl;
    let body = document.body;
    let height = 0;

    do {
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    }while(bridge !== body)

    //平滑移動
    window.scrollTo({
        top: height,
        behavior: "smooth"
    })
}

toAbout.addEventListener("click",function(){
    to(block1)
    menuBox.classList.remove('show');
    menuBtn.classList.remove('open');
});

toPortfolio.addEventListener("click",function(){
    to(block2)
    menuBox.classList.remove('show');
    menuBtn.classList.remove('open');
});

toOther.addEventListener("click",function(){
    to(block3)
    menuBox.classList.remove('show');
    menuBtn.classList.remove('open');
});