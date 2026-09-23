import { motion } from 'framer-motion';
import { DollarSign, Building2, Folder, Handshake, CreditCard } from 'lucide-react';

export default function BusinessModel() {
  const models = [
    {
      id: 1,
      title: "SaaS escalable",
      subtitle: "Planes de suscripción diseñados para crecer con cada organización",
      benefits: ["Ingresos recurrentes y sostenibles", "Escalabilidad por demanda", "Actualizaciones continuas"],
      icon: DollarSign,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      title: "Licenciamiento institucional",
      subtitle: "Soluciones para ministerios, universidades y entidades públicas",
      benefits: ["Contratos de alto valor", "Soporte técnico dedicado", "Capacitación y acompañamiento"],
      icon: Building2,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Consultoría especializada",
      subtitle: "Servicios personalizados para análisis avanzados y proyectos clave",
      benefits: ["Proyectos a medida", "Análisis experto", "Integración con procesos existentes"],
      icon: Folder,
      gradient: "from-cyan-500 to-slate-400",
    },
    {
      id: 4,
      title: "Marketplace de soluciones",
      subtitle: "Repositorio de modelos, datos y herramientas para expansión comercial",
      benefits: ["Productos digitales escalables", "Modelos listos para uso", "Datos y activos de valor"],
      icon: Handshake,
      gradient: "from-blue-500 to-violet-500",
    },
    {
      id: 5,
      title: "Alianzas estratégicas",
      subtitle: "Modelos B2G y B2B para fortalecer posicionamiento y crecimiento",
      benefits: ["Proyectos piloto con socios", "Cofinanciación", "Expansión sectorial"],
      icon: CreditCard,
      gradient: "from-violet-500 to-cyan-500",
    },
    {
      id: 6,
      title: "Inversión de desarrollo",
      subtitle: "Estructura de despliegue y validación para una solución de alto impacto",
      benefits: ["$150M COP estimados", "Validación regulatoria", "Despliegue escalonado"],
      icon: CreditCard,
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section id="business" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            animate="visible"
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
            transition={{ type: "spring", damping: 20 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modelo de Negocio
            </span>
          </motion.h2>
          
          <p className="mx-auto mb-12 max-w-2xl text-slate-300">
            Una estructura flexible para convertir la plataforma en una solución sostenible, escalable y útil para diferentes organizaciones.
          </p>

          <motion.div
            className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", damping: 15, staggerChildren: 0.1 }}
          >
{models.map((model) => (
                <motion.div
                  key={model.id}
                  className="group relative h-full rounded-3xl border border-slate-700/50 bg-slate-900/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl sm:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: model.id * 0.06 }}
                >
                  {/* Icono con anillo conic y glow */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto">
                      <model.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"
                      style={{ background: model.gradient }}
                    />
                  </div>
                  
                  {/* Título y subtítulo */}
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{model.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{model.subtitle}</p>
                  </div>
                  
                  {/* Beneficios con íconos lucide */}
                  <ul className="space-y-2 text-slate-300 text-xs">
                    {model.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <svg className="mr-1 mt-0.5 h-4 w-4 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 18l6-6-6-6M15 6l6 6-6 6" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}