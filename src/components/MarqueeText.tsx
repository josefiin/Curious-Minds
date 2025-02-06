"use client";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <div className="bg-beige-light rounded-full py-4 px-8 spacing-lg">
      <Marquee
        autoFill
        gradient
        gradientWidth={60}
        speed={80}
        loop={0} // Se till att det loopar jämnt
      >
        <div className="flex gap-6 md:gap-10 mr-6 md:mr-10 items-center w-fit">
          <span className="text-lg md:text-xl">
            Stay tuned for more amazing facts and exciting games coming soon!
          </span>
          <span className="w-8 md:w-11">
            <img src="/bling.svg" alt="yellow bling graphic" />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
