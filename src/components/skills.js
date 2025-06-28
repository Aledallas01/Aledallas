export function createSkills() {
  return `
    <section id="skills" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="section-title animate-on-scroll">
          <h2>Le Mie Competenze</h2>
          <p>Tecnologie e strumenti che utilizzo quotidianamente</p>
        </div>
        
        <div class="grid grid-3 gap-8">
          <div class="card animate-on-scroll">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
            <p class="text-gray-600 mb-6">Creazione di interfacce utente moderne e responsive</p>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">React.js</span>
                <span class="text-sm text-gray-500">90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Vue.js</span>
                <span class="text-sm text-gray-500">85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">TypeScript</span>
                <span class="text-sm text-gray-500">80%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-purple-600 h-2 rounded-full" style="width: 80%"></div>
              </div>
            </div>
          </div>
          
          <div class="card animate-on-scroll">
            <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
            <p class="text-gray-600 mb-6">Sviluppo di API robuste e scalabili</p>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Node.js</span>
                <span class="text-sm text-gray-500">88%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 88%"></div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Python</span>
                <span class="text-sm text-gray-500">82%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-yellow-600 h-2 rounded-full" style="width: 82%"></div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">PostgreSQL</span>
                <span class="text-sm text-gray-500">75%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
              </div>
            </div>
          </div>
          
          <div class="card animate-on-scroll">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Tools & DevOps</h3>
            <p class="text-gray-600 mb-6">Strumenti per sviluppo e deployment</p>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Git & GitHub</span>
                <span class="text-sm text-gray-500">92%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-gray-800 h-2 rounded-full" style="width: 92%"></div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Docker</span>
                <span class="text-sm text-gray-500">78%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" style="width: 78%"></div>
              </div>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">AWS</span>
                <span class="text-sm text-gray-500">70%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-orange-500 h-2 rounded-full" style="width: 70%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center animate-on-scroll">
          <h3 class="text-2xl font-semibold text-gray-900 mb-8">Altre Competenze</h3>
          <div class="flex flex-wrap justify-center gap-4">
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">Responsive Design</span>
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">REST APIs</span>
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">GraphQL</span>
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">MongoDB</span>
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">Redis</span>
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">Jest Testing</span>
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">Webpack</span>
            <span class="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md border">Sass/SCSS</span>
          </div>
        </div>
      </div>
    </section>
  `;
}