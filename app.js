var primary_color = '#17191e'
const tl = gsap.timeline({defalts: {ease: "power2.out"}})
// tl.to('.hidetext',{y:"0%",duration:1,stagger:0.3});
// tl.to('.slider',{y:"-100%",duration:1,delay:0.5});
// tl.to('.landingpage',{y:"-100%",duration:1.5},"-=1");
tl.fromTo('.header',{y:"1rem",opacity:0},{y:"0",opacity:1,duration:1});
tl.fromTo('.header',{opacity:0},{opacity:1,duration:1});
tl.fromTo('.content',{opacity:0},{opacity:1,duration:1},"-=1.5");

var header = document.getElementById("header");
var lastscrolltop = 0;
window.addEventListener("scroll",function(){
    var scrolltop = this.window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrolltop>lastscrolltop){
        header.style.top="-20rem";
    }else{
        header.style.top="0";
        header.style.backgroundColor=primary_color;
    }

    if(scrolltop==0){
        header.style.backgroundColor=primary_color;
    }
    lastscrolltop=scrolltop;
})

var scrolltopbutton = document.getElementById('scrolltop_btn');
var pos = document.documentElement.scrollTop;
if(pos>100){
    scrolltopbutton.style.display='inline';
}


// mobile menu start

var menutogggler = document.getElementById('menu-toggler');
mobnav_link = document.getElementById('mobnav_link');
mobnav_close = document.getElementById('mobnav_close');
menutogggler.addEventListener('click',function(){
    mobnav_link.style.top="0%";
})
mobnav_close.addEventListener('click',function(){
    mobnav_link.style.top="-100%";
})


// mobile menu end 
// activities js 

// document.querySelectorAll('.grid .workshop').forEach(vid =>{
//     vid.onclick = ()=>{
//         document.querySelector('.popup_video').style.display='block';
//         document.querySelector('.popup_video iframe').src=vid.getAttribute('data-src');
//     }
// })

// document.querySelector('.popup_video i').onclick = ()=>{
//     document.querySelector('.popup_video').style.display='none';
// }
