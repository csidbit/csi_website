
const tl = gsap.timeline({defalts: {ease: "power2.out"}})
tl.to('.hidetext',{y:"0%",duration:1,stagger:0.3});
tl.to('.slider',{y:"-100%",duration:1,delay:0.5});
tl.to('.landingpage',{y:"-100%",duration:1.5},"-=1");
tl.fromTo('.header',{y:"1rem",opacity:0},{y:"0",opacity:1,duration:1});
// tl.fromTo('.header',{opacity:0},{opacity:1,duration:1});
tl.fromTo('.content',{opacity:0},{opacity:1,duration:1},"-=1.5");

var header = document.getElementById("header");
var lastscrolltop = 0;
window.addEventListener("scroll",function(){
    var scrolltop = this.window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrolltop>lastscrolltop){
        header.style.top="-20rem";
    }else{
        header.style.top="0";
    }
    lastscrolltop=scrolltop;
})
