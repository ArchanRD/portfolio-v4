import React from "react";

const WhatDoIdoCard = ({
  image,
  cardTitle,
  cardParagraph,
  headerTitle,
  rotatePosition,
  bgColor,
  borderColor,
  headerTitleBgColor,
  imageWidth
}) => {
  const rotationClass =
    rotatePosition === "left" ? "-rotate-3" : "rotate-3";

  return (
    <div className="flex justify-center mb-6">
      <div
        style={{
          backgroundColor: `${bgColor}`,
          borderColor: `${borderColor}`
        }}
        className={`relative p-7 flex justify-end flex-col border-8 ${rotationClass} rounded-lg h-96 w-80`}
      >
        <div
          style={{
            backgroundColor: `${headerTitleBgColor}`,
          }}
          className="absolute font-handlee text-2xl font-bold bg-blue-300 -top-4"
        >
          {headerTitle}
        </div>

        <img
          src={image}
          alt="coffee cup"
          width={imageWidth}
          height={imageWidth}
          className="mb-5"
        />
        <div>
          <h3 className="font-inter font-semibold text-3xl text-gray-800">
            {cardTitle}
          </h3>
          <p className="font-inter text-md text-gray-700 mt-2">
            {cardParagraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatDoIdoCard;
