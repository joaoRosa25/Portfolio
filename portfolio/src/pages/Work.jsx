import { motion } from "framer-motion";
import items from "../componentes/items.json";

export default function Work() {
  return (
    <section className="bg-neutral-900 py-2">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="text-center mb-20 text-5xl font-extrabold tracking-[0.2em] text-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const position = index % 3;

            let animation = {};
            if (position === 0) {
              // esquerda
              animation = { x: -40, opacity: 0 };
            } else if (position === 1) {
              // meio
              animation = { y: 40, opacity: 0 };
            } else {
              // direita
              animation = { x: 40, opacity: 0 };
            }

            return (
              <motion.div
                key={index}
                className="border-2 border-neutral-800 rounded-xl bg-neutral-800 overflow-hidden"
                initial={animation}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400"> Open Project</a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 w-full h-px bg-white/20" />
    </section>
  );
}
