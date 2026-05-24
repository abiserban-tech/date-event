import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import logoWhite from "@assets/WHITE_TRANSPARENT_1779605387314.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-accent selection:text-black">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-black to-black"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl mb-6">
            SET THE DATE
          </motion.h1>
          <motion.p variants={fadeUp} className="font-sans text-sm md:text-lg text-secondary/80 font-light tracking-widest uppercase">
            A chapter worth remembering
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-48 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} className="text-sm tracking-[0.3em] text-accent mb-8">
              THE STORY
            </motion.h2>
            <motion.p variants={fadeUp} className="font-serif italic text-3xl md:text-5xl leading-relaxed text-secondary/90">
              "DA : TE was born from a simple conviction — that a night out should feel like a chapter worth remembering. Not a venue. Not a lineup. An atmosphere that moves you before the music even starts."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-card border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { title: "MINIMAL", desc: "Stripped of the unnecessary, focused on the essential." },
              { title: "PREMIUM", desc: "Curated experiences for those who appreciate details." },
              { title: "AFRO HOUSE", desc: "Sonic journeys that elevate the night." },
              { title: "INSTAGRAMMABLE", desc: "Aesthetics designed to be remembered and shared." }
            ].map((value, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center p-8 border border-border/50">
                <h3 className="text-lg mb-4 text-secondary">{value.title}</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-24 md:py-48 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="font-serif italic text-4xl md:text-6xl text-secondary/70 leading-tight">
            Time is the ultimate luxury. Spend it beautifully.
          </motion.h2>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30 text-center flex flex-col items-center">
        <img src={logoWhite} alt="DA:TE" className="w-20 opacity-30 mb-8" />
        <div className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
          <p>© {new Date().getFullYear()} DA : TE Events. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
