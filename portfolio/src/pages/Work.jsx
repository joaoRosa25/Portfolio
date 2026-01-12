import items from "../componentes/items.json";
export default function Work() {
  
  return (
    <section className="bg-neutral-900 py-2">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-[0.2em] text-neutral-100">
            Portfolio
          </h2>
        </div>

        <div className=" grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              // individual card
              className=" border-2 border-neutral-800 group rounded-xl bg-neutral-800 overflow-hidden hover:bg-neutral-700 transition">

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-400 mb-4">{item.description}</p>

                  {/* target="_blank" -> abre noutra aba */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                > Open Project </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-30 w-full h-px bg-white/20" /> 
    </section>
  );
}
