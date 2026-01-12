import skills from "../componentes/Skills.json";

export default function Skills() {
  return (
    <section className="text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold tracking-[0.2em] text-neutral-100">
            SKILLS
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-gray-900 to-neutral-50" />
        </div>

        {/* tamanho area de escrita (pr-30)  */}
        <div className="relative pr-30">
          
          {/* linha */}
          <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-sky-400/80 rounded " />

          <div className="space-y-10"> {/* distancia dos cards */}
            {/*skills.map precorre o array, Block elemento atual do array, idx -> indice */}
            {skills.map((block, idx) => (
              <div key={idx} className="relative">

                {/* Ponto */}
                <div className="absolute left-[2px] top-8">
                    <div className="h-5 w-5 rounded-full bg-neutral-900 border-[3px] border-sky-400" />
                </div>

                {/* card */}
                <div className="ml-10 rounded-2xl bg-white/10 border border-white/10 shadow-xl px-8 py-7 backdrop-blur">
                  <h3 className="text-xl font-semibold text-sky-300 mb-5">
                    {block.title}
                  </h3>

                    {/*carregar info do skills */}
                  <div className="flex flex-wrap gap-x-7 gap-y-4 text-white/90">
                    {/*it -> item atual */}
                    {block.items.map((it) => (
                        <span
                            key={it}
                            className="text-sm md:text-base flex items-center gap-2">

                        <span className="h-2 w-2 rounded-full bg-sky-400/80" />
                            {it} {/*"Print" no ecrã*/}
                        </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-30 w-full h-px bg-white/20" /> 
    </section>

  );
}