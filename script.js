let burger = document.querySelector(".burger")
let loaderH1 = document.querySelector(".loader h1");



function loco(){
    (function () {
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }


function buttonFunction(){
    document.querySelectorAll(".btn-text").forEach((el)=>{
        el.addEventListener("mousemove",()=>{
            el.querySelector(".btn-text .btn-h1").style.transform = "translateY(-100%)";
            el.querySelector(".btn-text .btn-h2").style.transform = "translateY(-100%)";
        });
    
        el.addEventListener("mouseleave",()=>{
            el.querySelector(".btn-text .btn-h1").style.transform = "translateY(0%)";
            el.querySelector(".btn-text .btn-h2").style.transform = "translateY(0%)";
        })
    })
}

function navFunction(){

    let a = true;
    burger.addEventListener("click",()=>{
    if(a){
        // document.querySelector(".nav").style.backgroundColor = "#ffffff29";
        document.body.classList.add('no-scroll');
        document.querySelector(".nav").classList.remove("backdrop-blur-xl");
        gsap.to(".b1",{
            backgroundColor:"#fff",
            rotate:45,
            position:"absolute",
        });
    
        gsap.to(".b2",{
            backgroundColor:"#fff",
            rotate:-45,
            position:"absolute"
        });
        gsap.to(".nav",{
            color:"#fff"
        });
        gsap.to(".nav-line",{
            width:"100%",
            duration:.8,
            delay:.7
        })

        gsap.to(".nav-section",{
            top:0,
            ease: "expo.in",

        });

        gsap.fromTo(".nav-text .txt-h1",{y:100},{
            y:0,
            delay:.2,
            duration:.6,
            ease:Power1,
            stagger:.05,
           
        });

        document.querySelectorAll(".nav-text").forEach((el)=>{
            el.addEventListener("mousemove",()=>{
                el.querySelector(".nav-text .txt-h1").style.transform = "translateY(-100%)";
            });

            el.addEventListener("mouseleave",()=>{
                el.querySelector(".nav-text .txt-h1").style.transform = "translateY(0%)";
            })
        })

        a=false;
    }else{
        // document.querySelector(".nav").style.backgroundColor = "#ffffff00";
        document.body.classList.remove('no-scroll');
        // document.querySelector(".nav-section").style.display = "none";
        document.querySelector(".nav").classList.add("backdrop-blur-xl");
        gsap.to(".b1",{
            backgroundColor:"#000",
            rotate:0,
            position:"relative"
        });
    
        gsap.to(".b2",{
            backgroundColor:"#000",
            rotate:0,
            position:"relative"
        });
        gsap.to(".nav",{
            color:"#000"
        });

        gsap.to(".nav-line",{
            width:"0%",
        })

        gsap.to(".nav-section",{
            top:"-100vh",
            ease: "circ.in",
            delay:.5

        });
        gsap.fromTo(".nav-text .txt-h1",{y:0},{
            y:100,
            // delay:.2,
            duration:.05,
            ease:Power1,
            stagger:.04
        })

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

    document.addEventListener("mousemove",(e)=>{
        gsap.to(".heroimg",{
            x:gsap.utils.mapRange(0,window.innerWidth,-10,10,e.clientX),
            y:gsap.utils.mapRange(0,window.innerHeight,-10,10,e.clientY),
            ease:Power4,
        });
    })
        
    gsap.fromTo(".roller",{ top: "100vh"},{
        display:"visible",
        top:"287vh",
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
        top:"195vh",
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
            gsap.to(el.querySelector("button"),{
                display:"block"
            });
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
            });
            
            if(window.innerWidth >= 768){
                el.style.color = "#b191e9";
            }
        });
        el.addEventListener("mouseleave",(dets)=>{
            gsap.to(el.querySelector("button"),{
                display:"none",
            })
            gsap.to(el.querySelector(".makeover-pic"),{
                opacity:0,
                ease:Power4,
                duration:.3
            });
            gsap.to(el.querySelector(".makeover-inner"),{
                height:"0%",
                ease:Power4,
                duration:.3
            });
            el.style.color = "#3d1e74";
        })
    })    


    gsap.from(".world-text h1",{
        opacity:0,
        stagger:.4,
        scrollTrigger:{
            trigger:".world-text h1",
            scroller:"body",
            start:"top 60%",
            end:"top 40%",
            scrub:.1
        }

    })
    gsap.from(".makeover",{
        y:-200,
        stagger:1,
        opacity:0,
        scrollTrigger:{
            trigger:".room-makeover",
            scroller:"body",
            start:"top 60%",
            end:"top 40%",
            scrub:.3
        }
    })

}

function page3Function(){
    // let marqueSplit = document.querySelector(".marquee").innerText.split("");

    // marqueSplit.forEach((elem)=>{
    //     elem.style.color     = '#fff';
        
    // });
}


function page4Animation(){
    var menu = ['Slide 1', 'Slide 2', 'Slide 3']
    var mySwiper = new Swiper ('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    })


    if(window.innerWidth >= 768){
        Shery.imageEffect(".back",{
            style:5,
            config: {"a":{"value":1.15,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.97938153365209},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.12,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":23.66,"range":[0,100]}},
            gooey:true
        })
    }
    
    let gradientColors = ["gradient2","gradient3","gradient4","gradient5","gradient1"];
    let elems = document.querySelectorAll(".elem");
    
    elems.forEach((elem)=>{
        let h1s = elem.querySelectorAll(".top h1");
        let index = 0;
        let animating = false;
        document.querySelector(".paint-types .back").addEventListener("click",()=>{
            if(!animating){
                document.body.classList.remove(gradientColors[index-1])
                document.body.classList.add(gradientColors[index])
                console.log(gradientColors[index]);
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
    });


    gsap.from(".page4-main",{
        scale:.8,
        // duration:1
        scrollTrigger:{
            trigger:".page4-main",
            scroller:"body",
            start:"top 80%",
            end:"top 30%",
            scrub:.2

        }
    })
   
    
}


function page5Function(){
    gsap.to(".video-div",{
        width:"100%",
        scrollTrigger:{
            trigger:".video-div",
            scroller:"body",
            // markers:true,
            start:"top 60%",
            end:"top 0%",
            scrub:.1
        },
    });

    gsap.to(".page5 h1",{
        opacity:0,
        scrollTrigger:{
            trigger:".page5",
            scroller:"body",
            start:"top -12%",
            end:"top -40%",
            scrub:.1,
            pin:true
        }
    })
}

function page8Function(){
    gsap.from(".page8-text h1",{
        opacity:0,
        scrollTrigger:{
            trigger:".page8-text",
            scroller:"body",
            start:"top 50%",
            end:"top 20%",
            scrub:.1,
        }
    })
    gsap.from(".page8-text h1",{
        opacity:1,
        scrollTrigger:{
            trigger:".page8-text",
            scroller:"body",
            start:"top -10%",
            end:"top -20%",
            scrub:.1,
        }
    })
    gsap.from(".collection-img",{
        opacity:0,
        scrollTrigger:{
            trigger:".page8-text",
            scroller:"body",
            start:"top -20%",
            end:"top -30%",
            scrub:.1,
        }
    })
    gsap.from(".collection-video1",{
        right:"-40%",
        scrollTrigger:{
            trigger:".page8-text",
            scroller:"body",
            start:"top -40%",
            end:"top -90%",
            scrub:.1,
        }
    })
    gsap.from(".collection-video2",{
        left:"-25%",
        scrollTrigger:{
            trigger:".page8-text",
            scroller:"body",
            start:"top -40%",
            end:"top -90%",
            scrub:.1,
        }
    })
    gsap.from(".collection-video3",{
        top:"-40%",
        scrollTrigger:{
            trigger:".page8-text",
            scroller:"body",
            start:"top -40%",
            end:"top -90%",
            scrub:.1,
        }
    })
    gsap.from(".collection-video4",{
        bottom:"-40%",
        scrollTrigger:{
            trigger:".page8-text",
            scroller:"body",
            start:"top -40%",
            end:"top -90%",
            scrub:.1,
        }
    })
}

function footerFunction(){
    gsap.from(".footer-main-title h1",{
        y:200,
        duration:1,
        scrollTrigger:{
            scroller:"body",
            trigger:".footer-main-title h1",
            start:"top 110%"
        }
    })
}


loco();
buttonFunction();
navFunction();
rollerFunction();
page2Function();
page3Function();
page4Animation();
page5Function();
page8Function();
footerFunction();

if(window.innerWidth >= 768){
    Shery.mouseFollower();
    Shery.makeMagnet(".burger", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
     
    Shery.makeMagnet(".icons i", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
