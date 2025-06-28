export function createNavigation() {
  return `
    <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="#home" class="text-xl font-bold text-gray-900">Portfolio</a>
          </div>
          
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#home" class="nav-link text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" class="nav-link text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Chi Sono</a>
              <a href="#skills" class="nav-link text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Competenze</a>
              <a href="#projects" class="nav-link text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Progetti</a>
              <a href="#contact" class="nav-link text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contatti</a>
            </div>
          </div>
          
          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <div id="mobile-menu" class="md:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">Home</a>
            <a href="#about" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Chi Sono</a>
            <a href="#skills" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Competenze</a>
            <a href="#projects" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Progetti</a>
            <a href="#contact" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">Contatti</a>
          </div>
        </div>
      </div>
    </nav>
    
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
      });
    </script>
  `;
}