'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";


export default function Contact() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "9776fc2e-ccff-4ab3-b43c-a97797ebc985");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-20 overflow-hidden ">
      {/* Glowing Vibranium Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Logo with Animation */}
      <motion.div
        className="relative flex items-center justify-center w-24 h-24 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image 
          src="/logo.png" 
          alt="Logo"
          width={96}
          height={96}
          className="rounded-full"
        />
        <motion.div 
          className="absolute inset-0 w-full h-full rounded-full bg-purple-500/30 blur-2xl"
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      {/* Wakandan Panel */}
      <motion.div
        className="relative w-full max-w-2xl p-8 bg-black border-2 border-purple-500/60 rounded-2xl text-white shadow-[0px_0px_30px_rgba(128,0,128,0.6)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Transmission Status */}
        <p className="text-xl text-gray-300 font-mono text-center mb-6">
          {submitted ? "Successfully Transmitted ✅" : "Transmit Message..."}
        </p>
    <form onSubmit={handleSubmit}>
    <input type="text" required className="w-full p-4 rounded-lg bg-black/40 text-white placeholder-white/50 border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none font-mono mb-5" name="name" placeholder="Enter Your Name"/>
    <input type="email"  required className="w-full p-4 rounded-lg bg-black/40 text-white placeholder-white/50 border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none font-mono mb-5" name="email" placeholder="Enter Your Email"/>
        {/* Input Panel */}
        <textarea
        name="message"
          placeholder="Speak to Omkar..."
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 rounded-lg bg-black/40 text-white placeholder-white/50 border border-purple-700 focus:ring-2 focus:ring-purple-500 outline-none font-mono"
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(138,43,226,0.8)" }}
            className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-800 to-black text-white font-medium transition-all hover:shadow-lg"
            onClick={() => {
              if (message) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
              }
            }}
            type="submit"
          >
            <Send className="w-5 h-5" /> Transmit
          </motion.button>
        </div>
        </form>
      </motion.div>
    </div>
  );
}
