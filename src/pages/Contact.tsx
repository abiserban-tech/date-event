import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

export default function Contact() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-accent selection:text-black">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-64 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl mb-6">
              LET'S TALK.
            </motion.h1>
            <motion.div variants={fadeUp} className="w-24 h-[1px] bg-accent mx-auto md:mx-0"></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form variants={fadeUp} className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Input 
                  placeholder="Name" 
                  className="bg-transparent border-b border-border/50 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-b border-border/50 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Textarea 
                  placeholder="Message" 
                  className="bg-transparent border-b border-border/50 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-accent placeholder:text-muted-foreground/50 transition-colors min-h-[150px] resize-none"
                />
              </div>
              <div className="pt-8">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-12 bg-secondary text-black hover:bg-accent hover:text-black py-6 md:py-8 text-sm uppercase tracking-[0.2em] font-serif rounded-none transition-all duration-300"
                >
                  Send Message
                </Button>
              </div>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-12"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-sm tracking-[0.3em] text-accent mb-4 uppercase">Email</h3>
              <a href="mailto:contact@setthedate.ro" className="font-serif text-2xl md:text-3xl text-secondary hover:text-accent transition-colors">
                contact@setthedate.ro
              </a>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="text-sm tracking-[0.3em] text-accent mb-4 uppercase">Instagram</h3>
              <a href="#" className="font-serif text-2xl md:text-3xl text-secondary hover:text-accent transition-colors">
                @setthedate.ro
              </a>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="text-sm tracking-[0.3em] text-accent mb-4 uppercase">Location</h3>
              <p className="font-serif text-2xl md:text-3xl text-secondary">
                Bucharest, Romania
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/30 text-center flex flex-col items-center mt-12 md:mt-24">
        <img src={logoWhite} alt="DA:TE" className="w-20 opacity-30 mb-8" />
        <div className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
          <p>© {new Date().getFullYear()} DA : TE Events. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
