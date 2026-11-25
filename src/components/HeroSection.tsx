import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

interface HeroSectionProps {
  introComplete: boolean;
}

const PARTICLE_NODES = [
  { cx: 48, cy: 62, r: 2, delay: 0 },
  { cx: 308, cy: 76, r: 2.5, delay: 0.6 },
  { cx: 74, cy: 292, r: 2, delay: 1.1 },
  { cx: 294, cy: 280, r: 2, delay: 0.4 },
  { cx: 180, cy: 36, r: 2.5, delay: 0.9 },
  { cx: 180, cy: 326, r: 2, delay: 1.4 },
];

export function HeroSection({ introComplete }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 180, mass: 0.8 };
  const smoothX = useSpring(pointerX, springConfig);
  const smoothY = useSpring(pointerY, springConfig);

  const layer1X = useTransform(smoothX, [-1, 1], [-16, 16]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-12, 12]);
  const layer2X = useTransform(smoothX, [-1, 1], [22, -22]);
  const layer2Y = useTransform(smoothY, [-1, 1], [16, -16]);
  const rotateDeg = useTransform(smoothX, [-1, 1], [-8, 8]);
  const tiltSkew = useTransform(smoothY, [-1, 1], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    pointerX.set(normX);
    pointerY.set(normY);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-tech-grid relative overflow-hidden border-b border-[#F4F7FF]/12 bg-[#080B18] text-[#F4F7FF]"
    >
      {/* Restrained ambient electric blue & violet light gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-[#2563EB]/14 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-32 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/14 blur-[120px]"
      />

      {/* Subtle architectural coordinate hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto max-w-[1440px] border-x border-[#F4F7FF]/8"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1440px] flex-col justify-between px-4 pt-10 pb-8 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16">
        {/* Top Metadata Strip (unboxed clean editorial text) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={introComplete ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F4F7FF]/12 pb-4 text-xs text-[#A5B1CC]"
        >
          <div className="flex flex-wrap items-center gap-2 font-mono">
            <span className="text-[#22D3EE]">Full-Stack Developer</span>
            <span aria-hidden="true">/</span>
            <span>Product Builder</span>
            <span aria-hidden="true">/</span>
            <span>Computer Science Student</span>
          </div>
          <div className="font-mono text-[#A5B1CC]">
            Federal University of Lafia · Nigeria
          </div>
        </motion.div>

        {/* Main Hero Split Composition */}
        <div className="my-auto grid grid-cols-1 items-stretch gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-12">
          {/* Left 7 Columns: Oversized Ice White Typography + Headline + CTAs */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              {/* Stacked Kinetic Name */}
              <h1 className="font-display text-[clamp(3.1rem,8.5vw,6.8rem)] leading-[0.88] font-extrabold tracking-[-0.04em] text-[#F4F7FF]">
                {PERSONAL.shortLines.map((word, idx) => (
                  <span key={word} className="block overflow-hidden">
                    <motion.span
                      className={`block ${
                        idx === 1 ? 'text-gradient-kinetic' : 'text-[#F4F7FF]'
                      }`}
                      initial={prefersReducedMotion ? false : { y: '108%', opacity: 0 }}
                      animate={introComplete ? { y: '0%', opacity: 1 } : undefined}
                      transition={{
                        duration: 0.6,
                        delay: 0.08 + idx * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Main Headline */}
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={introComplete ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.55, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 max-w-2xl font-display text-2xl leading-[1.15] font-bold tracking-tight text-[#F4F7FF] text-balance sm:text-4xl"
              >
                {PERSONAL.headline}
              </motion.p>

              {/* Supporting Descriptor */}
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={introComplete ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 max-w-xl text-base leading-relaxed text-[#A5B1CC] sm:text-lg"
              >
                {PERSONAL.descriptor} Turning ideas into live, practical web applications across productivity, payments, public finance, and digital platforms.
              </motion.p>
            </div>

            {/* Two Clear CTAs */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={introComplete ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                data-cursor="button"
                className="group inline-flex min-h-[48px] items-center gap-2.5 bg-[#2563EB] px-6 py-3 font-display text-sm font-bold tracking-tight text-[#F4F7FF] whitespace-nowrap shrink-0 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_0_24px_rgba(37,99,235,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
              >
                <span>Explore My Work</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#contact"
                data-cursor="link"
                data-cursor-label="TALK"
                className="inline-flex min-h-[48px] items-center gap-2 border border-[#F4F7FF]/25 bg-[#111A35]/70 px-6 py-3 font-display text-sm font-bold tracking-tight text-[#F4F7FF] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#22D3EE] hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3EE]"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </motion.div>
          </div>

          {/* Right 5 Columns: Abstract 3D-Inspired Interactive Technology Canvas */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={introComplete ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex min-h-[340px] flex-col justify-between border border-[#F4F7FF]/15 bg-[#111A35] p-6 lg:col-span-5 lg:min-h-[460px]"
          >
            <div className="flex items-center justify-between font-mono text-xs text-[#A5B1CC]">
              <span>Spatial Geometry</span>
              <span className="text-[#22D3EE]">5 Live &amp; Deployed Builds</span>
            </div>

            {/* Interactive 3D-like Isometric SVG Architecture */}
            <div className="relative my-6 flex flex-1 items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 360 360"
                className="h-full max-h-[320px] w-full max-w-[320px]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="heroBlueViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="heroCyanBlue" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Fine coordinate grid */}
                <g stroke="#F4F7FF" strokeOpacity="0.09" strokeWidth="1">
                  <line x1="0" y1="90" x2="360" y2="90" />
                  <line x1="0" y1="180" x2="360" y2="180" />
                  <line x1="0" y1="270" x2="360" y2="270" />
                  <line x1="90" y1="0" x2="90" y2="360" />
                  <line x1="180" y1="0" x2="180" y2="360" />
                  <line x1="270" y1="0" x2="270" y2="360" />
                </g>

                {/* Subtle drifting particle nodes */}
                {PARTICLE_NODES.map((node, i) => (
                  <motion.circle
                    key={i}
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill={i % 2 === 0 ? '#22D3EE' : '#8B5CF6'}
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: [0.35, 1, 0.35], y: [0, -6, 0] }
                    }
                    transition={{
                      duration: 3.6,
                      delay: node.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                {/* Outer isometric wireframe cube plane */}
                <motion.g
                  style={
                    prefersReducedMotion
                      ? undefined
                      : { x: layer1X, y: layer1Y, skewX: tiltSkew, transformOrigin: '180px 180px' }
                  }
                >
                  <polygon
                    points="180,44 294,110 294,242 180,308 66,242 66,110"
                    fill="none"
                    stroke="url(#heroCyanBlue)"
                    strokeWidth="1.5"
                  />
                  <line x1="180" y1="44" x2="180" y2="176" stroke="#F4F7FF" strokeOpacity="0.22" />
                  <line x1="180" y1="176" x2="294" y2="242" stroke="#F4F7FF" strokeOpacity="0.22" />
                  <line x1="180" y1="176" x2="66" y2="242" stroke="#F4F7FF" strokeOpacity="0.22" />
                </motion.g>

                {/* Inner rotating orbital geometry */}
                <motion.g
                  style={
                    prefersReducedMotion
                      ? undefined
                      : { x: layer2X, y: layer2Y, rotate: rotateDeg, transformOrigin: '180px 180px' }
                  }
                >
                  <circle
                    cx="180"
                    cy="180"
                    r="88"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />
                  <polygon
                    points="180,92 256,180 180,268 104,180"
                    fill="#080B18"
                    fillOpacity="0.65"
                    stroke="url(#heroBlueViolet)"
                    strokeWidth="2"
                  />
                  <rect x="148" y="148" width="64" height="64" fill="url(#heroBlueViolet)" />
                </motion.g>

                {/* Glowing cyan accent node */}
                <motion.g style={prefersReducedMotion ? undefined : { x: layer1X, y: layer2Y }}>
                  <rect x="246" y="78" width="24" height="24" fill="none" stroke="#22D3EE" strokeWidth="1.5" />
                  <circle cx="258" cy="90" r="3.5" fill="#22D3EE" />
                </motion.g>

                {/* Center monogram mark */}
                <text
                  x="180"
                  y="186"
                  textAnchor="middle"
                  fill="#F4F7FF"
                  fontFamily="Archivo, sans-serif"
                  fontWeight="800"
                  fontSize="19"
                  letterSpacing="-0.03em"
                >
                  ASE
                </text>
              </svg>
            </div>

            {/* Bottom structural strip inside hero stage */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#F4F7FF]/12 pt-4 font-mono text-xs">
              <div>
                <div className="text-[#A5B1CC]">Focus</div>
                <div className="mt-1 font-medium text-[#F4F7FF]">Full-Stack</div>
              </div>
              <div>
                <div className="text-[#A5B1CC]">Recognition</div>
                <div className="mt-1 font-medium text-[#22D3EE]">Build4MDA</div>
              </div>
              <div>
                <div className="text-[#A5B1CC]">Base</div>
                <div className="mt-1 font-medium text-[#F4F7FF]">FULAFIA</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="flex items-center justify-between border-t border-[#F4F7FF]/12 pt-4">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 py-1 font-mono text-xs text-[#A5B1CC] transition-colors hover:text-[#22D3EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22D3EE]"
          >
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex h-7 w-7 items-center justify-center border border-[#F4F7FF]/20 bg-[#111A35] group-hover:border-[#22D3EE]"
            >
              <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            </motion.span>
            <span>Scroll to explore</span>
          </a>

          <span className="hidden font-mono text-xs text-[#A5B1CC]/80 sm:inline">
            Selected Projects · Recognition · Journey
          </span>
        </div>
      </div>
    </section>
  );
}
