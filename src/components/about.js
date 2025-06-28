export function createAbout() {
  return `
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="section-title animate-on-scroll">
          <h2>Chi Sono</h2>
          <p>Scopri la mia storia e la mia passione per lo sviluppo</p>
        </div>
        
        <div class="grid grid-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="Workspace" 
                 class="rounded-lg shadow-lg w-full h-96 object-cover">
          </div>
          
          <div class="animate-on-scroll">
            <h3 class="text-3xl font-bold text-gray-900 mb-6">La Mia Storia</h3>
            
            <p class="text-lg text-gray-600 mb-6">
              Sono uno sviluppatore full stack con oltre 3 anni di esperienza nella creazione di applicazioni web moderne e scalabili. La mia passione per la tecnologia è iniziata durante gli studi universitari e da allora non ha mai smesso di crescere.
            </p>
            
            <p class="text-lg text-gray-600 mb-6">
              Mi specializzo nello sviluppo di interfacce utente intuitive e nell'architettura di sistemi backend robusti. Amo lavorare con tecnologie all'avanguardia e sono sempre alla ricerca di nuove sfide che mi permettano di crescere professionalmente.
            </p>
            
            <div class="grid grid-2 gap-6 mt-8">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Problem Solving</h4>
                  <p class="text-gray-600">Approccio analitico ai problemi</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Performance</h4>
                  <p class="text-gray-600">Ottimizzazione e velocità</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Team Work</h4>
                  <p class="text-gray-600">Collaborazione efficace</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Continuous Learning</h4>
                  <p class="text-gray-600">Sempre aggiornato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}