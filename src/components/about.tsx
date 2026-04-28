import { BookOpen, Award, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-school-gold" />,
    title: "Trusted Heritage",
    desc: "A century-old legacy of educational excellence managed by the Diocesan Education Board.",
  },
  {
    icon: <Award className="w-8 h-8 text-school-gold" />,
    title: "CBSE Affiliated",
    desc: "Rigorous curriculum aligned with C.B.S.E., New Delhi standards for holistic development.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-school-gold" />,
    title: "Comprehensive Education",
    desc: "Nursery to Class 12, offering Commerce, Science, and Mathematics streams.",
  },
  {
    icon: <Users className="w-8 h-8 text-school-gold" />,
    title: "Dedicated Faculty",
    desc: "Experienced educators committed to academic seriousness and character building.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-square relative z-10 p-2 bg-white shadow-xl shadow-school-navy/5">
              <img
                src="/images/assembly.png"
                alt="Students at morning assembly"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-3/4 h-full bg-school-gold/20 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-3/4 h-full border-2 border-school-navy/10 -z-10" />
            <div className="absolute -right-8 top-12 bg-school-navy text-white p-6 shadow-xl z-20 hidden md:block max-w-[200px]">
              <div className="font-serif text-4xl font-bold text-school-gold mb-1">
                14
              </div>
              <div className="text-sm font-medium uppercase tracking-wider">
                Years of Growth
              </div>
              <div className="text-xs text-white/70 mt-2">
                Nursery to Class 12 education journey
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-school-gold w-12" />
              <span className="text-school-navy font-bold tracking-widest uppercase text-sm">
                About Our Institution
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6 leading-tight">
              A Tradition of <br />
              Academic Excellence
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10 text-lg">
              <p>
                Located in the heart of Banda at Awas Vikas, Chilla Road, St.
                George School is more than an educational institution — it is a
                community dedicated to the holistic development of every child.
              </p>
              <p>
                Managed by the Diocesan Education Board of the Diocesan Council
                of the Diocese of Lucknow (C.N.I.), we provide a disciplined,
                warm, and academically serious environment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
