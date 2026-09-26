import '@/i18n'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function App() {
  return (
    <ThemeProvider>
      <div id="top" className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
