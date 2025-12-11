function SlideContent({ bgImage, title, items }) {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-16">

        {/* LEFT — title + diagonal lines */}
        <div className="relative text-white">

          {/* Starting point */}
          <div className="absolute left-[22rem] top-1/2 -translate-y-1/2">

            {/* Upper line */}
            <div
              className="absolute h-[2px] bg-white origin-left"
              style={{ width: "200vh", transform: "rotate(-35deg)" }}
            />

            {/* Lower line */}
            <div
              className="absolute h-[2px] bg-white origin-left"
              style={{ width: "200vh", transform: "rotate(35deg)" }}
            />
          </div>

          <h4 className="text-5xl font-bold">{title}</h4>
        </div>

        {/* RIGHT — text list */}
        <div className="text-white text-xl md:text-2xl space-y-4 max-w-lg mt-10 md:mt-0 leading-relaxed">
          {items.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>

      </div>
    </section>
  );
}
