import './style.css'
import { createNavigation } from './components/navigation.js'
import { createHero } from './components/hero.js'
import { createAbout } from './components/about.js'
import { createSkills } from './components/skills.js'
import { createProjects } from './components/projects.js'
import { createContact } from './components/contact.js'
import { initializeScrollEffects } from './utils/scroll.js'

document.querySelector('#app').innerHTML = `
  ${createNavigation()}
  <main>
    ${createHero()}
    ${createAbout()}
    ${createSkills()}
    ${createProjects()}
    ${createContact()}
  </main>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-6 text-center">
      <p>&copy; 2025 Il Mio Portfolio. Tutti i diritti riservati.</p>
    </div>
  </footer>
`

// Initialize scroll effects and smooth scrolling
initializeScrollEffects()