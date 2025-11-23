import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Star, 
  ShieldCheck, 
  Wifi, 
  Coffee, 
  Monitor, 
  ArrowRight, 
  Phone,
  Menu,
  X,
  ExternalLink,
  Key
} from 'lucide-react';

// --- Constants & Data ---

const TARGET_LINK = "https://yandex.ru/maps/-/CLfdUR8I";

const FEATURES = [
  {
    icon: <Key className="w-8 h-8 text-gold-500" />,
    title: "Бесконтактный доступ",
    desc: "Заселение в любое время суток без ожидания администратора."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
    title: "Приватность",
    desc: "Строгая конфиденциальность для деловых встреч и отдыха."
  },
  {
    icon: <Star className="w-8 h-8 text-gold-500" />,
    title: "Премиум стандарт",
    desc: "Идеальная чистота, дорогое постельное белье и халаты."
  }
];

// ВАЖНО: Используются исключительно предоставленные оригинальные фото.
const GALLERY_IMAGES = [
  {
    url: "https://radikal.cloud/i/XXXL-%283%29.cdBogD",
    title: "Гостиная зона",
    subtitle: "Простор и стиль"
  },
  {
    url: "https://radikal.cloud/i/XXXL-%284%29.cdBAQg",
    title: "Спальня",
    subtitle: "Комфортный отдых"
  },
  {
    url: "https://radikal.cloud/i/XXXL-%285%29.cdBxqc",
    title: "Кухня",
    subtitle: "Современное оснащение"
  },
  {
    url: "https://radikal.cloud/i/XXXL-%286%29.cdBN3L",
    title: "Ванная комната",
    subtitle: "Идеальная чистота"
  },
  {
    url: "https://radikal.cloud/i/XXXL-%287%29.cdBIYj",
    title: "Интерьер",
    subtitle: "Внимание к деталям"
  },
  {
    url: "https://radikal.cloud/i/XXXL-%288%29.cdiCRS",
    title: "Детали",
    subtitle: "Атмосфера уюта"
  },
  {
    url: "https://radikal.cloud/i/XXXL-%281%29.cdiRWn",
    title: "Обстановка",
    subtitle: "Премиум класс"
  },
  {
    url: "https://radikal.cloud/i/XXXL-%282%29.cdiS4X",
    title: "Апартаменты",
    subtitle: "Общий вид"
  }
];

// Фоновое изображение для главного экрана
const HERO_IMAGE = "https://radikal.cloud/i/XXXL.cdicTp";

const AMENITIES = [
  { icon: <Wifi size={18} />, text: "Wi-Fi 500 Мбит/с" },
  { icon: <Monitor size={18} />, text: "Smart TV + Netflix" },
  { icon: <Coffee size={18} />, text: "Кофемашина" },
  { icon: <MapPin size={18} />, text: "Паркинг" },
];

// --- Components ---

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const Button = ({ children, primary = true, className = "" }: ButtonProps) => (
  <a 
    href={TARGET_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      group relative px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden
      ${primary 
        ? 'bg-gold-600 text-black hover:bg-gold-500' 
        : 'border border-gold-500/50 text-gold-500 hover:border-gold-400 hover:text-gold-400'}
      ${className}
    `}
  >
    {/* Shine effect */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <ExternalLink size={14} className="opacity-70" />
    </span>
  </a>
);

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-20 text-center">
    <motion.span 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-serif text-neutral-100"
    >
      {title}
    </motion.h2>
    <div className="w-16 h-[2px] bg-gold-600 mx-auto mt-8" />
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/5 py-4' : 'py-6 bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl font-bold tracking-widest text-white flex items-center gap-2">
          <div className="w-2 h-2 bg-gold-500 rotate-45" />
          АРЕНДА<span className="text-gold-500">ПРАЙМ</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-gold-500 transition-colors">Преимущества</a>
          <a href="#gallery" className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-gold-500 transition-colors">Апартаменты</a>
          <Button primary={false} className="!py-3 !px-6 !text-[10px]">Профиль на картах</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gold-500">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-gold-500/20 md:hidden flex flex-col p-8 gap-6 animate-fade-in">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-neutral-200 text-sm uppercase tracking-widest">Преимущества</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="text-neutral-200 text-sm uppercase tracking-widest">Апартаменты</a>
          <Button className="w-full justify-center">Смотреть профиль</Button>
        </div>
      )}
    </nav>
  );
};

const App = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-neutral-400 font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with heavy dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE}
            alt="Luxury Interior" 
            className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-110"
          />
          {/* Vignette & Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/30 rounded-full bg-black/50 backdrop-blur-sm mb-8">
              <Star size={12} className="text-gold-500 fill-gold-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400">Премиум класс</span>
              <Star size={12} className="text-gold-500 fill-gold-500" />
            </div>

            <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight tracking-wide">
              ВАШ СТАТУС <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-gold-500 italic">В ДЕТАЛЯХ</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-400 mb-12 font-light leading-relaxed">
              Аренда квартир бизнес-класса для тех, кто ценит стиль, комфорт и абсолютную приватность.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button>Выбрать квартиру</Button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- ABOUT / FEATURES --- */}
      <section id="about" className="py-32 bg-[#050505] relative">
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-900/20 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-gold-900/20 border border-gold-900/20">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-12 bg-[#080808] hover:bg-[#0a0a0a] transition-colors duration-500 group text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-6 p-4 rounded-full bg-black border border-gold-500/20 text-gold-500 group-hover:border-gold-500/50 group-hover:scale-110 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-serif text-neutral-200 mb-3 uppercase tracking-wider">{feature.title}</h4>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <SectionHeading title="ИНТЕРЬЕРЫ" subtitle="Фотографии" />
          
          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.a
                href={TARGET_LINK}
                target="_blank"
                rel="noopener noreferrer" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[16/10] overflow-hidden border border-white/5 cursor-pointer block bg-[#101010]"
              >
                {/* Image: Natural look but slightly dimmed for text readability, full brightness on hover */}
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out 
                           filter brightness-90 contrast-105 grayscale-[10%]
                           group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-0"
                />
                
                {/* Dark Overlay ensuring text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-serif text-neutral-200 group-hover:text-gold-500 transition-colors duration-300">{img.title}</h4>
                      <p className="text-neutral-500 text-xs uppercase tracking-widest mt-1">{img.subtitle}</p>
                    </div>
                    <ArrowRight className="text-gold-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Amenities Bar */}
          <div className="mt-20 py-8 border-y border-white/5 flex flex-wrap justify-center gap-8 md:gap-16">
            {AMENITIES.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-neutral-500">
                <span className="text-gold-600">{item.icon}</span>
                <span className="text-xs uppercase tracking-[0.15em]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        {/* Abstract Gold Background */}
        <div className="absolute inset-0 bg-[#080808]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight">
            АРЕНДА<span className="text-gold-500">ПРАЙМ</span>
          </h2>
          <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto font-light">
            Перейдите на нашу страницу в Яндекс.Картах, чтобы увидеть полное портфолио, 
            актуальные цены и отзывы наших гостей.
          </p>
          <div className="flex justify-center">
            <Button className="!py-5 !px-12 !text-sm">
              Перейти к каталогу
            </Button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 border-t border-gold-500/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-neutral-600 uppercase tracking-widest">
            © {new Date().getFullYear()} АрендаПрайм
          </div>
          
          <div className="flex gap-8">
             <a href={TARGET_LINK} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-gold-500 transition-colors">
               <MapPin size={20} />
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);