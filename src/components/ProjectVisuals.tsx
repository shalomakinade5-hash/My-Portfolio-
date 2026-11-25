import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, ArrowRight, ExternalLink, Sparkles, AlertTriangle } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';

interface ProjectVisualProps {
  project: ProjectItem;
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  switch (project.visualType) {
    case 'camera-busy':
      return <CameraBusyVisual url={project.url!} />;
    case 'workly':
      return <WorklyVisual url={project.url!} />;
    case 'fiscal-suite':
      return <FiscalSuiteVisual url={project.url!} />;
    case 'wuerld-boost':
      return <WuerldBoostVisual url={project.url!} />;
    case 'aivora':
      return <AivoraVisual />;
    case 'yapo':
      return <YapoVisual />;
    case 'paylens':
      return <PayLensVisual />;
  }
}

function PreviewFrameChrome({
  domain,
  label,
  url,
  accentColor = '#22D3EE',
}: {
  domain: string;
  label: string;
  url?: string;
  accentColor?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#F4F7FF]/12 bg-[#080B18] px-4 py-2.5 font-mono text-xs text-[#A5B1CC]">
      <div className="flex items-center gap-3 truncate">
        <span style={{ color: accentColor }}>■</span>
        <span className="truncate text-[#F4F7FF]/85">{domain}</span>
      </div>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#22D3EE]"
        >
          <span>{label}</span>
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      ) : (
        <span className="whitespace-nowrap shrink-0 text-[#A5B1CC]/80">{label}</span>
      )}
    </div>
  );
}

/* 01 — CAMERA BUSY: Webcam Diagnostics + Polar $5 Payment & Webhook Verification Blueprint */
function CameraBusyVisual({ url }: { url: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      code: '01',
      title: 'Conflict & Permission Check',
      desc: 'Investigates cameras used by another app, browser permission blocks, black screens, Windows privacy settings, and driver conflicts.',
    },
    {
      code: '02',
      title: 'Guided Troubleshooting & Retest',
      desc: 'Guides users step-by-step through isolating camera access issues and retesting webcam availability.',
    },
    {
      code: '03',
      title: 'Polar $5 Payment Integration',
      desc: 'One-time $5 payment flow via Polar with server-side payment verification.',
    },
    {
      code: '04',
      title: 'Webhook & Entitlement Handling',
      desc: 'Webhook signature verification and secure paid-access entitlement handling (in active development).',
    },
  ];

  return (
    <div className="flex h-full flex-col border border-[#F4F7FF]/15 bg-[#111A35]">
      <PreviewFrameChrome
        domain="camera-busy24.vercel.app"
        label="Open Preview"
        url={url}
        accentColor="#2563EB"
      />

      <div className="grid flex-1 grid-cols-1 gap-6 p-6 sm:grid-cols-12">
        <div className="bg-tech-grid flex flex-col items-center justify-center border border-[#F4F7FF]/12 bg-[#080B18] p-5 sm:col-span-5">
          <svg viewBox="0 0 180 180" className="h-36 w-36" aria-hidden="true">
            <circle cx="90" cy="90" r="78" fill="none" stroke="#F4F7FF" strokeOpacity="0.14" strokeWidth="1" />
            <motion.circle
              cx="90"
              cy="90"
              r="58"
              fill="none"
              stroke="#22D3EE"
              strokeWidth="1.5"
              strokeDasharray="10 6"
              animate={prefersReducedMotion ? undefined : { rotate: activeStage * 45 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: '90px 90px' }}
            />
            <motion.polygon
              points="90,46 128,68 128,112 90,134 52,112 52,68"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1.8"
              animate={prefersReducedMotion ? undefined : { scale: 0.85 + activeStage * 0.06 }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: '90px 90px' }}
            />
            <text
              x="90"
              y="95"
              textAnchor="middle"
              fill="#F4F7FF"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="14"
              fontWeight="600"
            >
              {stages[activeStage].code}
            </text>
          </svg>
          <p className="mt-3 text-center font-mono text-[11px] text-[#A5B1CC]">
            Webcam Diagnostics &amp; Polar Flow
          </p>
        </div>

        <div className="flex flex-col justify-between gap-2 sm:col-span-7">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.code}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`w-full border px-4 py-3 text-left transition-colors ${
                  isSelected
                    ? 'border-[#2563EB] bg-[#2563EB] text-[#F4F7FF]'
                    : 'border-[#F4F7FF]/12 bg-[#080B18] text-[#F4F7FF] hover:border-[#22D3EE]/60'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-semibold">
                    {stage.code} · {stage.title}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                {isSelected && (
                  <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#F4F7FF]/90">
                    {stage.desc}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* 02 — WORKLY: Launched Nov 2026 · 30+ Registered Users · AI-Assisted Productivity */
function WorklyVisual({ url }: { url: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [tab, setTab] = useState<'weekly' | 'goals' | 'focus'>('weekly');
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Organise weekly responsibilities & milestones', area: 'Weekly Plan', done: true },
    { id: 2, label: 'Connect daily tasks to long-term goals', area: 'Goal Mgmt', done: true },
    { id: 3, label: 'Maintain daily focus with AI-assisted planning', area: 'Daily Focus', done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className="relative flex h-full flex-col overflow-hidden border border-[#8B5CF6]/35 bg-[#111A35] text-[#F4F7FF]">
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#8B5CF6]"
      />
      <PreviewFrameChrome
        domain="get-workly.vercel.app"
        label="Open Workly"
        url={url}
        accentColor="#8B5CF6"
      />

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F4F7FF]/12 pb-4">
            <div className="flex items-center gap-1 border border-[#F4F7FF]/12 bg-[#080B18] p-1">
              {(
                [
                  { id: 'weekly', label: 'Weekly Plan' },
                  { id: 'goals', label: 'Goals' },
                  { id: 'focus', label: 'Daily Focus' },
                ] as const
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`px-3 py-1.5 font-mono text-xs font-medium whitespace-nowrap transition-colors ${
                    tab === item.id
                      ? 'bg-[#8B5CF6] text-[#F4F7FF]'
                      : 'text-[#A5B1CC] hover:text-[#F4F7FF]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <span className="font-mono text-xs font-semibold text-[#22D3EE] tabular-nums">
              30+ Registered Users
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 border border-[#8B5CF6]/30 bg-[#080B18] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 shrink-0 text-[#8B5CF6]" aria-hidden="true" />
              <span className="font-mono text-xs text-[#F4F7FF]/90">
                AI-Assisted Productivity · Nov 2026 Launch
              </span>
            </div>
            <svg viewBox="0 0 110 20" className="hidden h-5 w-28 sm:block" aria-hidden="true">
              <motion.line
                x1="4"
                y1="10"
                x2="104"
                y2="10"
                stroke="#8B5CF6"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -16] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
              />
              <circle cx="8" cy="10" r="3" fill="#2563EB" />
              <circle cx="55" cy="10" r="3" fill="#22D3EE" />
              <circle cx="102" cy="10" r="3" fill="#8B5CF6" />
            </svg>
          </div>

          <div className="mt-4 space-y-2.5">
            {tasks.map((task) => (
              <button
                key={task.id}
                type="button"
                onClick={() => toggleTask(task.id)}
                className="flex w-full items-center justify-between border border-[#F4F7FF]/12 bg-[#080B18] px-4 py-3 text-left transition-colors hover:border-[#8B5CF6]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-5 w-5 items-center justify-center border ${
                      task.done
                        ? 'border-[#22D3EE] bg-[#22D3EE] text-[#080B18]'
                        : 'border-[#A5B1CC]/40 bg-transparent'
                    }`}
                  >
                    {task.done && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      task.done ? 'line-through text-[#A5B1CC]/60' : 'text-[#F4F7FF]'
                    }`}
                  >
                    {task.label}
                  </span>
                </div>
                <span className="hidden font-mono text-[11px] text-[#A5B1CC] sm:inline">
                  {task.area}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[#F4F7FF]/12 pt-4 font-mono text-xs text-[#A5B1CC]">
          <span>
            Active View:{' '}
            <strong className="text-[#F4F7FF]">
              {tab === 'weekly'
                ? 'Weekly Planning'
                : tab === 'goals'
                  ? 'Goal Management'
                  : 'Daily Focus'}
            </strong>
          </span>
          <span className="text-[#22D3EE]">Click tasks to test</span>
        </div>
      </div>
    </div>
  );
}

/* 03 — FISCALPULSE + CASH WATER FLOW: Combined Integrated Public-Fiscal Platform Visual */
function FiscalSuiteVisual({ url }: { url: string }) {
  const prefersReducedMotion = useReducedMotion();
  const [scenario, setScenario] = useState<'low' | 'expected' | 'high'>('expected');
  const [strategy, setStrategy] = useState<0 | 1 | 2>(0);

  const pathMap = {
    low: 'M 18 118 C 70 112, 130 104, 185 98 C 235 92, 275 88, 320 82',
    expected: 'M 18 118 C 70 104, 130 82, 185 68 C 235 58, 275 44, 320 32',
    high: 'M 18 118 C 70 92, 130 62, 185 44 C 235 30, 275 20, 320 12',
  };

  const strategies = [
    { name: 'Allocation Strategy A', funded: 'Core Obligations Funded', alert: 'Normal Threshold' },
    { name: 'Allocation Strategy B', funded: 'Essential + Capital Split', alert: 'Watch Threshold' },
    { name: 'Allocation Strategy C', funded: 'Deferred Queue Prioritised', alert: 'Shock Alert Active' },
  ];

  return (
    <div className="flex h-full flex-col border border-[#22D3EE]/30 bg-[#111A35]">
      <PreviewFrameChrome
        domain="fiscal-pulse-and-cash-flow-em76.vercel.app"
        label="Open Integrated Platform"
        url={url}
        accentColor="#22D3EE"
      />

      <div className="grid flex-1 grid-cols-1 divide-y divide-[#F4F7FF]/12 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        {/* Left: FiscalPulse Revenue Forecasting */}
        <div className="flex flex-col justify-between p-5 sm:p-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-semibold text-[#22D3EE]">
                01 · FiscalPulse
              </span>
              <div className="flex items-center gap-1 border border-[#F4F7FF]/12 bg-[#080B18] p-1">
                {(['low', 'expected', 'high'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setScenario(mode)}
                    className={`px-2 py-1 font-mono text-[10px] capitalize transition-colors ${
                      scenario === mode
                        ? 'bg-[#22D3EE] font-semibold text-[#080B18]'
                        : 'text-[#A5B1CC] hover:text-[#F4F7FF]'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-2 text-xs text-[#A5B1CC]">
              Nigerian Government Revenue Forecasting · Deterministic &amp; Shock Simulation
            </p>
          </div>

          <div className="my-4 border border-[#F4F7FF]/12 bg-[#080B18] p-3">
            <svg viewBox="0 0 340 132" className="h-32 w-full" aria-label="FiscalPulse revenue scenario model">
              <defs>
                <linearGradient id="fpSuiteGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              {[28, 60, 92, 122].map((y) => (
                <line key={y} x1="18" y1={y} x2="320" y2={y} stroke="#F4F7FF" strokeOpacity="0.08" strokeWidth="1" />
              ))}
              <motion.path
                d={pathMap[scenario]}
                fill="none"
                stroke="url(#fpSuiteGrad)"
                strokeWidth="2.5"
                initial={prefersReducedMotion ? false : { pathLength: 0.4 }}
                animate={{ d: pathMap[scenario], pathLength: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <path
                d={pathMap.expected}
                fill="none"
                stroke="#F4F7FF"
                strokeOpacity="0.2"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between font-mono text-[11px] text-[#A5B1CC]">
            <span>Scenario: <strong className="capitalize text-[#F4F7FF]">{scenario}</strong></span>
            <span className="text-[#22D3EE]">Feeds Cash Water Flow →</span>
          </div>
        </div>

        {/* Right: Cash Water Flow Expenditure Prioritisation */}
        <div className="flex flex-col justify-between p-5 sm:p-6">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-semibold text-[#8B5CF6]">
                02 · Cash Water Flow
              </span>
              <span className="font-mono text-[10px] text-[#A5B1CC]">
                3 Allocation Strategies
              </span>
            </div>
            <p className="mt-2 text-xs text-[#A5B1CC]">
              Prioritises public expenditure, funded vs. deferred obligations, and threshold alerts.
            </p>
          </div>

          <div className="my-4 space-y-2">
            {strategies.map((item, idx) => {
              const active = strategy === idx;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setStrategy(idx as 0 | 1 | 2)}
                  className={`flex w-full items-center justify-between border px-3 py-2.5 text-left transition-colors ${
                    active
                      ? 'border-[#2563EB] bg-[#2563EB] text-[#F4F7FF]'
                      : 'border-[#F4F7FF]/12 bg-[#080B18] text-[#F4F7FF] hover:border-[#22D3EE]/50'
                  }`}
                >
                  <div>
                    <div className="font-mono text-xs font-semibold">{item.name}</div>
                    <div className="text-[11px] opacity-80">{item.funded}</div>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] opacity-90">
                    {idx === 2 && <AlertTriangle className="h-3 w-3" aria-hidden="true" />}
                    {item.alert}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="font-mono text-[11px] text-[#A5B1CC]">
            Build4MDA — Semi-Finalist Integrated Suite
          </div>
        </div>
      </div>
    </div>
  );
}

/* 04 — WUERLD BOOST: Live SMM Panel */
function WuerldBoostVisual({ url }: { url: string }) {
  const [category, setCategory] = useState<'growth' | 'engagement' | 'campaigns'>('growth');

  const panelCopy = {
    growth: {
      heading: 'Social Media Growth Services',
      detail: 'Dedicated SMM panel interface for accessing social media growth and marketing services.',
      action: 'Visit Wuerld Boost',
    },
    engagement: {
      heading: 'Digital Platform Access',
      detail: 'Structured service access for digital creators and social media marketing workflows.',
      action: 'Explore SMM Panel',
    },
    campaigns: {
      heading: 'Marketing Service Panel',
      detail: 'Live social media marketing panel operating at wuerldboost.online.',
      action: 'Open Platform',
    },
  };

  return (
    <div className="flex h-full flex-col border border-[#F4F7FF]/15 bg-[#111A35]">
      <PreviewFrameChrome
        domain="wuerldboost.online"
        label="Visit Panel"
        url={url}
        accentColor="#2563EB"
      />

      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'growth', label: 'SMM Services' },
              { id: 'engagement', label: 'Growth Panel' },
              { id: 'campaigns', label: 'Live Access' },
            ] as const
          ).map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setCategory(btn.id)}
              className={`border px-3 py-1.5 font-mono text-xs transition-colors ${
                category === btn.id
                  ? 'border-[#2563EB] bg-[#2563EB] font-semibold text-[#F4F7FF]'
                  : 'border-[#F4F7FF]/15 bg-[#080B18] text-[#A5B1CC] hover:border-[#22D3EE] hover:text-[#F4F7FF]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="my-6 border border-[#F4F7FF]/12 bg-[#080B18] p-5">
          <div className="font-mono text-xs text-[#22D3EE]">Social Media Marketing (SMM) Panel</div>
          <h4 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[#F4F7FF]">
            {panelCopy[category].heading}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-[#A5B1CC]">
            {panelCopy[category].detail}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-[#F4F7FF]/12 pt-3 font-mono text-xs">
          <span className="text-[#A5B1CC]">Digital Platform · Live</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#22D3EE] hover:underline"
          >
            <span>{panelCopy[category].action}</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* 05 — AIVORA: Honest AI Tool In Active Development (no invented features) */
function AivoraVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex flex-col border border-[#8B5CF6]/35 bg-[#111A35]">
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#2563EB] via-[#8B5CF6] to-[#22D3EE]"
      />
      <PreviewFrameChrome
        domain="AIVORA · Active Build"
        label="In Development"
        accentColor="#8B5CF6"
      />
      <div className="bg-tech-grid flex items-center justify-center bg-[#080B18] p-6">
        <svg viewBox="0 0 240 130" className="h-32 w-full max-w-[240px]" aria-hidden="true">
          <defs>
            <linearGradient id="aivoraGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
          <motion.polygon
            points="120,14 166,40 166,90 120,116 74,90 74,40"
            fill="none"
            stroke="url(#aivoraGrad)"
            strokeWidth="1.5"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '120px 65px' }}
          />
          <motion.circle
            cx="120"
            cy="65"
            r="28"
            fill="none"
            stroke="#22D3EE"
            strokeOpacity="0.6"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '120px 65px' }}
          />
          <circle cx="120" cy="65" r="8" fill="url(#aivoraGrad)" />
        </svg>
      </div>
    </div>
  );
}

/* 06 — YAPO: OPay Competition Project (Proposed Dollar Account in OPay) */
function YapoVisual() {
  return (
    <div className="flex flex-col border border-[#F4F7FF]/15 bg-[#111A35]">
      <PreviewFrameChrome
        domain="OPay Hackathon"
        label="Hackathon Project"
        accentColor="#22D3EE"
      />
      <div className="bg-tech-grid flex items-center justify-between bg-[#080B18] p-6">
        <div>
          <div className="font-mono text-[11px] text-[#22D3EE]">OPay Hackathon · YAPO</div>
          <div className="mt-1 font-display text-2xl font-extrabold tracking-tight text-[#F4F7FF]">
            USD Account Proposal
          </div>
          <div className="mt-1 font-mono text-xs text-[#A5B1CC]">
            Proposed dollar account in OPay
          </div>
        </div>
        <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden="true">
          <rect x="4" y="4" width="56" height="56" fill="none" stroke="#22D3EE" strokeOpacity="0.45" strokeWidth="1.5" />
          <polygon points="32,14 50,32 32,50 14,32" fill="none" stroke="#2563EB" strokeWidth="2" />
          <text
            x="32"
            y="37"
            textAnchor="middle"
            fill="#22D3EE"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="14"
            fontWeight="700"
          >
            $
          </text>
        </svg>
      </div>
    </div>
  );
}

/* 07 — PAYLENS: PayPal Hackathon Project */
function PayLensVisual() {
  return (
    <div className="flex flex-col border border-[#F4F7FF]/15 bg-[#111A35]">
      <PreviewFrameChrome
        domain="PayPal Hackathon"
        label="Fintech · AI"
        accentColor="#2563EB"
      />
      <div className="bg-tech-grid flex items-center justify-between bg-[#080B18] p-6">
        <div>
          <div className="font-mono text-[11px] text-[#8B5CF6]">PayPal Hackathon</div>
          <div className="mt-1 font-display text-2xl font-extrabold tracking-tight text-[#F4F7FF]">
            PayLens
          </div>
          <div className="mt-1 text-xs italic text-[#22D3EE]">
            &ldquo;Recovery starts with clarity.&rdquo;
          </div>
        </div>
        <svg viewBox="0 0 64 64" className="h-14 w-14 shrink-0" aria-hidden="true">
          <circle cx="32" cy="32" r="24" fill="none" stroke="#2563EB" strokeOpacity="0.55" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="14" fill="none" stroke="#8B5CF6" strokeWidth="1.8" />
          <line x1="42" y1="42" x2="54" y2="54" stroke="#22D3EE" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}
