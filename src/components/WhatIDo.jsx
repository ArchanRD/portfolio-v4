import React from "react";
import WhatDoIdoCard from "./Cards/WhatDoIdoCard";

const WhatIDo = () => {
  return (
    <div className="mt-20 mobile-480:w-[400px] mobile-480:mx-auto md:w-auto md:mx-10 xl:mr-auto">
      <h2 className="font-handlee font-bold text-2xl bg-blue-200 w-max xl:text-3xl">
        What i do?
      </h2>
      <img
        src="/arrow.png"
        alt="arrow"
        width={50}
        height={50}
        className="-rotate-90 mt-8"
      />
      <div className="py-5 md:flex md:flex-wrap lg:justify-center xl:w-full">
        {/* Card 1 */}
        <WhatDoIdoCard
          image={"/CoffeeCup.png"}
          imageWidth={50}
          headerTitle={"Code"}
          headerTitleBgColor="#9DDCFF"
          cardTitle={"Website developement"}
          cardParagraph={
            "I craft dynamic, full-stack websites, integrating front-end with powerful back-end functionality."
          }
          bgColor="#FFE68C"
          borderColor="#EECD56"
          rotatePosition={"left"}
          key={1}
        />
        {/* Card 2 */}
        <WhatDoIdoCard
          image={"/ComputerIllustration.png"}
          imageWidth={130}
          headerTitle={"Design"}
          headerTitleBgColor="#FFC9F0"
          cardTitle={"UI Design"}
          cardParagraph={
            "Proficient in UI design, adept with industry tools like Figma."
          }
          bgColor="#9DDCFF"
          borderColor="#5AB5E8"
          rotatePosition={"right"}
          key={2}
        />
        {/* Card 3 */}
        <WhatDoIdoCard
          image={"/NoCodeDevImage.png"}
          imageWidth={130}
          headerTitle={"No Code Dev"}
          headerTitleBgColor="#FFE68C"
          cardTitle={"No Code websites"}
          cardParagraph={
            "Exploring no-code website development, familiar with platforms like WordPress and Wix, "
          }
          bgColor="#FFC9F0"
          borderColor="#F384D4"
          rotatePosition={"left"}
          key={3}
        />
      </div>
    </div>
  );
};

export default WhatIDo;
