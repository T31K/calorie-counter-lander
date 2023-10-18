import { BsStars } from 'react-icons/bs';
import Image from 'next/image';

const videoSrc = '/hero.mp4';

function Hero() {
  return (
    <div className="hero lg:px-32 bg-base-100">
      <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
        <div class="iphone-container scale-[80%] lg:pl-24 order-2 lg:order-1">
          <div className="iphone-x">
            <video
              autoPlay
              loop
              muted
              src={videoSrc}
              playsInline
              className="video-content rounded-[35px] h-[780px] w-[400px]"
            ></video>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <h1 className="text-5xl font-extrabold text-center pt-16 md:pt-0 md:text-left">
            Count calories <br />
            with <BsStars className="inline" />
            AI!
          </h1>
          <p className="py-6 text-center md:text-left">
            Wave your phone over your food, <br class="visible md:hidden" />
            snap a photo & viola!
          </p>
          <button className="btn btn-primary rounded-full block mx-auto md:inline">Join waitlist</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
