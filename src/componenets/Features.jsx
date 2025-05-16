import React from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";
import BentoTilt from "./BentoTilt";

const Features = () => {
  return (
    <section className="bg-black max-w-full px-5">
      <div className="px-3 md:px-10">
        <div className="pt-32 pb-10">
          <p className="font-circular-web text-lg text-blue-50">
            Our Key Features:
          </p>
          <p className="text-gray-400 max-w-md font-circular-web text-lg opacity-50">
            RushM combines delivery and transport in one seamless platform. With real-time tracking,instant booking, and smart route optimization, you get fast, reliable service everytime.
          </p>
        </div>

        <div className="grid h-[150vh] grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5 items-center justify-between py-4">
          <BentoTilt className="bento-tilt_3 w-[100%] row-span-1 me-10 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-1.mp4"
              title={<b>Instant Pickup & Delivery</b>}
              description="Get Packages orpeople moving in minutes with on-demand service that fit schedule."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_3 w-[100%] row-span-1 ms-10 md:ms-0 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={<b>Real Time Tracking</b>}
              description="Track your deliveries or rides in real-time with live location updates."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_3 w-[100%] row-span-1 me-10 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <b>
                  Multi-Service Support
                </b>
              }
              description="From courier services to personal transport, RushM adapts to your needs."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_3 w-[100%] row-span-1 ms-10 md:ms-0 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={<b>Early Access Anywhere</b>}
              description="Use RushM via app or web, available 24/7 in supported locations."
              isComingSoon={true}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_3">
            <div className="flex w-full h-full flex-col justify-between bg-violet-300 p-5">
              <b className="bento-title special-font max-w-64 text-black">
                More <br />
                Coming <br />
                Soon!
              </b>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-title_3">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
