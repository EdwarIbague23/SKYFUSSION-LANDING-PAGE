import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
            transition={{ type: 'spring', damping: 20 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ¿Listo para transformar la gestión hídrica?
            </span>
          </motion.h2>

          <p className="mb-10 text-slate-300">
            Conectemos para explorar cómo SKY FUSSION ANALYTICS puede apoyar decisiones más inteligentes, predictivas y sostenibles en tu organización.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-3xl border border-slate-700/50 bg-slate-900/80 p-8 backdrop-blur-sm">
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", damping: 15, delay: 0.1 }}
            >
              <label className="block text-slate-300 text-sm mb-2">
                Nombre
              </label>
              <input
                type="text"
                required
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-colors"
                placeholder="Tu nombre"
                onFocus={() => setShowSuccess(false)}
              />
            </motion.div>
            
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
            >
              <label className="block text-slate-300 text-sm mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-colors"
                placeholder="tu@email.com"
                onFocus={() => setShowSuccess(false)}
              />
            </motion.div>
            
            <motion.div
              className="mb-8"
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", damping: 15, delay: 0.3 }}
            >
              <label className="block text-slate-300 text-sm mb-4">
                Mensaje
              </label>
              <textarea
                rows={3}
                required
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-slate-900 transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
                onFocus={() => setShowSuccess(false)}
              />
            </motion.div>
            
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", damping: 15, delay: 0.4 }}
            >
              <p className="text-slate-400 text-sm mb-4">
                * Campos obligatorios
              </p>
            </motion.div>
            
            <motion.div
              className="mb-8"
              initial="hidden"
              animate="visible"
              transition={{ type: "spring", damping: 15, delay: 0.5 }}
            >
              {showSuccess && (
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 text-center text-cyan-400">
                  <motion.span className="block mb-2">¡Gracias!</motion.span>
                  <motion.span>Tu solicitud de demo ha sido recibida. Nos pondremos en contacto contigo pronto.</motion.span>
                </div>
              )}
            </motion.div>
            
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-lg font-medium transition-all transform shadow-2xl shadow-cyan-500/50"
              onClick={() => setShowSuccess(false)}
            >
              <motion.span>Solicitar Demo</motion.span>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}