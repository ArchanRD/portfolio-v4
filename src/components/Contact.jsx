import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sf5fdu8", "template_svilbs8", form.current, {
        publicKey: "d_zPiJwge5DkQhugN",
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          console.log("done");
          form.current.reset();
        },
        (error) => {
          toast.error("Error sending email");
          console.log("error");
        }
      );
  };
  return (
    <div className="mt-20 pb-20 mobile-480:w-[400px] mobile-480:mx-auto md:w-auto md:mx-10 md:flex md:flex-1 md:flex-wrap md:items-end md:justify-between">
      <div className="md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-handlee font-bold text-2xl bg-customPink inline-block xl:text-3xl"
        >
          Contact here
        </motion.h2>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
          src="/arrow.png"
          alt="arrow"
          width={50}
          height={50}
          className="-rotate-90 my-8"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-generalSans text-lg text-gray-800 md:w-2/3 xl:text-xl"
        >
          Let's start a conversation! Feel free to contact me for projects,
          inquiries or anything else.
        </motion.p>
      </div>
      <form action="#" className="mt-8 w-auto" ref={form} onSubmit={sendEmail}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex mb-8"
        >
          <label
            htmlFor="name"
            className="bg-customPink font-handlee font-semibold border-l border-gray-800 px-1 text-xl xl:text-2xl"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="border-b w-full border-black bg-transparent focus:outline-none pl-2 xl:text-lg"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex mb-8"
        >
          <label
            htmlFor="email"
            className="bg-matteYellow font-handlee font-semibold border-l border-gray-800 px-1 text-xl xl:text-2xl"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email_id"
            className="border-b w-full border-black bg-transparent focus:outline-none pl-2 xl:text-lg"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex mb-8"
        >
          <label
            htmlFor="message"
            className="bg-matteBlue font-handlee font-semibold border-l border-gray-800 px-1 text-xl xl:text-2xl"
          >
            Message
          </label>
          <input
            type="text"
            id="message"
            name="message"
            className="border-b w-full border-black bg-transparent focus:outline-none pl-2 xl:text-lg"
            required
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="rotate-2 bg-black border-2 border-transparent text-white font-generalSans text-xl px-3 py-2 hover:ring-2 hover:ring-offset-2 hover:ring-black hover:rotate-0 active:bg-white active:text-black focus:rotate-0 focus:ring-2 focus:ring-offset-2 focus:ring-black focus:border-black"
        >
          Send here
        </motion.button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
