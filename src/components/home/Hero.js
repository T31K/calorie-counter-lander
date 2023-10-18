import { BsStars } from 'react-icons/bs';
import Image from 'next/image';
import { useState } from 'react';

const videoSrc = '/hero.mp4';

function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="hero lg:px-32 bg-base-100">
      <div className="hero-content max-w-5xl flex-col lg:flex-row-reverse">
        <div className="iphone-container scale-[80%] lg:pl-24 order-2 lg:order-1">
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

        <div className="order-1 lg:order-2">
          <h1 className="text-5xl font-extrabold text-center pt-16 md:pt-0 md:text-left">
            Count calories <br />
            with <BsStars className="inline" />
            AI!
          </h1>
          <p className="py-6 text-center md:text-left">
            Wave your phone over your food, <br className="visible md:hidden" />
            snap a photo & viola!
          </p>
          <button
            className="btn btn-primary rounded-full block mx-auto md:inline"
            onClick={() => setShowForm(true)}
          >
            Join waitlist
          </button>{' '}
        </div>
      </div>
      {showForm && (
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6">
          <div className="rounded-md">
            <form action="https://submit-form.com/oYIfea5t">
              <h2 className="text-black font-bold text-2xl">Join waitlist!</h2>
              <div className="">
                <label
                  htmlFor="name"
                  className="invisible block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="invisible block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <label
                htmlFor="message"
                className="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className=" hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
