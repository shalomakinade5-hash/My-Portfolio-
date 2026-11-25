import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react';
import { PERSONAL } from '../data/portfolio';

export function ContactAndFooter() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [topic, setTopic] = useState('Product Collaboration');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback: mailto link remains directly clickable
    }
  };

  const handleComposeMailto = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${topic}${senderName.trim() ? ` — from ${senderName.trim()}` : ''}`
    );
    const body = encodeURIComponent(
      `${message.trim() || 'Hi Shalom, I would like to connect regarding a project.'}\n\n${
        senderName.trim() ? `— ${senderName.trim()}` : ''
      }`
    );
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* SECTION 8: CONTACT */}
      <section
        id="contact"
        className="border-b border-[#F4F7FF]/12 bg-[#111A35] py-20 text-[#F4F7FF] sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Headline + Direct Functional Contact Channels */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <span className="font-mono text-xs tracking-wider text-[#22D3EE] uppercase">
                  07 · Contact
                </span>
                <motion.h2
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-3 font-display text-4xl leading-[0.98] font-extrabold tracking-tight text-[#F4F7FF] text-balance sm:text-6xl"
                >
                  Have something worth building?
                </motion.h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#A5B1CC]">
                  I&apos;m always interested in meaningful projects, collaborations, and opportunities to build useful things with great people.
                </p>
              </div>

              {/* Direct Links */}
              <div className="mt-10 divide-y divide-[#F4F7FF]/12 border-t border-b border-[#F4F7FF]/12">
                {/* Email Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-5">
                  <div>
                    <div className="font-mono text-xs text-[#A5B1CC]">Email</div>
                    <a
                      href={`mailto:${PERSONAL.email}`}
                      data-cursor="link"
                      data-cursor-label="MAIL"
                      className="mt-1 inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight text-[#F4F7FF] transition-colors hover:text-[#22D3EE] sm:text-2xl"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-[#22D3EE]" aria-hidden="true" />
                      <span className="break-all">{PERSONAL.email}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-[40px] items-center gap-1.5 border border-[#F4F7FF]/20 bg-[#080B18] px-3.5 py-2 font-mono text-xs font-medium text-[#F4F7FF] transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#22D3EE]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone Row */}
                <div className="flex items-center justify-between gap-4 py-5">
                  <div>
                    <div className="font-mono text-xs text-[#A5B1CC]">Phone</div>
                    <a
                      href={PERSONAL.phoneHref}
                      data-cursor="link"
                      data-cursor-label="CALL"
                      className="mt-1 inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight text-[#F4F7FF] tabular-nums transition-colors hover:text-[#22D3EE] sm:text-2xl"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-[#8B5CF6]" aria-hidden="true" />
                      <span>{PERSONAL.phoneDisplay}</span>
                    </a>
                  </div>
                </div>

                {/* GitHub & LinkedIn Row */}
                <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2">
                  <a
                    href={PERSONAL.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    data-cursor-label="GH ↗"
                    className="group flex items-center justify-between border border-[#F4F7FF]/15 bg-[#080B18] px-5 py-4 transition-colors hover:border-[#22D3EE] hover:text-[#22D3EE]"
                  >
                    <div>
                      <div className="font-mono text-xs text-[#A5B1CC]">GitHub</div>
                      <div className="mt-0.5 font-display text-lg font-bold text-[#F4F7FF] group-hover:text-[#22D3EE]">
                        shalomakinade5-hash
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 text-[#A5B1CC] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#22D3EE]"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={PERSONAL.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    data-cursor-label="IN ↗"
                    className="group flex items-center justify-between border border-[#F4F7FF]/15 bg-[#080B18] px-5 py-4 transition-colors hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
                  >
                    <div>
                      <div className="font-mono text-xs text-[#A5B1CC]">LinkedIn</div>
                      <div className="mt-0.5 font-display text-lg font-bold text-[#F4F7FF] group-hover:text-[#8B5CF6]">
                        Shalom Akinade
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 text-[#A5B1CC] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#8B5CF6]"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Honest Mailto Brief Composer */}
            <div className="border border-[#2563EB]/35 bg-[#080B18] p-6 text-[#F4F7FF] sm:p-8 lg:col-span-5">
              <div className="border-b border-[#F4F7FF]/12 pb-4">
                <div className="font-mono text-xs text-[#22D3EE]">Direct Email Composer</div>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                  Start a conversation
                </h3>
                <p className="mt-1 text-xs text-[#A5B1CC]">
                  Prepares a pre-filled draft directly in your email client addressed to {PERSONAL.email}.
                </p>
              </div>

              <form onSubmit={handleComposeMailto} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs text-[#A5B1CC]">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="mt-2 w-full border border-[#F4F7FF]/20 bg-[#111A35] px-4 py-3 text-sm text-[#F4F7FF] placeholder:text-[#A5B1CC]/45 focus:border-[#22D3EE] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block font-mono text-xs text-[#A5B1CC]">
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-2 w-full border border-[#F4F7FF]/20 bg-[#111A35] px-4 py-3 text-sm text-[#F4F7FF] focus:border-[#22D3EE] focus:outline-none"
                  >
                    <option value="Product Collaboration">Product Collaboration</option>
                    <option value="Full-Stack Development">Full-Stack Development</option>
                    <option value="Frontend / Motion Engineering">Frontend / Motion Engineering</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs text-[#A5B1CC]">
                    Brief Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a bit about what you're building..."
                    className="mt-2 w-full border border-[#F4F7FF]/20 bg-[#111A35] px-4 py-3 text-sm text-[#F4F7FF] placeholder:text-[#A5B1CC]/45 focus:border-[#22D3EE] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="button"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#2563EB] px-6 py-3 font-display text-sm font-bold text-[#F4F7FF] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_0_24px_rgba(37,99,235,0.45)]"
                >
                  <span>Open in Email Client</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="bg-[#080B18] py-14 text-[#F4F7FF] sm:py-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12"
        >
          <div className="flex flex-col justify-between gap-8 border-b border-[#F4F7FF]/12 pb-10 md:flex-row md:items-end">
            <div>
              <div className="font-display text-2xl font-extrabold tracking-tight text-[#F4F7FF] sm:text-3xl">
                {PERSONAL.fullName}
              </div>
              <div className="mt-2 font-mono text-xs text-[#22D3EE]">
                Full-Stack Developer | Product Builder
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              <a
                href={PERSONAL.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#A5B1CC] transition-colors hover:text-[#22D3EE]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={PERSONAL.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#A5B1CC] transition-colors hover:text-[#22D3EE]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="inline-flex items-center gap-1 text-[#A5B1CC] transition-colors hover:text-[#22D3EE]"
              >
                <span>Email</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 font-mono text-xs text-[#A5B1CC] sm:flex-row sm:items-center">
            <span>
              &copy; {currentYear} {PERSONAL.fullName}. All rights reserved.
            </span>
            <span className="text-[#F4F7FF]/90">
              Built with curiosity. Driven by purpose.
            </span>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
