import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AnimatedImage } from './AnimatedImage';
import { Award, BookOpen, Star, Mail } from 'lucide-react';

export interface TeacherData {
  name: string;
  specialty: string;
  experience: string;
  description: string;
  image: string;
  certifications?: string[];
  education?: string;
  achievements?: string[];
  email?: string;
}

interface TeacherModalProps {
  teacher: TeacherData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeacherModal({ teacher, isOpen, onClose }: TeacherModalProps) {
  if (!teacher) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
              <AnimatedImage 
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover"
                animationType="scale"
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{teacher.name}</DialogTitle>
              <Badge className="bg-secondary text-secondary-foreground mb-2">
                {teacher.specialty}
              </Badge>
              <DialogDescription className="text-base">
                {teacher.experience}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          <div>
            <h4 className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Sobre el profesor
            </h4>
            <p className="text-muted-foreground">{teacher.description}</p>
          </div>

          {/* Education */}
          {teacher.education && (
            <div>
              <h4 className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-secondary" />
                Formación académica
              </h4>
              <p className="text-muted-foreground">{teacher.education}</p>
            </div>
          )}

          {/* Certifications */}
          {teacher.certifications && teacher.certifications.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-accent" />
                Certificaciones
              </h4>
              <div className="flex flex-wrap gap-2">
                {teacher.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="border-accent text-accent">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {teacher.achievements && teacher.achievements.length > 0 && (
            <div>
              <h4 className="mb-2">Logros destacados</h4>
              <ul className="space-y-2">
                {teacher.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          {teacher.email && (
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h4 className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                Contacto
              </h4>
              <p className="text-sm text-muted-foreground">{teacher.email}</p>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <Button 
            onClick={onClose}
            variant="outline"
            className="flex-1"
          >
            Cerrar
          </Button>
          <Button 
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={() => {
              // Aquí podría redirigir a la página de contacto con el profesor preseleccionado
              window.location.href = '/contacto';
            }}
          >
            Solicitar clase con {teacher.name.split(' ')[0]}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
