import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { RECOGNITION_ITEMS } from '../data/portfolio';

export function RecognitionSection() {
  const prefersReducedMotion = useReducedMotion();
  const [featured, ...others] = RECOGNITION_ITEMS;

  return (
    <section
      id="recognition"
      className="border-b border-[#F4F7FF]/12 bg-[#111A35] py-20 text-[#F4F7FF] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 border-b border-[#F4F7FF]/12 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-wider text-[#22D3EE] uppercase">
              03 · Recognition
            </span>
            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-[#F4F7FF] text-balance sm:text-5xl lg:text-6xl"
            >
              Building, learning, and showing up.
            </motion.h2>
          </div>
          <p className="self-end text-base leading-relaxed text-[#A5B1CC] lg:col-span-5">
            Putting ideas in front of real problems, shipping under hackathon pressure, and learning from every iteration.
          </p>
        </div>

        {/* Prominent Editorial Feature: Build4MDA Semi-Finalist */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 grid grid-cols-1 border border-[#2563EB]/45 bg-[#080B18] text-[#F4F7FF] lg:grid-cols-12"
        >
          <div
            aria-hidden="true"
            className="h-[2px] w-full bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#8B5CF6] lg:col-span-12"
          />
          <div className="flex flex-col justify-between border-b border-[#F4F7FF]/12 p-8 sm:p-10 lg:col-span-5 lg:border-r lg:border-b-0">
            <div>
              <div className="font-mono text-xs font-semibold text-[#22D3EE]">
                {featured.badge}
              </div>
              <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#F4F7FF] sm:text-4xl">
                {featured.context}
              </h3>
            </div>

            <div className="mt-8 border-t border-[#F4F7FF]/12 pt-4 font-mono text-xs text-[#A5B1CC]">
              Recognition Status: Semi-Finalist · Public Finance Technology
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-7">
            <div>
              <div className="font-mono text-xs text-[#8B5CF6]">{featured.heading}</div>
              <p className="mt-4 text-lg leading-relaxed text-[#F4F7FF]/90 sm:text-xl">
                {featured.description}
              </p>
            </div>

            {featured.link && (
              <div className="mt-8">
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="project"
                  data-cursor-label="LIVE ↗"
                  className="inline-flex min-h-[44px] items-center gap-2 bg-[#2563EB] px-5 py-2.5 font-display text-sm font-bold text-[#F4F7FF] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]"
                >
                  <span>{featured.linkLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* Competition & Hackathon Participation */}
        <div
          className={`mt-8 grid grid-cols-1 gap-8 ${
            others.length > 1 ? 'md:grid-cols-2' : ''
          }`}
        >
          {others.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between border border-[#F4F7FF]/12 bg-[#080B18] p-8 transition-colors hover:border-[#8B5CF6]/50"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#A5B1CC]">
                  <span>{item.badge}</span>
                  <span className="text-[#22D3EE]">{item.context}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[#F4F7FF]">
                  {item.heading}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#A5B1CC]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
