import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Contáctanos</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            ¿Listo para comenzar tu camino hacia el dominio del inglés? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Información de Contacto</h2>
              <p className="text-muted-foreground mb-8">
                Ponte en contacto con nosotros a través de cualquiera de estos medios. Responderemos lo antes posible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">+34 912 345 678</p>
                    <p className="text-sm text-muted-foreground mt-1">Lun - Vie: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-muted-foreground">info@stepbystep.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1">Dirección</h4>
                    <p className="text-muted-foreground">Calle Principal 123<br />28001 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+34 600 123 456</p>
                    <p className="text-sm text-muted-foreground mt-1">Chatea con nosotros</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <Card className="mt-8 bg-secondary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-secondary" />
                    <h3>Horario de Atención</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunes - Viernes:</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingos:</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6">Solicita Información</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Nombre completo *</label>
                    <Input id="name" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email *</label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2">Teléfono *</label>
                    <Input id="phone" type="tel" placeholder="+34 600 000 000" required />
                  </div>
                  <div>
                    <label htmlFor="program" className="block mb-2">Programa de interés</label>
                    <select id="program" className="w-full px-3 py-2 border border-border rounded-md bg-input-background">
                      <option value="">Selecciona un programa</option>
                      <option value="kids">Step by Step Kids (7-12 años)</option>
                      <option value="junior">Step by Step Junior (13-17 años)</option>
                      <option value="adultos">Step by Step Adultos (18-50 años)</option>
                      <option value="negocios">Inglés de Negocios</option>
                      <option value="certificacion">Preparación para Certificaciones</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="modality" className="block mb-2">Modalidad preferida</label>
                    <select id="modality" className="w-full px-3 py-2 border border-border rounded-md bg-input-background">
                      <option value="">Selecciona una modalidad</option>
                      <option value="presencial">Clases Presenciales a Domicilio</option>
                      <option value="virtual">Clases Virtuales por Zoom</option>
                      <option value="semi">Clases Semi-Personalizadas</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Mensaje</label>
                    <Textarea id="message" placeholder="Cuéntanos sobre tus objetivos y nivel actual de inglés" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Enviar Mensaje
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obligatorios. Nos comprometemos a proteger tu privacidad.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">¿Cuándo puedo empezar?</h4>
                <p className="text-sm text-muted-foreground">
                  Puedes comenzar en cualquier momento. Nuestras clases son personalizadas y se adaptan a tu calendario.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">¿Ofrecen clases de prueba?</h4>
                <p className="text-sm text-muted-foreground">
                  Sí, ofrecemos una clase de prueba gratuita para que conozcas nuestro método y profesor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">¿Cuánto dura cada clase?</h4>
                <p className="text-sm text-muted-foreground">
                  Las clases tienen una duración de 60 minutos, con frecuencia de 2-3 veces por semana según tu programa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">¿Qué materiales necesito?</h4>
                <p className="text-sm text-muted-foreground">
                  Todos los materiales didácticos están incluidos en el programa. Solo necesitas conexión a internet para clases virtuales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">Nuestra Ubicación</h2>
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Calle Principal 123, 28001 Madrid, España</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
