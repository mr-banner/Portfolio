import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

function Contact() {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dbmp2sx",
        "template_9j7p32t",
        {
          name: formData.name,
          mobile: formData.mobile,
          message: formData.message,
        },
        "q5yWdLm5vzw4v9Qtk"
      )
      .then(() => {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", mobile: "", message: "" });
        setLoading(false);

        setTimeout(() => {
          setStatus("");
        }, 3000);
      })
      .catch(() => {
        setStatus("Failed to send message");
        setLoading(false);

        setTimeout(() => {
          setStatus("");
        }, 3000);
      });
  };

  return (
    <div
      id="Contact"
      className={`border-b pb-10 pt-[0.5px] lg:mb-20 ${
        theme === "light" ? "border-[#CDC1FF]" : "border-neutral-900"
      }`}
    >
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`lg:my-20 my-16 text-center text-4xl ${
          theme === "light" ? "text-[#5e3ff8]" : "text-white"
        }`}
      >
        Contact{" "}
        <span
          className={`${
            theme === "light" ? "text-[#A594F9]" : " text-neutral-500 "
          }`}
        >
          Me
        </span>
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full lg:w-2/5 p-6 bg-transparent border rounded-xl shadow-xl flex flex-col justify-center ${
            theme === "light"
              ? "bg-white text-neutral-900 border-slate-400"
              : "bg-neutral-900 text-white border-purple-800"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>

          <p className="mb-6 text-sm">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I’m always open to new opportunities and exciting ideas.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope
              className={`text-xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            />
            <span>sahukamalkant28@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <FaPhoneAlt
              className={`text-xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            />
            <span>+91 7077655797</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt
              className={`text-xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            />
            <span>Bangaore, India</span>
          </div>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`w-full lg:w-2/5 p-6 rounded-xl bg-transparent border shadow-xl ${
            theme === "light"
              ? "bg-white border-slate-400"
              : "bg-neutral-900 text-white border-purple-800"
          }`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full mb-4 p-3 rounded border bg-transparent outline-none ${
              theme === "light"
                ? "border-gray-500 text-black"
                : "bg-neutral-800 border-neutral-700 text-white"
            }`}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className={`w-full mb-4 p-3 rounded border bg-transparent outline-none ${
              theme === "light"
                ? "border-gray-500 text-black"
                : "bg-neutral-800 border-neutral-700 text-white"
            }`}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`w-full mb-4 p-3 rounded border bg-transparent outline-none ${
              theme === "light"
                ? "border-gray-500 text-black"
                : "bg-neutral-800 border-neutral-700 text-white"
            }`}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-full font-semibold transition-all duration-500 ease-in-out flex items-center justify-center gap-2 ${
              theme === "light"
                ? "bg-black text-white hover:shadow-2xl hover:bg-transparent border-black border hover:text-black"
                : "bg-purple-900 border border-purple-800 text-white hover:shadow-purple-700/25 shadow-xl"
            }`}
          >
            {loading ? (
              <>
                <ImSpinner2 className="animate-spin text-xl" />
                Sending...
              </>
            ) : (
              "Hire Me"
            )}
          </button>

          {status && (
            <p
              className={`text-center mt-4 text-sm ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
