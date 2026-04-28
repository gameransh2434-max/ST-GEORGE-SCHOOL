const images = [
  {
    src: "/images/sports.png",
    alt: "Students playing sports on campus",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/images/library.png",
    alt: "Student reading in the library",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/classroom.png",
    alt: "Classroom environment",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/assembly.png",
    alt: "Morning assembly",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export function Gallery() {
  return (
    <section id="campus" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px bg-school-gold w-12" />
              <span className="text-school-navy font-bold tracking-widest uppercase text-sm">
                Campus Life
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold leading-tight">
              Beyond the Classroom
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A vibrant environment that encourages physical fitness, creative
            expression, and intellectual curiosity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden bg-zinc-100 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-school-navy/0 group-hover:bg-school-navy/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
