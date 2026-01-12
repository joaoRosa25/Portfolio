export default function Work() {
  const items = [
    {
      title: "Storyboarding – Visualizing Student Learning",
      description:
        "Storyboarding isn't just for filmmakers; it's a powerful tool that makes learning interactive and enjoyable across various subjects.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Creating a Staff Keynote Theme",
      description:
        "James Dove discusses developing a Keynote theme to help staff create engaging presentations.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    },
    {
      title: "In Action: Create a Digital Book",
      description:
        "Learn how teachers use digital tools to explain complex concepts through storytelling.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  return (
    <section className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-100 mb-12 text-center">
            Portfolio
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl bg-neutral-800 overflow-hidden hover:bg-neutral-700 transition"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-100 mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-400 mb-4">{item.description}</p>

                {/* <a */}
                {/* //   href="#" */}
                {/* //   className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300" */}
                {/* // > */}
                  {/* See more */}
                  {/* <span className="ml-1 transition-transform group-hover:translate-x-1"> */}
                    {/* → */}
                  {/* </span> */}
                {/* </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
