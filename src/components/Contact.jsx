import React from "react";

const Contact = () => {
  return (
    <div className="mt-20 pb-20 mobile-480:w-[400px] mobile-480:mx-auto">
      <div>
        <h2 className="mt-20 font-handlee font-bold text-2xl bg-customPink inline-block">
          Contact here
        </h2>
        <img
          src="/arrow.png"
          alt="arrow"
          width={50}
          height={50}
          className="-rotate-90 my-8"
        />
        <p className="font-inter text-lg text-gray-800">
          Let's start a conversation! Feel free to contact me for projects,
          inquiries or anything else.
        </p>
      </div>
      <form action="" className="mt-8 w-auto">
        <div className="flex mb-8">
          <label
            htmlFor="name"
            className="bg-customPink font-handlee font-semibold border-l border-gray-800 px-1 text-xl"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-b w-full border-black bg-transparent focus:outline-none pl-2"
            required
          />
        </div>
        <div className="flex mb-8">
          <label
            htmlFor="email"
            className="bg-matteYellow font-handlee font-semibold border-l border-gray-800 px-1 text-xl"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-b w-full border-black bg-transparent focus:outline-none pl-2"
            required
          />
        </div>
        <div className="flex mb-8">
          <label
            htmlFor="message"
            className="bg-matteBlue font-handlee font-semibold border-l border-gray-800 px-1 text-xl"
          >
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            className="border-b w-full border-black bg-transparent focus:outline-none pl-2"
            required
          />
        </div>
        <button className="rotate-2 bg-black border-2 border-transparent text-white font-inter text-xl px-3 py-2 hover:ring-2 hover:ring-offset-2 hover:ring-black hover:rotate-0 active:bg-white active:text-black focus:rotate-0 focus:ring-2 focus:ring-offset-2 focus:ring-black focus:border-black">
          Send here
        </button>
      </form>
    </div>
  );
};

export default Contact;
