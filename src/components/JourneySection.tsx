import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { JOURNEY_STEPS } from '../data/portfolio';

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 30%'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="bg-tech-grid border-b border-[#F4F7FF]/12 bg-[#080B18] py-20 text-[#F4F7FF] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 border-b border-[#F4F7FF]/12 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-wider text-[#22D3EE] uppercase">
              06 · My Journey
            </span>
            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-[#F4F7FF] sm:text-5xl"
            >
              Milestones built step by step.
            </motion.h2>
          </div>
          <p className="self-end text-base leading-relaxed text-[#A5B1CC] lg:col-span-5">
            From studying Computer Science at Federal University of Lafia to shipping live web applications and reaching the Build4MDA semi-finals.
          </p>
        </div>

        {/* Desktop Horizontal Scroll-Accentuated Timeline / Mobile Vertical Timeline */}
        <div className="relative mt-14">
          {/* Animated Scroll Progress Line (Desktop Horizontal) */}
          <div className="relative mb-10 hidden h-[2px] w-full bg-[#F4F7FF]/12 lg:block" aria-hidden="true">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#8B5CF6]"
              style={prefersReducedMotion ? { scaleX: 1 } : { scaleX: lineScale }}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
            {JOURNEY_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between border border-[#F4F7FF]/12 bg-[#111A35] p-5 transition-colors duration-200 hover:border-[#22D3EE]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#22D3EE] tabular-nums">
                      {item.step}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 bg-[#8B5CF6] transition-transform duration-200 group-hover:scale-125"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-snug font-bold tracking-tight text-[#F4F7FF]">
                    {item.title}
                  </h3>
                  <div className="mt-1 font-mono text-[11px] text-[#A5B1CC]">
                    {item.subtitle}
                  </div>
                </div>
                <p className="mt-4 border-t border-[#F4F7FF]/10 pt-3 text-xs leading-relaxed text-[#A5B1CC]">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
