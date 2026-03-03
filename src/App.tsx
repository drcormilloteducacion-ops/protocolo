import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, 
  Users, 
  Stethoscope, 
  ChevronRight,
  Calendar,
  UserCircle,
  HeartPulse,
  Briefcase,
  Globe,
  GraduationCap,
  Share2,
  Home,
  FileText,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { PRESCRIPTION_DATA, SUBSYSTEMS_DATA } from './data';

const IconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  UserCircle: <UserCircle className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'prescripcion' | 'subsistemas'>('home');

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("¡Enlace copiado! Puedes compartirlo ahora.");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] font-sans selection:bg-[#1A73E8] selection:text-white">
      {/* Google-style Top Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 bg-[#1A73E8] rounded-lg flex items-center justify-center text-white">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-xl font-medium text-gray-700 hidden sm:block">Protocolos Cormillot</span>
          </div>
          
          <nav className="flex items-center gap-1 sm:gap-4">
            <button 
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'home' ? 'bg-blue-50 text-[#1A73E8]' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home className="w-4 h-4" /> <span className="hidden md:inline">Inicio</span>
            </button>
            <button 
              onClick={() => setActiveTab('prescripcion')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'prescripcion' ? 'bg-blue-50 text-[#1A73E8]' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ClipboardCheck className="w-4 h-4" /> <span className="hidden md:inline">Prescripción</span>
            </button>
            <button 
              onClick={() => setActiveTab('subsistemas')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'subsistemas' ? 'bg-blue-50 text-[#1A73E8]' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-4 h-4" /> <span className="hidden md:inline">Subsistemas</span>
            </button>
            <div className="w-px h-6 bg-gray-200 mx-2 hidden sm:block"></div>
            <button 
              onClick={copyLink}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
              title="Compartir sitio"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <section className="text-center space-y-6 py-12">
                <h1 className="text-4xl md:text-6xl font-serif italic text-gray-900 leading-tight">
                  Protocolos Médicos
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                  Guía interactiva basada en los estándares de atención del Dr. Alberto Cormillot para la relación médico-paciente.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <button 
                    onClick={() => setActiveTab('prescripcion')}
                    className="bg-[#1A73E8] text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:bg-[#1557B0]"
                  >
                    Ver Prescripción
                  </button>
                  <button 
                    onClick={() => setActiveTab('subsistemas')}
                    className="bg-white text-[#1A73E8] border border-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all"
                  >
                    Explorar Subsistemas
                  </button>
                </div>
              </section>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 text-[#1A73E8] rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Estructura Fiel</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Respetamos íntegramente el contenido original de los documentos del 2001, organizados para una lectura moderna.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Share2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Fácil de Compartir</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Diseñado para ser público y accesible desde cualquier dispositivo con un solo enlace.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Educación Terapéutica</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Enfoque en el empoderamiento del paciente y la comprensión profunda del tratamiento.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'prescripcion' && (
            <motion.div
              key="prescripcion"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-serif italic text-gray-900">Prescripción de un Tratamiento</h2>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1 rounded-full text-gray-500">30/07/2001</span>
                </div>
                <p className="text-gray-600 mb-8">Un proceso estructurado de 10 etapas para asegurar la adherencia y comprensión del paciente.</p>
                
                <div className="space-y-6">
                  {PRESCRIPTION_DATA.map((section, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                      <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
                        <h3 className="text-sm font-bold text-[#1A73E8] uppercase tracking-wider">{section.tema}</h3>
                      </div>
                      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="p-6 space-y-4">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase">Etapas del Médico</h4>
                          <ul className="space-y-3">
                            {section.etapas.map((etapa, i) => (
                              <li key={i} className="text-sm text-gray-700 flex gap-2">
                                <span className="text-[#1A73E8] font-bold">•</span> {etapa}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-6 space-y-4 bg-blue-50/30">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase">Frases de Apertura</h4>
                          <ul className="space-y-4">
                            {section.frases.map((frase, i) => (
                              <li key={i} className="text-sm italic text-gray-600 border-l-2 border-blue-200 pl-4 py-1">
                                "{frase}"
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'subsistemas' && (
            <motion.div
              key="subsistemas"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-serif italic text-gray-900">Relación Profesional-Paciente</h2>
                  <span className="text-xs font-mono bg-gray-100 px-3 py-1 rounded-full text-gray-500">25/04/2001</span>
                </div>
                <p className="text-gray-600 mb-8">Análisis multidimensional del entorno del paciente para un tratamiento integral.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {SUBSYSTEMS_DATA.map((sub, idx) => (
                    <div key={idx} className="bg-gray-50/50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-[#1A73E8]">
                          {IconMap[sub.iconName]}
                        </div>
                        <h3 className="font-medium text-gray-800">{sub.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {sub.items.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex gap-2 group">
                            <ChevronRight className="w-4 h-4 mt-0.5 text-gray-300 group-hover:text-[#1A73E8] transition-colors flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#1A73E8]" />
              <span className="text-lg font-medium text-gray-700">Protocolos Cormillot</span>
            </div>
            <div className="text-sm text-gray-500 text-center md:text-right">
              <p>© 2001-2026 Dr. Alberto Cormillot</p>
              <p className="mt-1">Digitalizado para consulta médica profesional</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
