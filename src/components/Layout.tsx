import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
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
      <footer className="bg-secondary/10 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Step by Step" className="h-14" />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Step By Step. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}