import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import logoWhite from "@assets/WHITE_TRANSPARENT_1779605387314.png";

export default function Nav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center pointer-events-none">
        <div
          className={`w-24 md:w-32 pointer-events-auto transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href="/">
            <img
              src={logoWhite}
              alt="DA:TE"
              className="w-full h-auto brightness-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 font-serif text-sm tracking-[0.3em] uppercase pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors ${location === link.path ? "text-accent" : "hover:text-accent"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden pointer-events-auto flex flex-col gap-[5px] p-2"
          aria-label="Open menu"
        >
          <span className="w-6 h-[1px] bg-secondary" />
          <span className="w-6 h-[1px] bg-secondary" />
          <span className="w-4 h-[1px] bg-secondary" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 p-2 text-secondary text-3xl font-light"
            aria-label="Close menu"
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`font-serif text-2xl tracking-[0.3em] uppercase transition-colors ${
                location === link.path ? "text-accent" : "text-secondary hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
