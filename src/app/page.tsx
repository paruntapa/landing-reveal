import Image from "next/image";

export default function Home() {
  return (
    <div className="hero">
      <div className="progress-bar">
        <p>loading</p>
        <p><span id="counter">0</span></p>
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
        <h1><span>( watch the fight)</span></h1>
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
