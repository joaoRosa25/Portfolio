import { motion } from "framer-motion";
import Avatar from "/assets/avatar.png";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";

import {
  titleAnimation,
} from "../animations/Animations";

export default function Home() {
  return (
    <>
      <section  id= "about" className="min-h-screen bg-neutral-900 text-neutral-100 flex items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <motion.h1
              variants={titleAnimation}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-none tracking-tight">
              Software<br />Developer
            </motion.h1>

            <motion.div
              variants={titleAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-10 flex items-center gap-2 text-sm text-neutral-400"
            >
              <span>jony.port25@gmail.com</span>
              <button
                aria-label="Copy email"
                className="hover:text-neutral-200 transition"
              >
                ⧉
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center mb-6"
            >
              <motion.img
                src={Avatar}
                alt="Profile"
                className="w-50 h-50 rounded-full object-cover"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.p
              variants={titleAnimation}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="max-w-md text-lg leading-relaxed text-neutral-200"
            >
              Hello, I'm João, a high school student studying Programming. I'm interested in software development and have a strong personal interest in cybersecurity. I enjoy learning new technologies, building practical projects, and solving problems through code.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-white/20" />

      {/* SECTIONS */}
      <Skills />
      <Work />
      <Footer/>
    </>
  );
}
