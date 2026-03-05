import { Card, CardContent } from '../components/ui/card';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María García',
      role: 'Estudiante de Nivel Intermedio',
      program: 'Step by Step Adultos',
      content: '¡Increíble academia! Los profesores son muy pacientes y las clases son dinámicas. He mejorado mucho mi inglés en solo 3 meses. Ahora me siento más confiada en conversaciones profesionales.',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Estudiante de Nivel Avanzado',
      program: 'Preparación TOEFL',
      content: 'Step By Step me ayudó a aprobar mi examen TOEFL con excelente puntuación. El método de enseñanza es muy efectivo y los profesores realmente se preocupan por tus resultados.',
      rating: 5,
    },
    {
      name: 'Ana López',
      role: 'Estudiante de Nivel Básico',
      program: 'Step by Step Adultos',
      content: 'Nunca pensé que aprender inglés podría ser tan divertido. Las clases son pequeñas y todos reciben atención personalizada. ¡Totalmente recomendado!',
      rating: 5,
    },
    {
      name: 'Sofía Martínez (Madre)',
      role: 'Madre de estudiante Kids',
      program: 'Step by Step Kids',
      content: 'Mi hijo de 9 años está encantado con las clases. Ha mejorado muchísimo y lo mejor es que no lo ve como una obligación sino como algo divertido. Los profesores son excelentes.',
      rating: 5,
    },
    {
      name: 'Javier Hernández',
      role: 'Estudiante Junior',
      program: 'Step by Step Junior',
      content: 'Las clases me han ayudado mucho con mi inglés del colegio. Ahora saco mejores notas y me siento más seguro cuando tengo que hablar en clase. El profesor es muy buena onda.',
      rating: 5,
    },
    {
      name: 'Patricia Ruiz',
      role: 'Estudiante Profesional',
      program: 'Inglés de Negocios',
      content: 'Gracias a Step by Step conseguí un trabajo como asistente virtual bilingüe. La conexión con oportunidades laborales es real y los profesores te preparan muy bien.',
      rating: 5,
    },
    {
      name: 'Roberto Sánchez',
      role: 'Estudiante Semi-Personalizado',
      program: 'Step by Step Adultos',
      content: 'La modalidad semi-personalizada es perfecta para mí. Tarifas accesibles sin sacrificar la calidad de la enseñanza. Aprendo mucho y además conozco gente interesante.',
      rating: 5,
    },
    {
      name: 'Lucia Torres',
      role: 'Estudiante Virtual',
      program: 'Clases por Zoom',
      content: 'Las clases virtuales son muy cómodas y no pierdo tiempo en desplazamientos. La calidad es igual que presencial. Perfecto para mi ritmo de vida.',
      rating: 5,
    },
    {
      name: 'Fernando Castro',
      role: 'Estudiante Avanzado',
      program: 'Certificación Cambridge',
      content: 'Aprobé mi certificación Cambridge con distinción. La preparación fue exhaustiva y los simulacros me dieron la confianza que necesitaba. Muy agradecido.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Testimonios</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Historias de éxito de quienes ya dieron el paso hacia el dominio del inglés
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-primary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Calificación promedio</p>
            </div>
            <div>
              <div className="text-4xl text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Estudiantes satisfechos</p>
            </div>
            <div>
              <div className="text-4xl text-accent mb-2">95%</div>
              <p className="text-muted-foreground">Nos recomendarían</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="bg-primary/5 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="text-4xl text-accent mb-4">"</div>
                    <p className="mb-4 italic text-muted-foreground">{testimonial.content}</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-secondary mt-1">{testimonial.program}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Video Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎥</div>
                    <p className="text-muted-foreground">Testimonio de María</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  "De cero a conversaciones fluidas en 6 meses"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎥</div>
                    <p className="text-muted-foreground">Testimonio de Carlos</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  "Conseguí trabajo bilingüe gracias a Step by Step"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">¿Quieres ser el próximo testimonio de éxito?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a Step by Step y transforma tu futuro con el inglés
          </p>
          <a href="/contacto">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors">
              Comienza Ahora
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
