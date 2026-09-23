import { motion } from 'framer-motion';
import logoImg from '../images/Logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="start"
            animate="end"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12"
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="mb-6 flex flex-col items-center gap-4 md:mb-0 md:items-start">
              <motion.img
                src={logoImg}
                alt="Logo SKY FUSSION ANALYTICS"
                className="mb-2 h-14 w-14 rounded-lg object-contain"
                transition={{ delay: 0.1 }}
              />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">SKY FUSSION ANALYTICS</span>

              <p className="max-w-sm text-sm leading-6 text-slate-400">
                Plataforma inteligente para la gestión hídrica, la predicción y la toma de decisiones institucionales.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Enlaces rápidos</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#home" className="transition-colors hover:text-cyan-400">Inicio</a></li>
                <li><a href="#stats" className="transition-colors hover:text-cyan-400">Estadísticas</a></li>
                <li><a href="#about" className="transition-colors hover:text-cyan-400">Sobre</a></li>
                <li><a href="#features" className="transition-colors hover:text-cyan-400">Características</a></li>
                <li><a href="#contact" className="transition-colors hover:text-cyan-400">Contacto</a></li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Objetivo</h4>
              <p className="text-sm leading-6 text-slate-400">
                Ayudar a entidades públicas y organizaciones ambientales a convertir datos hídricos en decisiones más claras, rápidas y efectivas.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 border-t border-slate-700 pt-8 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} SKY FUSSION ANALYTICS. Gestión hídrica inteligente.</p>
            <p className="mt-2">Corporación Universitaria Minuto de Dios · Ingeniería de Sistemas</p>
            <p className="mt-2">Desarrollado con React · Tailwind CSS · Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}