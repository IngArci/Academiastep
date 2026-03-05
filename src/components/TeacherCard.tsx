import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { AnimatedImage } from './AnimatedImage';
import { TeacherData } from './TeacherModal';

interface TeacherCardProps {
  teacher: TeacherData;
  index: number;
  onClick: () => void;
}

export function TeacherCard({ teacher, index, onClick }: TeacherCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="text-center overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
        <div 
          className="h-64 overflow-hidden"
          onClick={onClick}
        >
          <AnimatedImage 
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            animationType="zoom"
            delay={index * 0.05}
          />
        </div>
        <CardContent className="p-6">
          <h3 className="mb-2">{teacher.name}</h3>
          <p className="text-secondary mb-1">{teacher.specialty}</p>
          <p className="text-sm text-muted-foreground mb-3">{teacher.experience}</p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{teacher.description}</p>
          <Button 
            onClick={onClick}
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-white"
          >
            Ver perfil completo
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
