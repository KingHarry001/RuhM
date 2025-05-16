import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative w-full h-full text-white rounded-md overflow-hidden group">
      <video
        loop
        muted
        playsInline
        preload="auto"
        autoPlay
        className="absolute inset-0 w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
      >
        <source src={src} type="video/mp4" />
        {/* optionally: <source src={srcWebm} type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex h-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h3 className="bento-title special-font font-bold text-lg">
            {title}
          </h3>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base text-gray-200">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div className="flex center items-center mt-4 w-fit rounded-full bg-black text-gray-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider border-gray-700 border-solid border-2">
            <TiLocationArrow className="size-6" /> <span>Coming Soon</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoCard;
