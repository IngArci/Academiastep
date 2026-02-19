import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { BookOpen, Users, Award, Home, Video, GraduationCap, Briefcase, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Programs() {
  const programs = [
    {
      id: 'kids',
      title: 'Step by Step Kids',
      age: '7 a 12 años',
      duration: '3-4 meses',
      description: 'Programa diseñado para niños que inician su camino en el inglés. Clases dinámicas y divertidas que desarrollan habilidades comunicativas desde temprana edad.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1763770446725-1086cbb36d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZW5nbGlzaCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAxNzY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Aprendizaje a través del juego',
        'Desarrollo de vocabulario básico',
        'Práctica de conversación simple',
        'Actividades interactivas y multimedia'
      ]
    },
    {
      id: 'junior',
      title: 'Step by Step Junior',
      age: '13 a 17 años',
      duration: '3-4 meses',
      description: 'Para adolescentes que buscan mejorar su nivel académico y prepararse para certificaciones internacionales. Metodología adaptada a sus intereses y objetivos.',
      icon: <Users className="w-8 h-8" />,
      color: 'secondary',
      image: 'https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlciUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzAyMTkwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Enfoque en gramática y escritura',
        'Preparación para exámenes escolares',
        'Proyectos colaborativos',
        'Contenido relevante para adolescentes'
      ]
    },
    {
      id: 'adultos',
      title: 'Step by Step Adultos',
      age: '18 a 50 años',
      duration: '3-4 meses',
      description: 'Programa enfocado en adultos que necesitan el inglés para desarrollo profesional. Incluye preparación para oportunidades laborales y certificaciones.',
      icon: <Award className="w-8 h-8" />,
      color: 'accent',
      image: 'https://images.unsplash.com/photo-1758691736722-cda1858056e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHVsdCUyMHByb2Zlc3Npb25hbCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MDIxOTA0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Inglés de negocios y profesional',
        'Preparación para certificaciones',
        'Conexión con empleos bilingües',
        'Horarios flexibles adaptados a tu agenda'
      ]
    },
  ];

  const modalities = [
    {
      id: 'presencial',
      title: 'Clases Presenciales a Domicilio',
      description: 'Nuestros profesores van hasta tu hogar para ofrecerte una experiencia personalizada y cómoda.',
      icon: <Home className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1653276071161-379c70560951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdGVhY2hlciUyMHR1dG9yaW5nfGVufDF8fHx8MTc3MDIxOTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'virtual',
      title: 'Sesiones Virtuales por Zoom',
      description: 'Flexibilidad total con clases online en vivo, sin perder la calidad de la enseñanza personalizada.',
      icon: <Video className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1758874385197-07d99c183a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB6b29tJTIwY2xhc3MlMjB2aXJ0dWFsJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzcwMjE5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'semi',
      title: 'Clases Semi-Personalizadas',
      description: 'Grupos reducidos de máximo 4 estudiantes. Tarifas más accesibles manteniendo atención personalizada.',
      icon: <Users className="w-12 h-12" />,
      image: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MDE1NDI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const services = [
    {
      title: 'Asesorías y Refuerzos Académicos',
      description: 'Mejora tu rendimiento escolar y consolida las bases del idioma con apoyo personalizado.',
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: 'Preparación para Exámenes Internacionales',
      description: 'Enfoque práctico y metodológico para certificaciones reconocidas mundialmente.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Conexión con Oportunidades Laborales',
      description: 'Alianzas con call centers y plataformas como Freelancer para empleos bilingües.',
      icon: <Briefcase className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Nuestros Programas</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Programas diseñados específicamente para cada etapa de aprendizaje
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              id={program.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <ImageWithFallback 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className={`bg-${program.color}/10 text-${program.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {program.icon}
                </div>
                <h2 className="mb-2">{program.title}</h2>
                <div className="flex gap-3 mb-4">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {program.age}
                  </span>
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {program.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contacto">
                  <Button className="bg-primary hover:bg-primary/90">
                    Solicita Información
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modalities Section */}
      <section id="modalidades" className="py-16 bg-gradient-to-br from-accent/15 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Modalidades de Estudio</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Elige la modalidad que mejor se adapte a tu estilo de vida y necesidades
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modalities.map((modality) => (
              <Card key={modality.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-white">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={modality.image}
                    alt={modality.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-secondary/10 text-secondary p-4 rounded-full">
                      {modality.icon}
                    </div>
                  </div>
                  <h3 className="mb-3">{modality.title}</h3>
                  <p className="text-muted-foreground">{modality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Servicios Adicionales</h2>
          <p className="text-center opacity-90 mb-12 max-w-2xl mx-auto">
            Complementa tu aprendizaje con servicios diseñados para potenciar tus resultados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-accent text-accent-foreground p-4 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="opacity-90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}