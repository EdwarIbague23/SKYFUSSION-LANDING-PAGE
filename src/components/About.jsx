import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Shield, AlertCircle, Target } from 'lucide-react';
import logoImg from '../images/Logo.png';

export default function About() {
  const { ref } = useScrollAnimation({ once: true, margin: '-40px' });

  return (
    <section id="about" className="bg-slate-950 py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto max-w-6xl">
          <motion.h2
            initial="hidden"
            animate="visible"
            className="mb-16 text-4xl font-bold text-white md:text-5xl"
            transition={{ type: 'spring', damping: 20 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Acerca del proyecto
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <motion.div
                className="rounded-3xl border border-slate-700/50 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30"
                whileHover={{ borderColor: 'rgba(34,211,238,0.35)', scale: 1.02 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/15">
                    <Shield className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-cyan-400">¿Qué es SKY FUSSION ANALYTICS?</h3>
                    <p className="leading-relaxed text-slate-300">
                      SKY FUSSION ANALYTICS es una plataforma inteligente para la gestión hídrica y la toma de decisiones institucionales. Centraliza estudios, análisis geográficos y modelos predictivos para ayudar a entidades públicas a entender mejor el comportamiento del agua y actuar con mayor precisión.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="rounded-3xl border border-slate-700/50 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30"
                transition={{ delay: 0.2 }}
                whileHover={{ borderColor: 'rgba(59,130,246,0.35)' }}
              >
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15">
                    <AlertCircle className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-blue-400">Problemática</h3>
                    <p className="leading-relaxed text-slate-300">
                      La información hidrológica suele estar fragmentada, dispersa y difícil de interpretar. Esto dificulta la predicción, retrasa la toma de decisiones y aumenta el riesgo de actuar tarde frente a eventos climáticos, sequías, inundaciones o fallas en la gestión del recurso hídrico.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="rounded-3xl border border-slate-700/50 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30"
                transition={{ delay: 0.3 }}
                whileHover={{ borderColor: 'rgba(34,211,238,0.35)' }}
              >
                <div className="mb-6 flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/15">
                    <Target className="text-2xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-cyan-400">Objetivo</h3>
                    <p className="leading-relaxed text-slate-300">
                      Diseñar una solución inteligente que permita visualizar, analizar y predecir escenarios hídricos con mayor claridad, reduciendo la incertidumbre y fortaleciendo la planificación, prevención y gestión del agua con base en evidencia.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto flex min-h-[24rem] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-5 shadow-[0_0_55px_rgba(34,211,238,0.14)] backdrop-blur-sm sm:min-h-[30rem] sm:p-8"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_62%)]" />
              <motion.div
                className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl border border-cyan-400/15 bg-slate-950/60 p-3 sm:p-5"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={logoImg}
                  alt="Logo SKY FUSSION ANALYTICS"
                  className="h-full max-h-[27rem] w-full object-contain drop-shadow-[0_0_24px_rgba(34,211,238,0.28)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}