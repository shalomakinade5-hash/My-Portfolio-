import { useRef, useState, type ReactNode } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { ArrowUpRight, ChevronDown, GitBranch, Link2 } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolio';
import { ProjectVisual } from './ProjectVisuals';

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState<string | null>('camera-busy');

  const toggleDetails = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const featuredPrimary = PROJECTS.slice(0, 4); // Camera Busy, Workly, FiscalPulse + Cash Water Flow, Wuerld Boost
  const secondaryBuilds = PROJECTS.slice(4); // AIVORA, YAPO, PayLens

  return (
    <section
      id="projects"
      className="bg-tech-grid relative border-b border-[#F4F7FF]/12 bg-[#080B18] py-20 text-[#F4F7FF] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        {/* Section Intro */}
        <div className="grid grid-cols-1 items-end gap-6 border-b border-[#F4F7FF]/12 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs tracking-wider text-[#22D3EE] uppercase">
              02 · Featured Projects
            </span>
            <motion.h2
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-display text-4xl leading-[0.98] font-extrabold tracking-tight text-[#F4F7FF] text-balance sm:text-6xl"
            >
              Products shipped &amp; explored.
            </motion.h2>
          </div>
          <p className="text-base leading-relaxed text-[#A5B1CC] lg:col-span-5">
            Seven project entries spanning live web platforms, active product development, public-finance decision support, and hackathon builds.
          </p>
        </div>

        {/* Projects 01 - 04: Full Asymmetric Showcase Rows */}
        <div className="divide-y divide-[#F4F7FF]/12">
          {featuredPrimary.map((project, idx) => (
            <ProjectShowcaseRow
              key={project.id}
              project={project}
              inverted={idx % 2 === 1}
              isExpanded={expandedId === project.id}
              onToggle={() => toggleDetails(project.id)}
            />
          ))}
        </div>

        {/* Projects 05 - 07: Active AI Build & Hackathon Showcase Grid */}
        <div className="border-t border-[#F4F7FF]/12 pt-16">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-[#F4F7FF] sm:text-3xl">
              Active development &amp; hackathon builds
            </h3>
            <span className="font-mono text-xs text-[#A5B1CC]">
              AIVORA · YAPO · PayLens
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {secondaryBuilds.map((project) => (
              <ProjectCompactCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getAccentColorClass(accent: ProjectItem['accent']) {
  if (accent === 'violet') return 'text-[#8B5CF6]';
  if (accent === 'cyan') return 'text-[#22D3EE]';
  return 'text-[#2563EB]';
}

function getAccentRgb(accent: ProjectItem['accent']) {
  if (accent === 'violet') return '139, 92, 246';
  if (accent === 'cyan') return '34, 211, 238';
  return '37, 99, 235';
}

function StatusIndicator({
  status,
  tone,
}: {
  status: ProjectItem['status'];
  tone: ProjectItem['statusTone'];
}) {
  if (tone === 'success') {
    return (
      <span className="inline-flex items-center gap-1.5 border border-emerald-400/40 bg-emerald-500/12 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-300 whitespace-nowrap">
        <span className="h-1.5 w-1.5 bg-emerald-400" aria-hidden="true" />
        {status}
      </span>
    );
  }
  if (tone === 'development') {
    return (
      <span className="inline-flex items-center gap-1.5 border border-[#22D3EE]/40 bg-[#22D3EE]/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#22D3EE] whitespace-nowrap">
        <span className="h-1.5 w-1.5 bg-[#22D3EE]" aria-hidden="true" />
        {status}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border border-[#8B5CF6]/45 bg-[#8B5CF6]/12 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#C4B5FD] whitespace-nowrap">
      <span className="h-1.5 w-1.5 bg-[#8B5CF6]" aria-hidden="true" />
      {status}
    </span>
  );
}

function CursorGlowLayer({
  accent,
  children,
  className = '',
  initial,
  whileInView,
  viewport,
  transition,
}: {
  accent: ProjectItem['accent'];
  children: ReactNode;
  className?: string;
  initial?: { opacity: number; y: number } | false;
  whileInView?: { opacity: number; y: number };
  viewport?: { once: boolean; margin: string };
  transition?: { duration: number; ease: [number, number, number, number] };
}) {
  const cardRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const smoothX = useSpring(mouseX, { damping: 32, stiffness: 320, mass: 0.4 });
  const smoothY = useSpring(mouseY, { damping: 32, stiffness: 320, mass: 0.4 });

  const rgb = getAccentRgb(accent);
  const surfaceGlow = useMotionTemplate`radial-gradient(460px circle at ${smoothX}px ${smoothY}px, rgba(${rgb}, 0.14), rgba(34, 211, 238, 0.05) 42%, transparent 72%)`;
  const borderGlow = useMotionTemplate`radial-gradient(320px circle at ${smoothX}px ${smoothY}px, rgba(${rgb}, 0.55), transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={`group relative overflow-hidden ${className}`}
    >
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: surfaceGlow }}
        />
      )}

      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: borderGlow,
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}

function ProjectShowcaseRow({
  project,
  inverted,
  isExpanded,
  onToggle,
}: {
  project: ProjectItem;
  inverted: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const numberAccent = getAccentColorClass(project.accent);

  return (
    <div className="py-10 sm:py-14">
      <CursorGlowLayer
        accent={project.accent}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="border border-[#F4F7FF]/12 bg-[#0B1022]/85 p-6 sm:p-10 lg:p-12"
      >
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative Column */}
          <div
            className={`flex flex-col justify-between lg:col-span-5 ${
              inverted ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div>
              {/* Status + Category */}
              <div className="flex flex-wrap items-center gap-3">
                <StatusIndicator status={project.status} tone={project.statusTone} />
                <span className="font-mono text-xs text-[#A5B1CC]">{project.category}</span>
              </div>

              {/* Oversized Project Number + Animated Title */}
              <div className="mt-4 flex items-baseline gap-4">
                <span
                  className={`font-display text-5xl font-extrabold tracking-tighter tabular-nums sm:text-6xl ${numberAccent}`}
                >
                  {project.number}
                </span>
                <h3 className="font-display text-3xl font-extrabold tracking-tight text-[#F4F7FF] transition-transform duration-200 group-hover:translate-x-1 sm:text-4xl">
                  {project.title}
                </h3>
              </div>

              {/* Optional Launch / Traction / Recognition Metadata */}
              {(project.launchNote || project.tractionNote || project.recognitionTag) && (
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[#22D3EE]">
                  {project.launchNote && <span>{project.launchNote}</span>}
                  {project.launchNote && project.tractionNote && <span aria-hidden="true">·</span>}
                  {project.tractionNote && <span className="font-semibold">{project.tractionNote}</span>}
                  {project.recognitionTag && (
                    <span className="inline-flex items-center gap-1.5 text-[#C4B5FD]">
                      <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.recognitionTag}
                    </span>
                  )}
                </div>
              )}

              <p className="mt-5 text-base leading-relaxed text-[#A5B1CC]">{project.summary}</p>

              {/* Integrated Sub-Components (FiscalPulse + Cash Water Flow) */}
              {project.subComponents && (
                <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#F4F7FF]/12 pt-4 sm:grid-cols-2">
                  {project.subComponents.map((sub) => (
                    <div key={sub.name} className="border border-[#F4F7FF]/10 bg-[#080B18] p-3.5">
                      <div className="font-display text-sm font-bold text-[#F4F7FF]">{sub.name}</div>
                      <div className="mt-0.5 font-mono text-[11px] text-[#22D3EE]">{sub.role}</div>
                      <ul className="mt-2 space-y-1 text-xs text-[#A5B1CC]">
                        {sub.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#8B5CF6]" aria-hidden="true" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Expandable Technical Highlights */}
              {(project.highlights || project.architectureNote) && (
                <div className="mt-6 border-t border-[#F4F7FF]/12 pt-4">
                  <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between py-2 text-left font-mono text-xs font-medium text-[#22D3EE] transition-colors hover:text-[#F4F7FF]"
                  >
                    <span>
                      {isExpanded ? 'Hide Technical Details' : 'View Technical Details'}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {project.highlights && (
                          <ul className="mt-3 space-y-2 border-t border-[#F4F7FF]/10 pt-3 text-sm text-[#A5B1CC]">
                            {project.highlights.map((item) => (
                              <li key={item} className="flex items-start gap-2.5">
                                <span
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#22D3EE]"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {project.architectureNote && (
                          <p className="mt-3 font-mono text-xs leading-relaxed text-[#A5B1CC]/80">
                            {project.architectureNote}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Action Links: Website + optional GitHub (ONLY for projects that explicitly have githubUrl) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.url && project.ctaLabel && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="project"
                  data-cursor-label="OPEN ↗"
                  className="group/btn inline-flex min-h-[48px] items-center gap-2.5 bg-[#2563EB] px-6 py-3 font-display text-sm font-bold tracking-tight text-[#F4F7FF] whitespace-nowrap transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_0_24px_rgba(37,99,235,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                >
                  <span>{project.ctaLabel}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  data-cursor-label="CODE ↗"
                  className="inline-flex min-h-[48px] items-center gap-2 border border-[#F4F7FF]/25 bg-[#111A35] px-5 py-3 font-mono text-xs font-semibold text-[#F4F7FF] whitespace-nowrap transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
                >
                  <GitBranch className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub Repo</span>
                </a>
              )}
            </div>
          </div>

          {/* Visual Interactive Preview Column */}
          <div
            className={`transition-transform duration-300 group-hover:-translate-y-1 lg:col-span-7 ${
              inverted ? 'lg:order-1' : 'lg:order-2'
            }`}
            data-cursor="project"
            data-cursor-label="INSPECT"
          >
            <ProjectVisual project={project} />
          </div>
        </div>
      </CursorGlowLayer>
    </div>
  );
}

function ProjectCompactCard({ project }: { project: ProjectItem }) {
  const prefersReducedMotion = useReducedMotion();
  const numberAccent = getAccentColorClass(project.accent);

  return (
    <CursorGlowLayer
      accent={project.accent}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border border-[#F4F7FF]/12 bg-[#0B1022]/90 p-6 sm:p-8"
    >
      <div className="flex h-full flex-col justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <StatusIndicator status={project.status} tone={project.statusTone} />
            <span className="font-mono text-[11px] text-[#A5B1CC]">{project.category}</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span
              className={`font-display text-4xl font-extrabold tracking-tighter tabular-nums ${numberAccent}`}
            >
              {project.number}
            </span>
            <h4 className="font-display text-2xl font-extrabold tracking-tight text-[#F4F7FF] transition-transform duration-200 group-hover:translate-x-1">
              {project.title}
            </h4>
          </div>

          {project.tagline && (
            <p className="mt-2 font-mono text-xs italic text-[#22D3EE]">
              &ldquo;{project.tagline}&rdquo;
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-[#A5B1CC]">{project.summary}</p>
        </div>

        <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
          <ProjectVisual project={project} />
        </div>
      </div>
    </CursorGlowLayer>
  );
}
