import { motion } from "framer-motion";
import skills from "../componentes/Skills.json";
import {
  titleAnimation,
  timelineContainer,
  timelineItem,
  timelineLine,
  timelineDot,
  skillItem,
} from "../animations/Animations";

export default function Skills() {
  return (
    <section className="text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          variants={titleAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-extrabold tracking-[0.2em] text-neutral-100">
            SKILLS
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-gray-900 to-neutral-50" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={timelineContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Line */}
          <motion.div
            className="absolute left-3 top-0 bottom-0 w-[3px] bg-sky-400/80 rounded"
            variants={timelineLine}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-10">
            {skills.map((block, idx) => (
              <motion.div key={idx} className="relative" variants={timelineItem}>
                {/* Dot */}
                <motion.div className="absolute left-[2px] top-8" variants={timelineDot}>
                  <div className="h-5 w-5 rounded-full bg-neutral-900 border-[3px] border-sky-400" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="ml-10 rounded-2xl bg-white/10 border border-white/10 shadow-xl px-8 py-7 backdrop-blur"
                >
                  <h3 className="text-xl font-semibold text-sky-300 mb-5">{block.title}</h3>

                  <div className="flex flex-wrap gap-x-7 gap-y-4 text-white/90">
                    {block.items.map((it) => (
                      <motion.span key={it} variants={skillItem} className="text-sm md:text-base flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-sky-400/80" />
                        {it}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20 w-full h-px bg-white/20" />
    </section>
  );
}
