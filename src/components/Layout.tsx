import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import logo from 'figma:asset/b5e1047691a6d7324ea44e4f041e61a6df1a3f27.png';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white text-foreground sticky top-0 z-50 shadow-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Step by Step" className="h-16" />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <Link 
                to="/" 
                className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : ''}`}
              >
                Inicio
              </Link>
              
              <Link 
                to="/nosotros" 
                className={`hover:text-primary transition-colors ${isActive('/nosotros') ? 'text-primary' : ''}`}
              >
                Nosotros
              </Link>

              <Link 
                to="/programas" 
                className={`hover:text-primary transition-colors ${isActive('/programas') ? 'text-primary' : ''}`}
              >
                Programas
              </Link>

              <Link 
                to="/profesores" 
                className={`hover:text-primary transition-colors ${isActive('/profesores') ? 'text-primary' : ''}`}
              >
                Profesores
              </Link>

              <Link 
                to="/testimonios" 
                className={`hover:text-primary transition-colors ${isActive('/testimonios') ? 'text-primary' : ''}`}
              >
                Testimonios
              </Link>

              <Link 
                to="/contacto" 
                className={`hover:text-primary transition-colors ${isActive('/contacto') ? 'text-primary' : ''}`}
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <Link 
                to="/" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <Link 
                to="/nosotros" 
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>

              <Link 
                to="/programas" 
                className="hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programas
              </Link>

              <Link 
                to="/profesores" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Profesores
              </Link>

              <Link 
                to="/testimonios" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>

              <Link 
                to="/contacto" 
                className="hover:text-primary transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="flex flex-col items-start">
              <img src={logo} alt="Step by Step" className="h-16 mb-4 brightness-0 invert" />
              <p className="text-sm opacity-90">
                Transformando vidas a través del aprendizaje del inglés con metodología innovadora y personalizada.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg mb-4">Enlaces Rápidos</h3>
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Inicio
                </Link>
                <Link to="/nosotros" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Nosotros
                </Link>
                <Link to="/programas" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Programas
                </Link>
                <Link to="/profesores" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Profesores
                </Link>
                <Link to="/testimonios" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Testimonios
                </Link>
                <Link to="/contacto" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contacto
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg mb-4">Síguenos</h3>
              <p className="text-sm opacity-90 mb-4">
                Conéctate con nosotros en nuestras redes sociales
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-sm opacity-90">
              © 2026 Step By Step. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}