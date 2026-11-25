import { motion, useReducedMotion } from 'motion/react';
import { ABOUT_INTERESTS, PERSONAL } from '../data/portfolio';

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative border-b border-[#F4F7FF]/12 bg-[#111A35] py-20 text-[#F4F7FF] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-8 border-b border-[#F4F7FF]/12 pb-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-medium tracking-wider text-[#22D3EE] uppercase">
              01 · About
            </span>
            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-[#F4F7FF] text-balance sm:text-5xl"
            >
              A little about what I do.
            </motion.h2>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-6 lg:col-span-8"
          >
            <p className="max-w-3xl text-xl leading-[1.55] font-medium text-[#F4F7FF] sm:text-2xl">
              {PERSONAL.intro}
            </p>

            <div className="grid grid-cols-1 gap-6 border-t border-[#F4F7FF]/12 pt-6 sm:grid-cols-2">
              <div>
                <div className="font-mono text-xs text-[#22D3EE]">Academic Foundation</div>
                <p className="mt-1.5 text-base font-medium text-[#F4F7FF]">
                  19-year-old Computer Science student at the Federal University of Lafia (FULAFIA), Nigeria.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs text-[#8B5CF6]">Core Philosophy</div>
                <p className="mt-1.5 text-base font-medium text-[#F4F7FF]">
                  Actively building and shipping real digital products—not just practicing syntax.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Interests Editorial Grid */}
        <div className="mt-12">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-xl font-bold tracking-tight text-[#F4F7FF] sm:text-2xl">
              Areas of focus &amp; curiosity
            </h3>
            <span className="font-mono text-xs text-[#A5B1CC]">
              Software · Product · Applied AI
            </span>
          </div>

          <div className="grid grid-cols-1 border-t border-[#F4F7FF]/12 md:grid-cols-2 lg:grid-cols-3">
            {ABOUT_INTERESTS.map((interest, idx) => (
              <motion.div
                key={interest.index}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-b border-[#F4F7FF]/12 py-7 pr-6 transition-colors duration-200 hover:bg-[#080B18] hover:px-6 md:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#22D3EE] tabular-nums group-hover:text-[#8B5CF6]">
                    {interest.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 bg-[#F4F7FF]/20 transition-colors group-hover:bg-[#2563EB]"
                  />
                </div>
                <h4 className="mt-4 font-display text-xl font-bold tracking-tight text-[#F4F7FF]">
                  {interest.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#A5B1CC] group-hover:text-[#F4F7FF]/85">
                  {interest.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
