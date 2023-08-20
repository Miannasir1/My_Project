const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1 = gsap.timeline();
    t1.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        duration: 2,
        ease: Expo.easeInOut,
        stagger:.2,
        delay:-1,
    })
    .from("#herofooter",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circleClosing(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(details){
       var xdiff = details.clientX - xprev;
       var ydiff = details.clientY - yprev;

       xprev = details.clientX;
       yprev = details.clientY;

      xscale = gsap.utils.clamp(.8,1.2,xdiff);
      yscale = gsap.utils.clamp(.8,1.2,ydiff);

      circleMouseFollower(xscale,yscale);
    })
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(details){
        document.querySelector('#miniCircle').style.transform=`translate(${details.clientX}px,${details.clientY}px) scale(${xscale},${yscale})`;
    })
}
circleClosing();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem){
    elem.addEventListener("mousemove",function(details){
        console.log(details.clientX,details.clientY)
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power1,
            
        })
    })
})