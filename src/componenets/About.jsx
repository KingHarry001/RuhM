import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/animation";
import AnimatedTitle from "./AnimatedTitle";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./BentoTilt";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin();

const About = () => {
  useGSAP(() => {
    animateWithGsap("#text", {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: "power2.inout",
      scale: 1,
      stagger: 0.1,
    });
  });

  return (
    <section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 id="text" className="font-general text-sm uppercase mb:text-[10px]">
          Welcome to RushM
        </h2>

        <AnimatedTitle title="About Us" containerClass="mx-5 !text-black" />
        <div className="px-5 text-center font-[300] md:max-w-[34rem]">
          <p>
            At RushM, we're thinking the way people and packages move. Whether
            you're across town, catching a ride, or coordinating logistics for
            your business, we deliver speed, safety, and reliability-- every
            time.
          </p>
        </div>

        <div className="!px-10 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 items-center justify-between py-4">
            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem] w-[100%] md:me-0">
              <BentoCard
                // src="/videos/feature-1.mp4"
                title={<b>Instant Pickup & Delivery</b>}
                description="Get Packages orpeople moving in minutes with on-demand service that fit schedule."
                isComingSoon={true}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem] w-[100%] row-span-1 md:ms-0 md:col-span-1 md:row-span-2">
              <BentoCard
                // src="/videos/feature-2.mp4"
                title={<b>Real Time Tracking</b>}
                description="Track your deliveries or rides in real-time with live location updates."
                isComingSoon={true}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem] w-[100%] row-span-1 md:col-span-1 md:me-0">
              <BentoCard
                // src="/videos/feature-3.mp4"
                title={<b>Multi-Service Support</b>}
                description="From courier services to personal transport, RushM adapts to your needs."
                isComingSoon={true}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem] w-[100%] row-span-1 md:ms-0 md:col-span-1 md:row-span-2">
              <BentoCard
                // src="/videos/feature-4.mp4"
                title={<b>Early Access Anywhere</b>}
                description="Use RushM via app or web, available 24/7 in supported locations."
                isComingSoon={true}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem] w-[100%] row-span-1 md:col-span-1 md:me-0">
              <BentoCard
                // src="/videos/feature-1.mp4"
                title={<b>Instant Pickup & Delivery</b>}
                description="Get Packages orpeople moving in minutes with on-demand service that fit schedule."
                isComingSoon={true}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem] w-[100%] row-span-1 md:col-span-1 md:me-0">
              <BentoCard
                // src="/videos/feature-1.mp4"
                title={<b>Instant Pickup & Delivery</b>}
                description="Get Packages orpeople moving in minutes with on-demand service that fit schedule."
                isComingSoon={true}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem] w-[100%] row-span-1 md:ms-0 md:col-span-1 md:row-span-2">
              <BentoCard
                // src="/videos/feature-2.mp4"
                title={<b>Real Time Tracking</b>}
                description="Track your deliveries or rides in real-time with live location updates."
                isComingSoon={true}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_3 bg-black rounded-[10px] h-[20rem]">
              <div className="flex w-full h-full flex-col justify-between bg-violet-300 p-5">
                <b className="bento-title special-font max-w-64 text-black">
                  More <br />
                  Coming <br />
                  Soon!
                </b>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </div>
            </BentoTilt>
          </div>
        </div>

        <div className="about-subtext px-5">
          <p>
            Powered by smart technology and real-time tracking, our network
            connects drivers, and dispatch with one seamless platform. We're not
            just moving things-- we're moving smarter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
