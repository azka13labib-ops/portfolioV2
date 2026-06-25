export interface Project {
  id: string
  title: string
  description: string
  tags: string[]       // tech stack
  category: 'web' | 'mobile' | 'fullstack' | 'other'
  url?: string
  github?: string
  image?: string
  images?: string[]              // For projects with multiple screenshots (e.g. 3-screen mobile showcase)
  mockup?: 'mobile' | 'desktop'  // 'mobile' shows phone frame overlay
}

export interface Skill {
  name: string
  icon?: string        // path ke icon di /public/assets/icons/
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools'
}

export interface JourneyItem {
  year: string
  title: string
  description: string
  label?: string       // misal "First Project", "Internship", dll
}

export interface Stat {
  label: string
  value: number
  suffix?: string      // misal "+", "k", "%"
}
