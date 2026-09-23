import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Droplets, TrendingUp, Shield, Users } from 'lucide-react';

const featuresData = [
  {
    id: 1,
    icon: <Droplets className="w-8 h-8 text-cyan-400" />,
    title: "Catálogo inteligente",
    description: "Accede a estudios hidrológicos, mapas interactivos y ubicaciones clave para analizar el comportamiento del agua con mayor claridad y rapidez.",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    title: "Predicción operativa",
    description: "Modelos predictivos basados en IA que permiten anticipar escenarios, evaluar riesgos y apoyar decisiones con mayor precisión.",
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Seguridad y confianza",
    description: "Una solución diseñada para ambientes institucionales con altos estándares de seguridad, privacidad y cumplimiento de políticas.",
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Gestión institucional",
    description: "Administra usuarios, permisos, suscripciones y proyectos desde una sola plataforma pensada para entidades públicas y organizaciones.",
  },
];

export default function Features() {
  const { ref } = useScrollAnimation({ once: true, margin: '-40px' });

  return (
    <section id="features" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-16 text-4xl font-bold text-white md:text-5xl"
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Características Principales
            </span>
          </motion.h2>
          
          <motion.div
            ref={ref}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuresData.map((feature) => (
              <motion.div
                key={feature.id}
                className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 h-full flex flex-col items-start justify-between group"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: feature.id * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Halo difuso pulsante */}
                <div
                  className="absolute inset-0 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background: 'radial-gradient(circle at 50% 40%, #06b6d455, transparent 70%)',
                  }}
                />
                
                {/* Anillo conic giratorio delgado solo en el borde */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, #06b6d4, transparent 30%)',
                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
                  }}
                />
                
                {/* Icono centrado con glow */}
                <div className="relative w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-20" style={{
                    background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)',
                    animation: 'rotate 3s linear infinite',
                  }} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-1">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}