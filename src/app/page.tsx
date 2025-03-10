"use client"
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=> {
    gsap.registerPlugin(CustomEase);

    const customEase = CustomEase.create("custom", ".87, 0, .13, 1");
  
    const counter = document.getElementById("counter");
  
    gsap.set(".video-container", {
      scale: 0,
      rotation: -20,
    })
  
    gsap.to(".hero", {
      clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
      duration: 1.5,
      ease: customEase,
      delay: 1,
    })

    gsap.to(".hero", {
      clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
      duration: 2,
      ease: customEase,
      delay: 3,

      onStart: () => {
        gsap.to(".progress-bar", {
          width: "100vw",
          duration: 2,
          ease: customEase,
        })
  
        gsap.to(counter, {
          innerHTML: 100,
          duration: 2,
          ease: customEase,
          snap: { innerHTML: 1}
        })
      }
    });

    gsap.to(".hero", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",   
      duration: 1,
      ease: customEase,
      delay: 5,
      onStart: ()=> {
        gsap.to(".video-container", {
          scale: 1,
          rotation: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.25,
          ease: customEase,
        })
        gsap.to(".progress-bar", {
          opacity: 0,
          duration: 0.3,
        })

        gsap.to(".logo", {
          left: "0%",
          transform: "translateX(0%)",
          duration: 1.25,
          ease: customEase,

          onStart: () => {
            gsap.to(".char.anim-out h1", {
              y: "100%",
              duration: 1,
              stagger: -0.075,
              ease: customEase,
            });

            gsap.to(".char-anim-in h1", {
              x: "-1200%",
              duration: 1,
              ease: customEase,
              delay: 0.25,
            })
          }
        })
      }
    });

    gsap.to([".header span", ".coordinates span"], {
      y: "0%",
      duration: 1,
      stagger: 0.125,
      ease: "power3.out",
      delay: 5.75,
    })

    
  }, [])


  return (
    <div className="hero">
      <div className="progress-bar">
        <p>loading</p>
        <p><span id="counter">/0</span></p>
      </div>

      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/video/first.mp4" type="video/mp4" />
        </video>
      </div>

      <nav>
        <p>&#9679;</p>
        <p>&#9679;</p>
      </nav>

      <footer>
        <p>ufc</p>
        <p>podcasts</p>
        <p>betting</p>
        <p>rankings</p>
        <p>news</p>
      </footer>

      <div className="header">
        <h1><span>Combat from</span></h1>
        <h1><span>the streets of</span></h1>
        <h1><span>Dehradun</span></h1>
        <p><span>( watch the fight)</span></p>
      </div>

      <div className="coordinates">
        <p><span>37.6934 N</span></p>
        <p><span>97.3382 W</span></p>
      </div>

      <div className="logo">
        <div className="char"><h1>C</h1></div>
        <div className="char anim-out"><h1>l</h1></div>
        <div className="char anim-out"><h1>a</h1></div>
        <div className="char anim-out"><h1>s</h1></div>
        <div className="char anim-out"><h1>h</h1></div>
        <div className="char anim-out"><h1>o</h1></div>
        <div className="char anim-out"><h1>n</h1></div>
        <div className="char anim-in"><h1>.</h1></div>
      </div>
      
    </div>
  );
}
