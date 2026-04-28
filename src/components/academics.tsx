import { GraduationCap } from "lucide-react";

const journeys = [
  {
    stage: "Foundational",
    classes: "Nursery & Prep",
    desc: "Building a strong foundation with play-based learning, basic literacy, and social skills in a nurturing environment.",
  },
  {
    stage: "Primary",
    classes: "Classes 1 to 5",
    desc: "Fostering curiosity through a structured curriculum that emphasizes core subjects, creativity, and moral values.",
  },
  {
    stage: "Middle",
    classes: "Classes 6 to 8",
    desc: "Encouraging critical thinking and independent learning with comprehensive subject knowledge and co-curricular activities.",
  },
  {
    stage: "Secondary",
    classes: "Classes 9 & 10",
    desc: "Rigorous academic preparation following CBSE guidelines, focusing on conceptual clarity and board exam readiness.",
  },
];

const streams = [
  {
    name: "Science Stream",
    subjects: "Physics, Chemistry, Biology/Maths",
  },
  {
    name: "Commerce Stream",
    subjects: "Accountancy, Business Studies, Economics",
  },
  {
    name: "Mathematics Stream",
    subjects: "Advanced mathematics focus",
  },
];

export function Academics() {
  return (
    <section id="academics" className="py-24 bg-zinc-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px bg-school-gold w-8" />
            <span className="text-school-navy font-bold tracking-widest uppercase text-sm">
              Academic Journey
            </span>
            <div className="h-px bg-school-gold w-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
            Nurturing Minds from <br />
            Nursery to Class 12
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a continuous, comprehensive educational journey designed
            to challenge and support students at every developmental stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-zinc-200 z-0" />

          {journeys.map((item, i) => (
            <div
              key={i}
              className="relative z-10 bg-white p-8 border border-zinc-200 shadow-sm group hover:border-school-gold/50 transition-colors"
            >
              <div className="w-12 h-12 bg-school-navy text-white rounded-full flex items-center justify-center font-serif font-bold text-xl mb-6 mx-auto lg:mx-0 shadow-md group-hover:bg-school-gold group-hover:text-school-navy transition-colors">
                {i + 1}
              </div>
              <div className="text-center lg:text-left">
                <div className="text-school-gold font-bold uppercase tracking-wider text-xs mb-2">
                  {item.stage}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.classes}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-school-navy text-white overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-block bg-school-gold/20 text-school-gold px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                Senior Secondary
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Classes 11 & 12
              </h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                After Class 10, students choose their specialized streams to
                prepare for higher education and their future careers.
              </p>

              <div className="space-y-4 mb-8">
                {streams.map((s) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 shrink-0 bg-school-gold text-school-navy flex items-center justify-center rounded-sm">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold">{s.name}</h4>
                      <p className="text-sm text-white/60">{s.subjects}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-auto">
              <img
                src="/images/classroom.png"
                alt="Students studying"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-school-navy/30 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
