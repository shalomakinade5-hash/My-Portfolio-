import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface OpeningSequenceProps {
  onComplete: () => void;
}

const NAME_LETTERS = 'AKINADE SHALOM ENIOLA'.split('');

export function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => !prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1550);

    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="opening-curtain"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
          }}
          className="bg-tech-grid fixed inset-0 z-[100] flex flex-col justify-between bg-[#080B18] px-6 py-8 text-[#F4F7FF] sm:px-12 sm:py-10"
          role="dialog"
          aria-label="Portfolio introduction"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
                <defs>
                  <linearGradient id="introMarkGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <rect width="64" height="64" fill="#111A35" stroke="#F4F7FF" strokeOpacity="0.25" strokeWidth="2" />
                <motion.path
                  d="M12 50L26 14H33L47 50H39.5L36.5 41.5H22.5L19.5 50H12ZM24.5 35.5H34.5L29.5 21.5L24.5 35.5Z"
                  fill="url(#introMarkGrad)"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
                <motion.rect
                  x="48"
                  y="14"
                  width="6"
                  height="36"
                  fill="#22D3EE"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  style={{ transformOrigin: 'bottom' }}
                />
              </svg>
              <span className="font-mono text-xs tracking-wider text-[#A5B1CC]">
                Full-Stack Developer &amp; Product Builder
              </span>
            </motion.div>

            <button
              type="button"
              onClick={() => setVisible(false)}
              className="border border-[#F4F7FF]/20 bg-[#111A35] px-3 py-1.5 font-mono text-xs text-[#F4F7FF] transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
            >
              Skip intro
            </button>
          </div>

          {/* Center kinetic masked name reveal */}
          <div className="my-auto overflow-hidden py-4">
            <div className="mb-5 h-px w-full overflow-hidden bg-[#F4F7FF]/12">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#8B5CF6]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </div>

            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-4">
                {NAME_LETTERS.map((char, idx) =>
                  char === ' ' ? (
                    <span key={idx} className="w-2 sm:w-4" aria-hidden="true" />
                  ) : (
                    <span key={idx} className="inline-block overflow-hidden">
                      <motion.span
                        className="inline-block font-display text-3xl font-extrabold tracking-tight text-[#F4F7FF] sm:text-5xl md:text-7xl"
                        initial={{ y: '110%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        transition={{
                          duration: 0.48,
                          delay: 0.08 + idx * 0.025,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {char}
                      </motion.span>
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-4 overflow-hidden">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base text-[#22D3EE] sm:text-xl"
              >
                I build things people can actually use.
              </motion.p>
            </div>
          </div>

          {/* Bottom descriptor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex items-center justify-between border-t border-[#F4F7FF]/12 pt-4 font-mono text-xs text-[#A5B1CC]"
          >
            <span>Federal University of Lafia · Nigeria</span>
            <span className="text-[#8B5CF6]">Selected Works</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
