export function createHero() {
  return `
    <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div class="container mx-auto px-6">
        <div class="text-center animate-on-scroll">
          <div class="mb-8">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                 alt="Foto profilo" 
                 class="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white">
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ciao, sono <span class="text-blue-600">Marco</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sviluppatore Full Stack appassionato di tecnologie moderne e design innovativo
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" class="btn btn-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Vedi i Progetti
            </a>
            <a href="#contact" class="btn btn-secondary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contattami
            </a>
          </div>
          
          <div class="mt-12">
            <a href="#about" class="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <span class="mr-2">Scopri di più</span>
              <svg class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}