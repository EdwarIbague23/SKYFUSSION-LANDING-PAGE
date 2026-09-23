import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Linkedin, Github } from 'lucide-react';
import danielImg from '../images/Daniel_perfil.png';
import sneiderImg from '../images/Sneider_perfil.png';
import edwarImg from '../images/Edwar_perfil.png';
import estebanImg from '../images/Esteban_perfil.png';
import juancarlosImg from '../images/Juancarlos_perfil.png';

const teamMembers = [
  {
    id: 1,
    name: "Daniel Andrade",
    roleEn: "Data Scientist & AI Specialist",
    role: "Data Scientist & AI Specialist",
    image: danielImg,
    email: "danielandrade.0937@gmail.com",
    linkedin: "https://www.linkedin.com/in/danielandrade0937",
    github: "https://github.com/Dany0937",
  },
  {
    id: 2,
    name: "Sneider Murillo",
    roleEn: "Full-Stack Developer",
    role: "Full-Stack Developer",
    image: sneiderImg,
    email: "niesmurillgon@gmail.com",
    linkedin: "https://www.linkedin.com/in/sneider-murillo-gonzalez-791a73276",
    github: "https://github.com/Sneider874",
  },
  {
    id: 3,
    name: "Edwar Ibague",
    roleEn: "QA Tester",
    role: "QA Tester",
    image: edwarImg,
    email: "edwaribague@gmail.com",
    linkedin: "https://www.linkedin.com/in/edwar-ibague-937419343",
    github: "https://github.com/edwardibague",
  },
  {
    id: 4,
    name: "Esteban Morales",
    roleEn: "Software Development Advisor",
    role: "Software Development Advisor",
    image: estebanImg,
    email: "esteban.morales@uniminuto.edu",
    linkedin: "https://www.linkedin.com/in/estebanmorales84",
    github: "https://github.com/estemoca",
  },
  {
    id: 5,
    name: "Juan Carlos González",
    roleEn: "Research Advisor",
    role: "Research Advisor",
    image: juancarlosImg,
    email: "juan.gonzalez.s@uniminuto.edu",
    linkedin: "https://www.linkedin.com/in/juan-carlos-gonzalez-62643a36a/",
    github: "",
  },
];

export default function Team() {
  const { ref } = useScrollAnimation({ once: true, margin: '-40px' });

  return (
    <section id="team" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            animate="visible"
            className="mb-6 text-4xl font-bold text-white md:text-5xl"
            transition={{ type: 'spring', damping: 20 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nuestro equipo
            </span>
          </motion.h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-300">
            Un grupo multidisciplinario que combina ciencia de datos, ingeniería, investigación y visión institucional para construir soluciones con impacto real.
          </p>

          <motion.div
            ref={ref}
            className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="group rounded-3xl border border-slate-700/50 bg-slate-900/80 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl sm:p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: member.id * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-950/70">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)' }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(180deg, rgba(34,211,238,0.08), transparent 45%, rgba(2,8,23,0.55))' }}
                  />
                  <div
                    className="absolute bottom-2 left-2 right-2 flex items-center rounded-lg bg-slate-950/80 px-3 py-2 text-xs font-medium backdrop-blur-sm"
                  >
                    <span className="text-cyan-300">{member.roleEn}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  
                  {/* Social links */}
                  <div className="flex justify-center space-x-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="relative inline-flex items-center rounded-full px-3 py-1.5 text-slate-400 hover:text-cyan-400 transition-all group"
                        title="Email"
                      >
                        <Mail className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center rounded-full px-3 py-1.5 text-slate-400 hover:text-cyan-400 transition-all group"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center rounded-full px-3 py-1.5 text-slate-400 hover:text-cyan-400 transition-all group"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}