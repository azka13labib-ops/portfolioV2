import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className='bg-mc-void text-mc-white min-h-screen'>
      <HeroSection />
      
      <div className="relative z-0">
        {/* Ambient gradient backdrop — sits behind all sections from About onward */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(
              to bottom,
              #0d0500 0%,      /* About — dark brown */
              #000000 25%,     /* Fade to black */
              #000000 100%     /* Bedrock — pure black */
            )`,
          }}
        />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <StatsSection />
        <ContactSection />
      </div>
    </main>
  )
}
