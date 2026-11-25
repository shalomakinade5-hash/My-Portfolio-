import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'project' | 'button' | 'link'>('default');
  const [cursorLabel, setCursorLabel] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 420, mass: 0.4 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 420, mass: 0.4 });

  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion) return;

    const pointerFine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateEnabled = () => {
      const active = pointerFine.matches;
      setEnabled(active);
      if (active) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    updateEnabled();
    pointerFine.addEventListener('change', updateEnabled);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = (e.target as HTMLElement | null)?.closest('[data-cursor], a, button');
      if (!target) {
        setCursorVariant('default');
        setCursorLabel('');
        return;
      }

      const customType = target.getAttribute('data-cursor');
      const customText = target.getAttribute('data-cursor-label') || '';

      if (customType === 'project') {
        setCursorVariant('project');
        setCursorLabel(customText || 'VIEW');
      } else if (customType === 'button' || target.tagName === 'BUTTON') {
        setCursorVariant('button');
        setCursorLabel(customText);
      } else {
        setCursorVariant('link');
        setCursorLabel(customText || '↗');
      }
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      pointerFine.removeEventListener('change', updateEnabled);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [mouseX, mouseY, prefersReducedMotion, visible]);

  if (!enabled || prefersReducedMotion) return null;

  const isExpanded = cursorVariant === 'project' || cursorVariant === 'link';
  const size = cursorVariant === 'project' ? 68 : cursorVariant === 'link' ? 40 : cursorVariant === 'button' ? 30 : 12;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center rounded-full border border-[#F4F7FF]/25"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: visible ? 1 : 0,
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor:
          cursorVariant === 'project'
            ? '#22D3EE'
            : cursorVariant === 'button'
              ? 'rgba(139, 92, 246, 0.9)'
              : cursorVariant === 'link'
                ? 'rgba(37, 99, 235, 0.92)'
                : '#22D3EE',
        scale: cursorVariant === 'button' ? 1.05 : 1,
      }}
      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
    >
      {isExpanded && cursorLabel && (
        <span
          className={`font-mono text-[10px] font-semibold tracking-wider uppercase select-none ${
            cursorVariant === 'project' ? 'text-[#080B18]' : 'text-[#F4F7FF]'
          }`}
        >
          {cursorLabel}
        </span>
      )}
    </motion.div>
  );
}
