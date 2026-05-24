import { motion, useScroll, useTransform } from "framer-motion";
import logoWhite from "@assets/WHITE_TRANSPARENT_1779605387314.png";
import introVideo from "@assets/VIDEO_1779605977959.mp4";
import img1 from "@assets/hf_20260524_073419_40a33609-8e34-40f4-9f00-c8b967918315_1779608483818.png";
import img3 from "@assets/hf_20260524_071816_eb715cb7-8832-4fd8-ae00-dbd81edf82b1_1779608507082.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Nav from "@/components/Nav";

const img2 = `${import.meta.env.BASE_URL}mykonos.jpeg`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-accent selection:text-black">
      <Nav />

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <video 
            src={introVideo} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img src={logoWhite} alt="DA:TE" className="w-48 sm:w-64 md:w-96 mb-8 drop-shadow-2xl" />
          </motion.div>
          <motion.p 
            className="font-serif tracking-[0.4em] uppercase text-sm md:text-lg text-secondary/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            You make it timeless
          </motion.p>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="font-serif text-xs tracking-[0.2em] text-secondary/50 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/50 to-transparent" />
        </motion.div>
      </section>

      {/* Vibe / About Section */}
      <section id="experience" className="py-24 md:py-48 px-6 md:px-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl mb-12 leading-tight">
              A feeling,<br />not just a destination.
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-6 font-sans text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              <p>
                DA : TE is more than a gathering. It is a carefully curated experience designed for the discerning few. 
                A night where time slows down, and every detail speaks in quiet confidence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Music / Sounds Section */}
      <section className="py-24 md:py-32 px-6 md:px-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/20 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center w-full"
          >
            <motion.h2 variants={fadeUp} className="text-sm tracking-[0.3em] text-accent mb-6">The Sound</motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl mb-8 leading-tight font-serif italic text-secondary/90">
              Hypnotic afro house rhythms. Deep basslines. Ritualistic beats.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Every DA : TE is built around a sonic journey — afro house, organic deep, and tribal rhythms that carry you from sunset to sunrise. The music is not background. It is the heartbeat of the night.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-4 w-full">
              <div className="flex justify-center border-b border-border/30 pb-4">
                <span className="font-serif tracking-wider text-secondary">AFRO HOUSE</span>
              </div>
              <div className="flex justify-center border-b border-border/30 pb-4">
                <span className="font-serif tracking-wider text-secondary">ORGANIC DEEP</span>
              </div>
              <div className="flex justify-center border-b border-border/30 pb-4">
                <span className="font-serif tracking-wider text-secondary">TRIBAL RHYTHMS</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-20 border-t border-border/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-12">
            <div>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">The Experience</p>
              <h2 className="text-3xl md:text-4xl">Seen. Felt. Remembered.</h2>
            </div>
          </motion.div>

          {/* Uniform 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { src: img1, alt: "DA:TE Mykonos" },
              { src: img2, alt: "DA:TE Golden Lights" },
              { src: img3, alt: "DA:TE Entrance" },
            ].map((image, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 md:py-48 px-6 relative bg-black">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-black to-black"></div>
        
        <div className="max-w-xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6">Set The Date</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground font-sans font-light">
              Leave your details and be the first to know when the next DA : TE is announced. Access is limited and always exclusive.
            </motion.p>
          </motion.div>

          <motion.form 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <Input 
                placeholder="Full Name" 
                className="bg-transparent border-b border-border/50 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/50 transition-colors"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-border/50 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/50 transition-colors"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-2">
              <Input 
                placeholder="Instagram Handle (Optional)" 
                className="bg-transparent border-b border-border/50 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/50 transition-colors"
              />
            </motion.div>
            
            <motion.div variants={fadeUp} className="pt-8">
              <Button 
                type="submit" 
                className="w-full bg-secondary text-black hover:bg-accent hover:text-black py-8 text-sm uppercase tracking-[0.2em] font-serif rounded-none transition-all duration-300"
              >
                Submit Request
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30 text-center flex flex-col items-center">
        <img src={logoWhite} alt="DA:TE" className="w-20 opacity-30 mb-8" />
        <div className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
          <p>© {new Date().getFullYear()} DA : TE Events. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
