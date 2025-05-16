// import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
// import ThreeDotLoader from "./ThreeDotLoader";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

const Hero = () => {
  
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(16% 12%, 64% 11%, 78% 76%, 10% 66%)",
      duration: 10,
      ease: 'back.inOut'
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inout",
      duration: 1,
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: '+=900 center',
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  });

  return (
    <div className="relative block h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative overflow-hidden z-10 h-dvh w-screen rounded-lg bg-[#71aa71]"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"></div>
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          <b>RushM</b>
        </h1>
        <div className="absolute left-5 top-5 z-40 size-full">
          <div className="mt-[65px] md:px-5 sm:px-1">
            <h1 className="special-font hero-heading text-white">
              Fast <br />
              Reliable <br />
              Right to your Door
            </h1>
            <p className="mb-5 max-w-[20rem] md:max-w-[30rem] font-robert-regular text-white">
              Instant ridesand fast deliveries at your fingertips-- track, pay, and go, all in one app. Whether it's a package, food, or a ride-- you move, we
              deliver..... <br />
            </p>

            <div className="md:flex">
              <Button
                id="watch-trailer"
                title="Book a Delivery"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-green-300 flex-center gap-1 inline-center mx-1 my-1"
              />
              <Button
                id="watch-trailer"
                title="Become a Partner"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-green-300 flex-center gap-1 inline-center mx-1 my-2"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        <b>RushM</b>
      </h1>
    </div>
  );
};

export default Hero;
