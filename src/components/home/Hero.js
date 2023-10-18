import { BsStars}  from 'react-icons/bs'
import Image from 'next/image'
const videoSrc = "/hero.mp4"
function Hero(){
    return(
        <div className="hero px-32 bg-base-100">
            <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
                <div class="iphone-container scale-[80%] lg:pl-24">
                    <div className="iphone-x ">
                    <video autoPlay loop muted src={videoSrc} playsInline className="video-content rounded-[35px] h-[780px] w-[400px]"></video>

  
</div>
                </div>                
            <div>
                <h1 className="text-5xl font-extrabold">Count calories <br />with  <BsStars className='inline'/>AI!</h1>
                <p className="py-6">Wave your phone over your food, snap a photo & viola!</p>
                <button className="btn btn-primary rounded-full">Join waitlist </button>
                </div>
            </div>
        </div>
    )    
}

export default Hero
