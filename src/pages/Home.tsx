import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle } from 'lucide-react';
import { AnimatedImage } from '../components/AnimatedImage';
import { CountingAnimation } from '../components/CountingAnimation';
import { motion } from 'motion/react';

export default function Home() {
  const stats = [
    { number: '80%', label: 'Mejora su nivel en 3-4 meses' },
    { number: '50%', label: 'Accede a certificaciones o empleos' },
    { number: '5,000+', label: 'Graduados proyectados para 2030' },
    { number: '40%', label: 'Con certificación o empleo bilingüe' },
  ];

  const benefits = [
    'Grupos reducidos de máximo 4 estudiantes',
    'Profesores certificados y altamente capacitados',
    'Metodología MUR comunicativa y práctica',
    'Materiales didácticos incluidos',
    'Certificado internacional al finalizar',
    'Horarios flexibles mañana y tarde',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <AnimatedImage 
            src="https://images.unsplash.com/photo-1763770446725-1086cbb36d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZW5nbGlzaCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAxNzY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Students learning English"
            className="w-full h-full object-cover"
            animationType="zoom"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
              Aprende Inglés<br />
              <span className="text-accent">Paso a Paso</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Formación personalizada y flexible para niños, jóvenes y adultos. Clases presenciales a domicilio y virtuales por Zoom con la metodología MUR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Inscríbete Ahora
                </Button>
              </Link>
              <Link to="/nosotros">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                  Más Información
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <CountingAnimation 
                  value={stat.number} 
                  duration={2500}
                  className="text-3xl md:text-4xl text-accent mb-2 font-bold"
                />
                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-6">¿Quiénes Somos?</h2>
              <p className="text-muted-foreground mb-4">
                Step by Step es una academia de inglés dedicada a ofrecer formación personalizada, flexible y orientada a resultados, dirigida a niños, jóvenes y adultos entre los 7 y 50 años.
              </p>
              <p className="text-muted-foreground mb-4">
                Nuestro modelo de enseñanza combina clases presenciales a domicilio y sesiones virtuales por Zoom, ajustadas al ritmo, la edad y las necesidades de cada estudiante. Todo esto se desarrolla mediante la metodología MUR, que garantiza un proceso de aprendizaje efectivo y adaptado a cada perfil.
              </p>
              <p className="text-muted-foreground mb-6">
                Nuestro objetivo principal es formar estudiantes competentes en inglés, capaces de certificar sus conocimientos y convertir el idioma en una herramienta de crecimiento académico y profesional.
              </p>
              <Link to="/nosotros">
                <Button className="bg-primary hover:bg-primary/90">
                  Conoce más sobre nosotros
                </Button>
              </Link>
            </motion.div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1563807893528-313039d9761f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdGVhY2hpbmclMjBsYW5ndWFnZSUyMGNsYXNzfGVufDF8fHx8MTc3MDIxODc1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Teacher teaching"
                className="w-full h-full object-cover"
                animationType="slideLeft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">¿Por qué elegir Step By Step?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Descubre las ventajas que nos hacen únicos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gradient-to-br from-accent/10 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Explora nuestros programas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="mb-2">Step by Step Kids</h3>
                <p className="text-muted-foreground mb-4">Para niños de 7 a 12 años</p>
                <Link to="/programas#kids">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">Ver más</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-secondary">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="mb-2">Step by Step Junior</h3>
                <p className="text-muted-foreground mb-4">Para jóvenes de 13 a 17 años</p>
                <Link to="/programas#junior">
                  <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">Ver más</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 text-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="mb-2">Step by Step Adultos</h3>
                <p className="text-muted-foreground mb-4">Para adultos de 18 a 50 años</p>
                <Link to="/programas#adultos">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">Ver más</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">¿Listo para dar el primer paso?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a cientos de estudiantes que ya están transformando su futuro con el inglés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Solicita Información
              </Button>
            </Link>
            <Link to="/programas">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Ver Programas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
