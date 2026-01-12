import Work from "./Work";
export default function Home() {
  return (
    <>
    <section className="min-h-screen bg-neutral-900 text-neutral-100 flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT */}
        <div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-semibold leading-none tracking-tight">
            Software<br />Developer
          </h1>

          <div className="mt-10 flex items-center gap-2 text-sm text-neutral-400">
            <span>asd@gmail.com</span>
            <button
              aria-label="Copy email"
              className="hover:text-neutral-200 transition"
            >
              ⧉
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <p className="mt-0 max-w-md text-lg leading-relaxed text-neutral-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-white/20" /> 

      {/* WORK */}
      <Work />
    </>
  );
}