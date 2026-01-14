import { motion } from "framer-motion";
import { useState } from "react";
import items from "../componentes/items.json";
import Seta from "../componentes/Seta";

export default function Work() {

 // Estado que define se mostramos todos os projetos ou so os primeiros tres
  const [showAll, setShowAll] = useState(false);

  // Se showAll for true -> mostra tudo
  // Se for false -> mostra apenas os primeiros 3
  const visibleItems = showAll ? items : items.slice(0, 3);

  return (
    <section id="Work" className="bg-neutral-900 py-2">
      <div className="max-w-7xl mx-auto px-6">

        {/*titulo*/}
        <motion.h2
          className="text-center mb-20 text-5xl font-extrabold tracking-[0.2em] text-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>

        {/* Grelha dos projetos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => {

            // Define a posiçaõ (esquerda, meio ou direita)
            const position = index % 3;

            // Animação inicial consoante a posição
            let animation = {};
            if (position === 0) {
              // cartao entra pela esquerda
              animation = { x: -40, opacity: 0 };
            } else if (position === 1) {
              // cartao entra por baixo
              animation = { y: 40, opacity: 0 };
            } else {
              // cartao entra pela direita
              animation = { x: 40, opacity: 0 };
            }

            return (
              <motion.div
                key={index}
                className="border-2 border-neutral-800 rounded-xl bg-neutral-800 overflow-hidden"

                // estado inicial da animacao
                initial={animation}
                whileInView={{ x: 0, y: 0, opacity: 1 }}

                transition={{ duration: 1 }}
                // a animacao so acontece uma vez
                viewport={{ once: true }}
              >
                {/* Imagem do projeto */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"/>
                </div>

                {/* Conteúdo do cartão */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                    {item.title}</h3>

                  <p className="text-sm text-neutral-400 mb-4">
                    {item.description}</p>

                  {/* Link para o projeto */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400">Open Project</a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Seta para abrir/fechar projetos */}
        {items.length > 3 && (
          <Seta onToggle={setShowAll} />
        )}

      </div>
      <div className="mt-20 w-full h-px bg-white/20" />
    </section>
  );
}
