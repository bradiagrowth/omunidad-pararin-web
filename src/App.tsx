/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, ChevronLeft, MapPin, Phone, Mail, 
  Facebook, Instagram, Twitter, MessageCircle, Calendar, 
  Users, Target, History, Award, Image as ImageIcon,
  ArrowRight, ExternalLink
} from 'lucide-react';

// --- Types ---
interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

interface Convocatoria {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
}

interface Actividad {
  id: number;
  title: string;
  image: string;
  description: string;
}

// --- Data ---
const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/Header1.png",
    title: "Identidad y Tradición",
    subtitle: "Fortaleciendo nuestras raíces en el corazón de Áncash.",
    cta: "Conoce nuestra historia"
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/pararin2/1920/1080",
    title: "Desarrollo Sostenible",
    subtitle: "Trabajando por un futuro próspero para nuestra comunidad.",
    cta: "Ver proyectos"
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/pararin3/1920/1080",
    title: "Transparencia Comunal",
    subtitle: "Gestión abierta y participativa para todos los comuneros.",
    cta: "Ver convocatorias"
  }
];

const CONVOCATORIAS: Convocatoria[] = [
  {
    id: 1,
    title: "Asamblea General Ordinaria 2024",
    date: "25 de Marzo, 2024",
    category: "Asamblea",
    description: "Se convoca a todos los comuneros empadronados a la primera asamblea del año para tratar temas de presupuesto."
  },
  {
    id: 2,
    title: "Puesto de Trabajo: Técnico Agropecuario",
    date: "10 de Abril, 2024",
    category: "Empleo",
    description: "Buscamos profesional para el apoyo técnico en los proyectos de riego de la comunidad."
  },
  {
    id: 3,
    title: "Licitación de Insumos Agrícolas",
    date: "15 de Abril, 2024",
    category: "Licitación",
    description: "Convocatoria pública para proveedores de fertilizantes orgánicos para la campaña 2024-2025."
  }
];

const ACTIVIDADES: Actividad[] = [
  {
    id: 1,
    title: "Faena Comunal de Riego",
    image: "https://picsum.photos/seed/act1/800/600",
    description: "Mantenimiento preventivo de los canales de regadío principales."
  },
  {
    id: 2,
    title: "Fiesta Patronal de Pararín",
    image: "https://picsum.photos/seed/act2/800/600",
    description: "Celebración tradicional con danzas típicas y ferias gastronómicas."
  },
  {
    id: 3,
    title: "Taller de Capacitación Ganadera",
    image: "https://picsum.photos/seed/act3/800/600",
    description: "Mejoramiento genético y sanidad animal para productores locales."
  }
];

const GALLERY_IMAGES = [
  "https://picsum.photos/seed/g1/800/800",
  "https://picsum.photos/seed/g2/800/800",
  "https://picsum.photos/seed/g3/800/800",
  "https://picsum.photos/seed/g4/800/800",
  "https://picsum.photos/seed/g5/800/800",
  "https://picsum.photos/seed/g6/800/800",
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Convocatorias', href: '#convocatorias' },
    { name: 'Actividades', href: '#actividades' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-emerald-800' : 'text-white'}`}>
              PARARÍN
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled ? 'text-stone-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-emerald-800' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-emerald-600 hover:bg-stone-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-7xl font-bold text-white mb-6"
              >
                {SLIDES[current].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                {SLIDES[current].subtitle}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto"
              >
                {SLIDES[current].cta} <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-emerald-500 w-8' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

const Welcome = () => (
  <section id="inicio" className="py-20 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Bienvenido</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-6">
            Comunidad Campesina de Pararín
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            Ubicada en la provincia de Recuay, Áncash, nuestra comunidad es un ejemplo de organización y preservación cultural. Trabajamos unidos para el bienestar de nuestras familias, protegiendo nuestro territorio y promoviendo un desarrollo que respete nuestra herencia andina.
          </p>
          <button className="text-emerald-700 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            Leer más sobre nosotros <ArrowRight size={20} />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="/images/Header1.png" /" 
            alt="Comunidad Pararín" 
            className="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-emerald-800 text-white p-6 rounded-xl hidden lg:block">
            <p className="text-4xl font-bold">100+</p>
            <p className="text-sm opacity-80 uppercase tracking-tighter">Años de Historia</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => {
  const values = [
    { icon: <History className="text-emerald-600" />, title: "Historia", desc: "Nuestras raíces se hunden en la tradición milenaria de los pueblos andinos." },
    { icon: <Target className="text-emerald-600" />, title: "Misión", desc: "Promover el desarrollo integral de los comuneros mediante la gestión sostenible." },
    { icon: <Users className="text-emerald-600" />, title: "Visión", desc: "Ser una comunidad líder en organización, producción y transparencia en Áncash." },
    { icon: <Award className="text-emerald-600" />, title: "Valores", desc: "Solidaridad, reciprocidad (Ayni) y respeto por la Madre Tierra (Pachamama)." },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Quiénes Somos</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-stone-50 hover:bg-emerald-50 transition-colors group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-emerald-900 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Consejo Directivo 2024-2026</h3>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                Nuestra organización se rige por principios democráticos y de servicio. El Consejo Directivo trabaja incansablemente para representar los intereses de cada familia de Pararín.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>Presidente: Juan Pérez Robles</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>Secretario: María Espinoza Calvo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span>Tesorero: Ricardo Luna Mendoza</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://picsum.photos/seed/directorio/1000/800" 
                alt="Consejo Directivo" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Convocatorias = () => {
  const [filter, setFilter] = useState('Todas');
  const categories = ['Todas', 'Asamblea', 'Empleo', 'Licitación'];

  const filtered = filter === 'Todas' 
    ? CONVOCATORIAS 
    : CONVOCATORIAS.filter(c => c.category === filter);

  return (
    <section id="convocatorias" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Transparencia</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">Convocatorias</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-stone-600 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-stone-400 text-xs">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 text-sm mb-6 flex-grow">{item.description}</p>
                <button className="w-full py-3 bg-stone-900 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                  Ver detalles <ExternalLink size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Actividades = () => (
  <section id="actividades" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Nuestras Actividades</h2>
        <p className="text-stone-500 mt-4">El pulso de nuestra comunidad en imágenes y acciones.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {ACTIVIDADES.map((act, idx) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
              <img 
                src={act.image} 
                alt={act.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">Click para ver más</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">{act.title}</h3>
            <p className="text-stone-600 text-sm">{act.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Galería Institucional</h2>
            <p className="text-stone-400 mt-2">Paisajes, gente y cultura de Pararín.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            Ver álbum completo <ImageIcon size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(img)}
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-emerald-400">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selected}
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => (
  <footer id="contacto" className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">PARARÍN</h2>
          <p className="text-stone-600 text-sm leading-relaxed mb-6">
            Comunidad Campesina líder en la región Áncash, comprometida con el desarrollo sostenible y la transparencia institucional.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-stone-600 hover:bg-emerald-600 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-stone-600 hover:bg-emerald-600 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-stone-600 hover:bg-emerald-600 hover:text-white transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-stone-900 font-bold mb-6">Enlaces Rápidos</h3>
          <ul className="space-y-4 text-sm text-stone-600">
            <li><a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a></li>
            <li><a href="#nosotros" className="hover:text-emerald-600 transition-colors">Nosotros</a></li>
            <li><a href="#convocatorias" className="hover:text-emerald-600 transition-colors">Convocatorias</a></li>
            <li><a href="#actividades" className="hover:text-emerald-600 transition-colors">Actividades</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-stone-900 font-bold mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm text-stone-600">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-emerald-600 shrink-0" />
              <span>Plaza de Armas S/N, Pararín, Recuay, Áncash, Perú</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-emerald-600 shrink-0" />
              <span>+51 987 654 321</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-emerald-600 shrink-0" />
              <span>contacto@pararin.org.pe</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-stone-900 font-bold mb-6">Ubicación</h3>
          <div className="rounded-xl overflow-hidden h-48 shadow-inner border border-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.46974160356!2d-77.6781!3d-10.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a9000000000001%3A0x0!2zMTDCsDAxJzI4LjIiUyA3N8KwNDAnNDEuMiJX!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>© 2024 Comunidad Campesina de Pararín. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-emerald-600">Aviso Legal</a>
          <a href="#" className="hover:text-emerald-600">Política de Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a
    href="https://wa.me/51987654321"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
  >
    <MessageCircle size={28} />
    <span className="absolute right-full mr-4 bg-white text-stone-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      ¿Necesitas ayuda? Escríbenos
    </span>
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Convocatorias />
        <Actividades />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

