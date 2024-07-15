let burger = document.querySelector(".burger")
let loaderH1 = document.querySelector(".loader h1");



function loco(){
    (function () {
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }


function loaderFunction(){
    let tl2 = gsap.timeline();
    tl2.to(loaderH1,{
        duration:.5,
        delay:.1,
        ease:"steps(1)",
        onStart:function(){
            loaderH1.innerText = "Experience"
        }
    })
    tl2.to(loaderH1,{
        duration:.5,
        delay:.1,
        ease:"steps(1)",
        onStart:function(){
            loaderH1.innerText = "the"
        }
    })
    tl2.to(loaderH1,{
        duration:.5,
        delay:.1,
        ease:"steps(1)",
        onStart:function(){
            loaderH1.innerText = "Magic"
        }
    })
    tl2.to(loaderH1,{
        duration:.5,
        delay:.1,
        ease:"steps(1)",
        onStart:function(){
            loaderH1.innerText = "of"
        }
    })
    tl2.to(loaderH1,{
        duration:.5,
        delay:.1,
        ease:"steps(1)",
        onStart:function(){
            loaderH1.innerText = "Color";
            loaderH1.classList.add("asian-paints");
            loaderH1.style.fontWeight = "500"
        }
    })
    tl2.to(loaderH1,{
        duration:.5,
        delay:.1,
        ease:"steps(1)",
        onStart:function(){
                loaderH1.innerText = "With";
                loaderH1.classList.remove("asian-paints");
                loaderH1.style.fontWeight = "500"
        }
    })
    tl2.to(loaderH1,{
        opacity:1,
        duration:.1,
        delay:.1,
        ease:"steps(1)",
        onStart:function(){
                loaderH1.innerText = `Asian Paints`;
                loaderH1.classList.add("asian-paints");
                loaderH1.style.fontFamily = "Qanoar Personal Use";
        }
    })
    tl2.to(".loader div",{
        opacity:1,
        duration:1,
        ease:Power1
    })
    tl2.to(loaderH1,{
        delay:1,
        opacity:0,
        display:"none"
    })
    tl2.to(".loader-line",{
        height:0,
        stagger:.1
    })
    
    tl2.to(".loader",{
        display:"none"
    })
    
}


function navFunction(){
    let a = true;
    burger.addEventListener("click",()=>{
    if(a){
        // document.querySelector(".nav").style.backgroundColor = "#ffffff29";
        document.body.classList.add('no-scroll');
        document.querySelector(".nav-section").style.display = "flex";
        gsap.to(".b1",{
            rotate:45,
            position:"absolute"
        });
    
        gsap.to(".b2",{
            rotate:-45,
            position:"absolute"
        });

        gsap.to(".nav",{
            height:"100vh",
            backgroundColor:"#ffffff29",
            ease: Power4
        });

        a=false;
    }else{
        // document.querySelector(".nav").style.backgroundColor = "#ffffff00";
        document.body.classList.remove('no-scroll');
        document.querySelector(".nav-section").style.display = "none";
        gsap.to(".b1",{
            rotate:0,
            position:"relative"
        });
    
        gsap.to(".b2",{
            rotate:0,
            position:"relative"
        });

        gsap.to(".nav",{
            height:"9vh",
            backgroundColor:"#ffffff00",
            ease: Power4
        });

        a=true;
    }
})

}


function rollerFunction(){
    gsap.from(".roller",{
        top:"0",
        duration:3,
        ease:Power4
    });
    gsap.from(".roller-line",{
        top:"-100vh",
        duration:3,
        ease:Power4
    });
    
    gsap.from(".line h1",{
        y:200,
        duration:1,
        delay:2,
        stagger:.2,
        onComplete:function(){
            gsap.to(".line",{
                overflow:"visible"
            })
        }
    });

    gsap.from(".heroimg",{
        y:30,
        opacity:0,
        stagger:.2,
        delay:2.5,
        ease:Expo,
        duration:2
    });
        
    gsap.fromTo(".roller",{ top: "100vh"},{
        display:"visible",
        top:"282vh",
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            start:"top -30%",
            end:"bottom -50%",
            scrub:true
        },
        onComplete:function(){
            gsap.set(".roller",{display:"none"})
        }
    });

    gsap.fromTo(".roller-line",{ top: "0vh"},{
        top:"170vh",
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            start:"top -30%",
            end:"bottom -50%",
            scrub:.1
        },
    });


    gsap.from(".color-line1",{
        height:"0vh",
        duration:2,
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            start:"top -40%",
            end:"bottom -40%",
            scrub:.1
        },
    });
    gsap.from(".color-line2",{
        height:"0vh",
        duration:2,
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            start:"top -40%",
            end:"bottom -50%",
            scrub:.1
        },
    });
    gsap.from(".color-line3",{
        height:"0vh",
        duration:2,
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            start:"top -40%",
            end:"bottom -30%",
            scrub:.1
        },
    });
    gsap.from(".color-line4",{
        height:"0vh",
        duration:2,
        scrollTrigger:{
            trigger:".home",
            scroller:"body",
            start:"top -40%",
            end:"bottom -20%",
            scrub:true
        },
    })

}

function page2Function(){
    document.querySelectorAll(".makeover")
    .forEach((el)=>{
        el.addEventListener("mousemove",(dets)=>{
            gsap.to(el.querySelector(".makeover-pic"),{
                opacity:1,
                x:gsap.utils.mapRange(0,window.innerWidth,-100,100,dets.clientX),
                y:gsap.utils.mapRange(0,window.innerHeight,-100,100,dets.clientY),
                ease:Power4,
                duration:.3
            });
            gsap.to(el.querySelector(".makeover-inner"),{
                height:"100%",
                ease:Power4,
                duration:.3
            })
            el.style.color = "#b191e9";
        });
        el.addEventListener("mouseleave",(dets)=>{
            gsap.to(el.querySelector(".makeover-pic"),{
                opacity:0,
                ease:Power4,
                duration:.3
            });
            gsap.to(el.querySelector(".makeover-inner"),{
                height:"0%",
                ease:Power4,
                duration:.3
            })
            el.style.color = "#3d1e74";
        })
    })    
}

function page4Animation(){

    if(window.innerWidth >= 768){
        Shery.imageEffect(".back",{
            style:5,
            config: {"a":{"value":1.15,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.97938153365209},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.12,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":23.66,"range":[0,100]}},
            gooey:true
        })
    }

    
    
    
    
    let elems = document.querySelectorAll(".elem");
    
    elems.forEach((elem)=>{
        let h1s = elem.querySelectorAll(".top h1");
        let index = 0;
        let animating = false;
        document.querySelector(".paint-types").addEventListener("click",()=>{
            if(!animating){
                animating = true;
                gsap.to(h1s[index],{
                    top:"-=100%",
                    ease: Expo.easeInOut,
                    duration:1,
                    onComplete:function(){
                        gsap.set(this._targets[0],{
                            top:"100%"
                        })
                        animating = false;
                    }
                });
                
                index === h1s.length-1? (index=0):index++;
        
                gsap.to(h1s[index],{
                    top:"-=100%",
                    ease: Expo.easeInOut,
                    duration:1
                })
            }
        })
    })
    
}

// loaderFunction();
loco();
navFunction();
rollerFunction();
page2Function();
page4Animation();







