/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { OpeningSequence } from './components/OpeningSequence';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { RecognitionSection } from './components/RecognitionSection';
import { SkillsAndCapabilities } from './components/SkillsAndCapabilities';
import { JourneySection } from './components/JourneySection';
import { ContactAndFooter } from './components/ContactAndFooter';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#080B18] text-[#F4F7FF]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#22D3EE] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-[#080B18]"
        >
          Skip to main content
        </a>

        <CustomCursor />
        <OpeningSequence onComplete={handleIntroComplete} />
        <Navbar />

        <main id="main-content">
          <HeroSection introComplete={introComplete} />
          <AboutSection />
          <ProjectsSection />
          <RecognitionSection />
          <SkillsAndCapabilities />
          <JourneySection />
          <ContactAndFooter />
        </main>
      </div>
    </MotionConfig>
  );
}
