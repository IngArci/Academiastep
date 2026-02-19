import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Teachers() {
  const teachers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Conversación Avanzada',
      experience: '8 años de experiencia',
      description: 'Especializada en desarrollar fluidez conversacional y preparación para entrevistas de trabajo.',
      image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMTgxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      specialty: 'Inglés de Negocios',
      experience: '10 años de experiencia',
      description: 'Experto en inglés corporativo, presentaciones y comunicación profesional efectiva.',
      image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMTgxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emma Williams',
      specialty: 'Preparación TOEFL',
      experience: '6 años de experiencia',
      description: 'Certificada en preparación de exámenes internacionales con alto índice de aprobación.',
      image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMTgxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Martínez',
      specialty: 'Inglés para Niños',
      experience: '7 años de experiencia',
      description: 'Especializado en metodologías lúdicas y desarrollo de habilidades tempranas.',
      image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMTgxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Laura Thompson',
      specialty: 'Gramática y Escritura',
      experience: '9 años de experiencia',
      description: 'Experta en desarrollo de habilidades de escritura académica y profesional.',
      image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMTgxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Roberto García',
      specialty: 'Inglés para Adolescentes',
      experience: '5 años de experiencia',
      description: 'Conecta con estudiantes jóvenes a través de contenido relevante y dinámico.',
      image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMTgxOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Nuestro Equipo</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Profesores altamente capacitados y apasionados por la enseñanza
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback 
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2">{teacher.name}</h3>
                  <p className="text-secondary mb-1">{teacher.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-3">{teacher.experience}</p>
                  <p className="text-sm text-muted-foreground">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Teachers Special */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">¿Qué hace especial a nuestros profesores?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="mb-2">Certificados</h3>
                <p className="text-sm text-muted-foreground">
                  Todos nuestros profesores cuentan con certificaciones internacionales en enseñanza del inglés.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="mb-2">Metodología MUR</h3>
                <p className="text-sm text-muted-foreground">
                  Capacitados en nuestra metodología única que garantiza resultados medibles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="mb-2">Vocación</h3>
                <p className="text-sm text-muted-foreground">
                  Apasionados por la enseñanza y comprometidos con el éxito de cada estudiante.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="mb-2">Experiencia</h3>
                <p className="text-sm text-muted-foreground">
                  Años de experiencia enseñando a estudiantes de todas las edades y niveles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">¿Eres profesor de inglés?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestro equipo y ayuda a transformar vidas a través de la enseñanza del inglés
          </p>
          <p className="text-sm opacity-80">
            Envía tu CV a: <a href="mailto:rrhh@stepbystep.com" className="underline hover:text-accent">rrhh@stepbystep.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
