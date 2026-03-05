import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { TeacherCard } from '../components/TeacherCard';
import { TeacherModal, TeacherData } from '../components/TeacherModal';
import { motion } from 'motion/react';

export default function Teachers() {
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teachers: TeacherData[] = [
    {
      name: 'Sarah Johnson',
      specialty: 'Conversación Avanzada',
      experience: '8 años de experiencia',
      description: 'Especializada en desarrollar fluidez conversacional y preparación para entrevistas de trabajo.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlYWNoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyMTk0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['TESOL', 'CELTA', 'CPE'],
      education: 'Licenciatura en Filología Inglesa, Universidad de Cambridge',
      achievements: [
        '95% de sus estudiantes aprueban entrevistas de trabajo en inglés',
        'Especialista en inglés de negocios y presentaciones corporativas',
        'Creadora del programa "English for Career Success"'
      ],
      email: 'sarah.johnson@stepbystep.com'
    },
    {
      name: 'Michael Chen',
      specialty: 'Inglés de Negocios',
      experience: '10 años de experiencia',
      description: 'Experto en inglés corporativo, presentaciones y comunicación profesional efectiva.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMjE5NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['DELTA', 'Business English Certificate', 'TOEIC Trainer'],
      education: 'MBA en Negocios Internacionales, Stanford University',
      achievements: [
        'Ex-ejecutivo de empresas Fortune 500',
        'Ha capacitado a más de 1000 profesionales corporativos',
        'Autor del libro "Business English Made Easy"'
      ],
      email: 'michael.chen@stepbystep.com'
    },
    {
      name: 'Emma Williams',
      specialty: 'Preparación TOEFL',
      experience: '6 años de experiencia',
      description: 'Certificada en preparación de exámenes internacionales con alto índice de aprobación.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyMTk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['TOEFL Trainer', 'IELTS Examiner', 'Cambridge Assessment'],
      education: 'Maestría en Educación y Evaluación de Idiomas, University of Oxford',
      achievements: [
        '92% de sus estudiantes obtienen puntajes superiores a 100 en TOEFL',
        'Examinadora oficial de Cambridge',
        'Especialista en técnicas de test-taking strategies'
      ],
      email: 'emma.williams@stepbystep.com'
    },
    {
      name: 'David Martínez',
      specialty: 'Inglés para Niños',
      experience: '7 años de experiencia',
      description: 'Especializado en metodologías lúdicas y desarrollo de habilidades tempranas.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMjE5NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['TEYL (Teaching English to Young Learners)', 'Montessori Certificate'],
      education: 'Licenciatura en Educación Infantil con especialización en inglés',
      achievements: [
        'Creador del programa "English Through Play"',
        'Experto en gamificación educativa',
        'Sus estudiantes muestran 90% de retención de vocabulario'
      ],
      email: 'david.martinez@stepbystep.com'
    },
    {
      name: 'Laura Thompson',
      specialty: 'Gramática y Escritura',
      experience: '9 años de experiencia',
      description: 'Experta en desarrollo de habilidades de escritura académica y profesional.',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGdsYXNzZXMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyMTk2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['Academic Writing Specialist', 'ETS Certified', 'CELTA'],
      education: 'Doctorado en Lingüística Aplicada, University of Edinburgh',
      achievements: [
        'Ha ayudado a más de 500 estudiantes a ingresar a universidades internacionales',
        'Revisora de artículos académicos en revistas internacionales',
        'Autora de manuales de escritura académica'
      ],
      email: 'laura.thompson@stepbystep.com'
    },
    {
      name: 'Roberto García',
      specialty: 'Inglés para Adolescentes',
      experience: '5 años de experiencia',
      description: 'Conecta con estudiantes jóvenes a través de contenido relevante y dinámico.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyMTk2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      certifications: ['TKT (Teaching Knowledge Test)', 'Youth Education Specialist'],
      education: 'Licenciatura en Educación Secundaria con mención en inglés',
      achievements: [
        'Experto en cultura pop y tendencias juveniles para enseñanza contextualizada',
        'Creador de contenido educativo en redes sociales',
        '88% de sus estudiantes mejoran su participación oral'
      ],
      email: 'roberto.garcia@stepbystep.com'
    },
  ];

  const handleTeacherClick = (teacher: TeacherData) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">Nuestro Equipo</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Profesores altamente capacitados y apasionados por la enseñanza
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <TeacherCard 
                key={index}
                teacher={teacher}
                index={index}
                onClick={() => handleTeacherClick(teacher)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Teachers Special */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">¿Qué hace especial a nuestros profesores?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🎓', title: 'Certificados', desc: 'Todos nuestros profesores cuentan con certificaciones internacionales en enseñanza del inglés.' },
              { emoji: '💡', title: 'Metodología MUR', desc: 'Capacitados en nuestra metodología única que garantiza resultados medibles.' },
              { emoji: '❤️', title: 'Vocación', desc: 'Apasionados por la enseñanza y comprometidos con el éxito de cada estudiante.' },
              { emoji: '🌍', title: 'Experiencia', desc: 'Años de experiencia enseñando a estudiantes de todas las edades y niveles.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{item.emoji}</div>
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">¿Eres profesor de inglés?</h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a nuestro equipo y ayuda a transformar vidas a través de la enseñanza del inglés
            </p>
            <p className="text-sm opacity-80">
              Envía tu CV a: <a href="mailto:rrhh@stepbystep.com" className="underline hover:text-accent">rrhh@stepbystep.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Modal */}
      <TeacherModal 
        teacher={selectedTeacher}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
