import { Card, CardContent } from '../components/ui/card';
import { Target, Eye, Heart, TrendingUp, Shield, Handshake, Award, CheckCircle } from 'lucide-react';
import { AnimatedImage } from '../components/AnimatedImage';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      title: 'Compromiso con el aprendizaje',
      description: 'Dedicados al éxito de cada estudiante con seguimiento personalizado.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'Accesibilidad',
      description: 'Programas flexibles y tarifas adaptadas para hacer el inglés accesible a todos.',
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: 'Excelencia Académica',
      description: 'Docentes altamente capacitados y metodología MUR de comprobada efectividad.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Orientación a resultados',
      description: 'Objetivos claros y medibles: 80% mejora su nivel en 3-4 meses.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Oportunidad y progreso',
      description: 'Convertimos el inglés en herramienta de crecimiento académico y profesional.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Cercanía y confianza',
      description: 'Relación cercana con estudiantes y familias, construyendo confianza mutua.',
      icon: <Handshake className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Sobre Nosotros</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Conoce nuestra historia, valores y el método que nos hace únicos
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mision-vision" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Target className="w-8 h-8" />
                    </div>
                    <h2>Nuestra Misión</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Brindar las herramientas y conocimientos, a las personas con las cuales puedan explotar sus talentos y desarrollar su capacidad personal e intelectual mediante el aprendizaje en distintos campos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                      <Eye className="w-8 h-8" />
                    </div>
                    <h2>Nuestra Visión</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Para 2030, transformaremos la vida de quienes completen nuestros cursos mediante metodologías innovadoras y conceptos que fortalecerán su desarrollo académico, profesional y personal, elevando su calidad de vida.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valores" className="py-16 bg-gradient-to-br from-secondary/15 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-4">Nuestros Valores</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Los principios que guían nuestra forma de enseñar y acompañar a cada estudiante
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="bg-accent/10 text-accent w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1759560270562-468e8ba866e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwYWNoaWV2ZW1lbnQlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NzAyMTkwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Success achievement"
                className="w-full h-full object-cover"
                animationType="scale"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-6">Metodología MUR</h2>
              <p className="text-muted-foreground mb-6">
                Nuestra metodología MUR (Metodología Única y Resultados) es un sistema probado que garantiza un proceso de aprendizaje efectivo y adaptado a cada perfil. Combina:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Personalización Total</h4>
                    <p className="text-muted-foreground text-sm">Cada clase se adapta al ritmo y necesidades del estudiante, considerando su edad, nivel y objetivos específicos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Enfoque Comunicativo</h4>
                    <p className="text-muted-foreground text-sm">Priorizamos la práctica real del idioma desde el primer día, desarrollando habilidades para situaciones cotidianas y profesionales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Seguimiento Continuo</h4>
                    <p className="text-muted-foreground text-sm">Evaluaciones periódicas para medir el progreso real y ajustar la estrategia de aprendizaje según sea necesario.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Resultados Medibles</h4>
                    <p className="text-muted-foreground text-sm">Objetivos claros y alcanzables en plazos de 3 a 4 meses, con métricas específicas de mejora.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">¿Por qué Step by Step?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">Formación Personalizada</h3>
                <p className="text-muted-foreground">
                  Nuestro modelo combina clases presenciales a domicilio y sesiones virtuales por Zoom, ajustadas al ritmo, edad y necesidades de cada estudiante. Tú eliges cómo, cuándo y dónde aprender.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">Orientación a Resultados</h3>
                <p className="text-muted-foreground">
                  No solo enseñamos inglés, te preparamos para certificaciones internacionales y te conectamos con oportunidades laborales reales a través de nuestras alianzas estratégicas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">Profesores Altamente Capacitados</h3>
                <p className="text-muted-foreground">
                  Contamos con docentes certificados, con años de experiencia y apasionados por la enseñanza. Cada profesor está comprometido con el éxito de sus estudiantes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-primary">Flexibilidad y Accesibilidad</h3>
                <p className="text-muted-foreground">
                  Ofrecemos modalidades semi-personalizadas con tarifas más accesibles, sin sacrificar la calidad de la enseñanza. El inglés al alcance de todos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}