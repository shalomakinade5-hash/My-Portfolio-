import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'recognition', label: 'Recognition', href: '#recognition' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#F4F7FF]/10 bg-[#080B18]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-4 sm:px-8 lg:px-12">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#home"
            onClick={() => handleNavClick('home')}
            className="font-display text-base font-bold tracking-tight text-[#F4F7FF] whitespace-nowrap shrink-0 transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] sm:text-lg"
            data-cursor="link"
            data-cursor-label="TOP"
          >
            Akinade Shalom Eniola
          </a>

          {/* Zone 2: 5 concise single-line text nav links */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE] ${
                    isActive ? 'text-[#22D3EE]' : 'text-[#A5B1CC] hover:text-[#F4F7FF]'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#2563EB] to-[#22D3EE] transition-transform duration-200 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + mobile menu toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="hidden items-center gap-1.5 bg-[#2563EB] px-4 py-2 text-xs font-bold tracking-tight text-[#F4F7FF] whitespace-nowrap shrink-0 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] md:inline-flex"
              data-cursor="button"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center border border-[#F4F7FF]/20 bg-[#111A35] text-[#F4F7FF] transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE] md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="bg-tech-grid fixed inset-0 top-16 z-40 flex flex-col justify-between bg-[#080B18] px-6 py-8 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-[#F4F7FF]/12">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                  className="flex min-h-[56px] items-center justify-between py-4 font-display text-3xl font-bold tracking-tight text-[#F4F7FF] transition-colors hover:text-[#22D3EE]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#22D3EE] tabular-nums">0{index + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-[#F4F7FF]/15 pt-6">
              <a
                href="#contact"
                onClick={() => handleNavClick('contact')}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#2563EB] px-6 py-3 font-display text-sm font-bold text-[#F4F7FF]"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
