let crsr= document.getElementById("cursor");
var crsrblur= document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){

    crsr.style.left=dets.x+30+"px";
    crsr.style.top=dets.y+"px";
    
    crsrblur.style.left=dets.x-180+"px";
    crsrblur.style.top=dets.y-180+"px";
    

})

var h4all=document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function() {
        crsr.style.transform = "scale(3)";
        crsr.style.border = "1px solid #fff";
        
        crsr.style.backgroundColor="transparent"; 
        crsr.style.cursor="pointer"
    });
    
    elem.addEventListener("mouseleave", function() {
        crsr.style.transform = "scale(1)";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "0px solid #95C11E";
    });
});

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
});
// gsap.from(".card",{
    
//     scale:0.8,
//     opacity:0,
//     stagger:1,
//     duration:1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1
//     }
// });

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
         trigger:"#nav",
         scroller:"body",
        
         start:"top -10%",
         end:"top -11%",
         scrub:1.1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         start:"top 55%",
         end:"top 45%",
         scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         start:"top 55%",
         end:"top 45%",
         scrub:4
    }
})
gsap.from("#page4 h1",{
    y:30,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
