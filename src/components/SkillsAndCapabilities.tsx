import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ALL_SKILLS_TICKER, CAPABILITIES, SKILL_GROUPS } from '../data/portfolio';

export function SkillsAndCapabilities() {
  const prefersReducedMotion = useReducedMotion();
  const [activeGroup, setActiveGroup] = useState<string>('All');

  const visibleGroups =
    activeGroup === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.group === activeGroup);

  return (
    <>
      {/* SECTION 5: SKILLS AND TECHNOLOGIES */}
      <section
        id="skills"
        className="overflow-hidden border-b border-[#F4F7FF]/12 bg-[#080B18] py-20 text-[#F4F7FF] sm:py-28"
      >
        {/* Horizontal Kinetic Technology Ticker */}
        <div className="mb-16 border-y border-[#F4F7FF]/12 bg-[#111A35] py-4">
          <div className="flex w-max animate-ticker items-center gap-8 whitespace-nowrap">
            {[...ALL_SKILLS_TICKER, ...ALL_SKILLS_TICKER].map((tech, idx) => (
              <div key={`${tech}-${idx}`} className="flex items-center gap-8">
                <span className="font-display text-xl font-bold tracking-tight text-[#F4F7FF] sm:text-2xl">
                  {tech}
                </span>
                <span className="font-mono text-xs text-[#22D3EE]" aria-hidden="true">
                  /
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 border-b border-[#F4F7FF]/12 pb-10 lg:flex-row lg:items-end">
            <div>
              <span className="font-mono text-xs tracking-wider text-[#22D3EE] uppercase">
                04 · Skills &amp; Technologies
              </span>
              <h2 className="mt-3 font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-[#F4F7FF] sm:text-5xl">
                Tools I build with.
              </h2>
            </div>

            {/* Interactive Group Filter */}
            <div className="flex flex-wrap items-center gap-1 border border-[#F4F7FF]/15 bg-[#111A35] p-1">
              {['All', ...SKILL_GROUPS.map((g) => g.group)].map((groupName) => (
                <button
                  key={groupName}
                  type="button"
                  onClick={() => setActiveGroup(groupName)}
                  className={`px-3.5 py-2 font-mono text-xs whitespace-nowrap transition-colors ${
                    activeGroup === groupName
                      ? 'bg-[#2563EB] font-semibold text-[#F4F7FF]'
                      : 'text-[#A5B1CC] hover:text-[#F4F7FF]'
                  }`}
                >
                  {groupName}
                </button>
              ))}
            </div>
          </div>

          {/* Grouped Technology Matrix */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {visibleGroups.map((group, idx) => (
              <motion.div
                key={group.group}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="border border-[#F4F7FF]/12 bg-[#111A35] p-6 sm:p-8"
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-[#F4F7FF]/12 pb-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#F4F7FF]">
                    {group.group}
                  </h3>
                  <span className="font-mono text-xs text-[#22D3EE] tabular-nums">
                    {group.items.length} {group.items.length === 1 ? 'technology' : 'technologies'}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#A5B1CC]">{group.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-[#F4F7FF]/18 bg-[#080B18] px-3.5 py-2 font-mono text-xs font-medium text-[#F4F7FF] transition-colors duration-150 hover:border-[#22D3EE] hover:text-[#22D3EE]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT I BRING */}
      <section className="border-b border-[#F4F7FF]/12 bg-[#111A35] py-20 text-[#F4F7FF] sm:py-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
              <span className="font-mono text-xs tracking-wider text-[#8B5CF6] uppercase">
                05 · What I Bring
              </span>
              <motion.h2
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 font-display text-4xl leading-[1.0] font-extrabold tracking-tight text-[#F4F7FF] text-balance sm:text-5xl lg:text-6xl"
              >
                From idea to implementation.
              </motion.h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[#A5B1CC]">
                Practical engineering paired with product awareness—moving ideas smoothly from early concept through integration and deployment.
              </p>
            </div>

            <div className="divide-y divide-[#F4F7FF]/12 border-t border-b border-[#F4F7FF]/12 lg:col-span-7">
              {CAPABILITIES.map((cap, idx) => (
                <motion.div
                  key={cap.num}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid grid-cols-12 items-baseline gap-4 py-6 transition-colors duration-150 hover:bg-[#080B18] hover:px-5"
                >
                  <span className="col-span-2 font-mono text-xs font-semibold text-[#22D3EE] tabular-nums group-hover:text-[#8B5CF6] sm:col-span-1">
                    {cap.num}
                  </span>
                  <h3 className="col-span-10 font-display text-xl font-bold tracking-tight text-[#F4F7FF] sm:col-span-5">
                    {cap.title}
                  </h3>
                  <p className="col-span-10 col-start-3 text-sm leading-relaxed text-[#A5B1CC] group-hover:text-[#F4F7FF]/85 sm:col-span-6 sm:col-start-auto">
                    {cap.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
