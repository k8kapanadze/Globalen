import React from "react";
import { useApp } from "../AppContext";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Star, 
  Quote, 
  Globe, 
  GraduationCap, 
  Languages, 
  CheckCircle2, 
  XCircle, 
  PhoneCall,
  ChevronDown,
  Users,
  Compass,
  Award
} from "lucide-react";

import { ASSETS } from "../assets";

export const Home: React.FC = () => {
  const { t } = useApp();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      image: ASSETS.HERO_1,
      title: t({ GE: "გლობალური განათლების ქსელი", EN: "Global Education Network" }),
      subtitle: t({
        GE: "ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში.",
        EN: "Oxford's first and only official representative in Georgia.",
      }),
      accent: t({ GE: "პრემიუმ განათლება", EN: "Premium Education" })
    },
    {
      image: ASSETS.HERO_2,
      title: t({ GE: "აკადემიური სრულყოფილება", EN: "Academic Excellence" }),
      subtitle: t({
        GE: "თქვენი გზა მსოფლიოს წამყვანი უნივერსიტეტებისკენ.",
        EN: "Your path to the world's leading universities.",
      }),
      accent: t({ GE: "მსოფლიო დონის სტანდარტი", EN: "World Class Standards" })
    },
    {
      image: ASSETS.HERO_3,
      title: t({ GE: "ინოვაციური სწავლება", EN: "Innovative Learning" }),
      subtitle: t({
        GE: "თანამედროვე მიდგომები და პერსონალიზებული მენტორინგი.",
        EN: "Modern approaches and personalized mentoring.",
      }),
      accent: t({ GE: "მომავლის ლიდერებისთვის", EN: "For Future Leaders" })
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col bg-white">
      {/* Universal Floating Apply CTA */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <Link
          to="/apply"
          className="bg-brand-red text-white py-12 px-4 [writing-mode:vertical-rl] rotate-180 uppercase text-[10px] font-black tracking-[0.4em] hover:bg-brand-blue transition-all duration-700 shadow-[0_0_40px_rgba(220,20,60,0.4)] flex items-center gap-4 group border-l-4 border-white/20"
        >
          <motion.div
            animate={{ 
              y: [0, -6, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight size={16} className="-rotate-90 group-hover:translate-y-2 transition-transform duration-500" />
          </motion.div>
          {t({ GE: "რეგისტრაცია", EN: "Apply Now" })}
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-dark/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-transparent to-brand-dark/95" />
          </motion.div>
        </AnimatePresence>

        {/* Interactive Overlay Blocks */}
        <div className="absolute bottom-0 left-0 w-full z-30 hidden md:block">
          <div className="grid grid-cols-3 border-t border-white/5">
            <HeroOverlayBlock 
              label={t({ GE: "ჩვენი მისია", EN: "Our Mission" })} 
              to="#mission" 
              icon={<Globe size={20} />}
              delay={0.2}
            />
            <HeroOverlayBlock 
              label={t({ GE: "საერთაშორისო პროგრამები", EN: "International Programs" })} 
              to="/programs" 
              icon={<GraduationCap size={20} />}
              delay={0.4}
            />
            <HeroOverlayBlock 
              label={t({ GE: "ენების კურსები", EN: "Language Courses" })} 
              to="/courses" 
              icon={<Languages size={20} />}
              delay={0.6}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white pb-48 md:pb-64">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-6 bg-brand-gold/40" />
                <motion.span 
                  initial={{ opacity: 0, letterSpacing: "0.2em" }}
                  animate={{ opacity: 1, letterSpacing: "0.5em" }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="text-brand-gold font-bold uppercase text-[9px] md:text-xs"
                >
                  {slides[currentSlide].accent}
                </motion.span>
                <div className="h-[1px] w-6 bg-brand-gold/40" />
              </div>

              {currentSlide === 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-red/20 backdrop-blur-md px-6 py-2 rounded-full border border-brand-red/30 flex items-center gap-3 shadow-lg shadow-brand-red/10"
                >
                  <Award size={14} className="text-brand-gold" />
                  <span className="text-[10px] text-white font-bold uppercase tracking-[0.2em]">
                    {t({ GE: "ოქსფორდის პირველი და ერთადერთი წარმომადგენელი საქართველოში", EN: "Oxford's First & Only Representative in Georgia" })}
                  </span>
                </motion.div>
              )}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif mb-6 tracking-tighter leading-[1.1] text-white drop-shadow-2xl max-w-4xl mx-auto">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-sm md:text-lg font-light text-white/90 max-w-2xl mx-auto leading-relaxed tracking-wide italic font-serif mb-10 drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <Link
                to="/apply"
                className="btn-secondary px-10 py-5 text-[10px] tracking-[0.25em] shadow-xl hover:shadow-brand-red/20"
              >
                {t({ GE: "რეგისტრაცია", EN: "Apply Now" })}
              </Link>
              
              <Link
                to="/about"
                className="group flex items-center gap-3 text-white/50 hover:text-white transition-all duration-500"
              >
                <span className="font-bold uppercase text-[10px] tracking-[0.25em] border-b border-transparent group-hover:border-white/30 pb-1">
                  {t({ GE: "ჩვენს შესახებ", EN: "About Us" })}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-dark transition-all duration-500">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-40 left-1/2 -translate-x-1/2 z-20 text-white/20 hidden lg:block"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Mission Section - Premium Split Layout */}
      <section id="mission" className="py-48 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <span className="text-brand-red font-bold tracking-[0.5em] uppercase text-[9px] mb-8 block">
                {t({ GE: "ჩვენი მისია", EN: "Our Mission" })}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight text-brand-blue tracking-tighter">
                {t({
                  GE: "აკადემიური სრულყოფილება ხვდება თანამედროვე ინოვაციას",
                  EN: "Academic Excellence Meets Modern Innovation",
                })}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-light mb-12">
                {t({
                  GE: "ჩვენი მიზანია ქართველ სტუდენტებს მივცეთ წვდომა მაღალი ხარისხის საერთაშორისო განათლებაზე. როგორც ოქსფორდის ოფიციალური წარმომადგენელი, ჩვენ ვუზრუნველყოფთ უმაღლეს სტანდარტებს და ინდივიდუალურ მიდგომას თითოეული კანდიდატისთვის.",
                  EN: "Our goal is to give Georgian students access to high-quality international education. As an official representative of Oxford, we ensure the highest standards and an individual approach for each candidate.",
                })}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">{t({ GE: "ექსპერტთა გუნდი", EN: "Expert Team" })}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t({ GE: "პროფესიონალი კონსულტანტები მრავალწლიანი გამოცდილებით.", EN: "Professional consultants with years of experience." })}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">{t({ GE: "გლობალური გზა", EN: "Global Path" })}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{t({ GE: "წვდომა მსოფლიოს წამყვან უნივერსიტეტებსა და კოლეჯებში.", EN: "Access to the world's leading universities and colleges." })}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl"
            >
              <img
                src={ASSETS.MISSION}
                alt="Oxford Library"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-12 -left-12 bg-brand-blue text-white p-12 shadow-2xl max-w-[200px] z-20"
            >
              <Award className="text-brand-gold mb-6" size={32} />
              <div className="text-3xl font-serif mb-1">100%</div>
              <p className="text-[9px] text-white/60 uppercase tracking-widest font-bold">
                {t({ GE: "წარმატების მაჩვენებელი", EN: "Success Rate" })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Admissions - The "Function" Section */}
      <section className="py-48 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <img src="https://picsum.photos/seed/blueprint/1920/1080" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <span className="text-brand-gold font-bold tracking-[0.5em] uppercase text-[9px] mb-6 block">
              {t({ GE: "აკადემიური მენტორინგი", EN: "Academic Mentoring" })}
            </span>
            <h2 className="text-3xl md:text-6xl font-serif text-white mb-10 tracking-tighter">
              {t({ GE: "უნივერსიტეტში ჩაბარების სერვისი", EN: "University Admissions Service" })}
            </h2>
            <p className="text-white/40 text-lg font-light max-w-2xl mx-auto italic">
              {t({ 
                GE: "ჩვენი ექსპერტები დაგეხმარებიან ყველა ეტაპზე - უნივერსიტეტის შერჩევიდან ჩარიცხვამდე. გაიცანით ჩვენი წამყვანი კონსულტანტები.", 
                EN: "Our experts will help you at every stage - from university selection to enrollment. Meet our leading consultants." 
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ConsultantCard 
              name={t({ GE: "ნინო კაპანაძე", EN: "Nino Kapanadze" })}
              role={t({ GE: "უფროსი კონსულტანტი", EN: "Senior Consultant" })}
              image="https://picsum.photos/seed/consultant-nino/600/800"
              available={true}
              specialty={t({ GE: "Oxford & Cambridge", EN: "Oxford & Cambridge" })}
            />
            <ConsultantCard 
              name={t({ GE: "გიორგი ბერიძე", EN: "Giorgi Beridze" })}
              role={t({ GE: "აკადემიური მრჩეველი", EN: "Academic Advisor" })}
              image="https://picsum.photos/seed/consultant-giorgi/600/800"
              available={false}
              specialty={t({ GE: "USA Ivy League", EN: "USA Ivy League" })}
            />
            <ConsultantCard 
              name={t({ GE: "ანა მესხი", EN: "Ana Meskhi" })}
              role={t({ GE: "განათლების ექსპერტი", EN: "Education Expert" })}
              image="https://picsum.photos/seed/consultant-ana/600/800"
              available={true}
              specialty={t({ GE: "European Universities", EN: "European Universities" })}
            />
          </div>

          <div className="mt-32 text-center">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.5em] font-bold text-brand-gold hover:text-white transition-all duration-500 group"
            >
              {t({ GE: "ყველა კონსულტანტის ნახვა", EN: "View All Consultants" })}
              <div className="w-16 h-[1px] bg-brand-gold group-hover:w-32 group-hover:bg-white transition-all duration-700" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-64 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl">
              <span className="text-brand-red font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block">
                {t({ GE: "მიმართულებები", EN: "Destinations" })}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight tracking-tighter">
                {t({ GE: "აღმოაჩინე შენი მომავალი", EN: "Discover Your Future" })}
              </h2>
            </div>
            <Link 
              to="/programs" 
              className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-brand-blue hover:text-brand-red transition-colors duration-500"
            >
              {t({ GE: "ყველა პროგრამა", EN: "View All Programs" })}
              <div className="w-12 h-[1px] bg-brand-blue group-hover:w-24 group-hover:bg-brand-red transition-all duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DestinationCard 
              title={t({ GE: "გაერთიანებული სამეფო", EN: "United Kingdom" })}
              image="https://picsum.photos/seed/uk-london-city/600/800"
              count="12"
              to="/programs?region=UK"
            />
            <DestinationCard 
              title={t({ GE: "აშშ", EN: "USA" })}
              image="https://picsum.photos/seed/usa-ny-city/600/800"
              count="8"
              to="/programs?region=USA"
            />
            <DestinationCard 
              title={t({ GE: "ევროპა", EN: "Europe" })}
              image="https://picsum.photos/seed/europe-paris-city/600/800"
              count="15"
              to="/programs?region=Europe"
            />
            <DestinationCard 
              title={t({ GE: "აზია", EN: "Asia" })}
              image="https://picsum.photos/seed/asia-tokyo-city/600/800"
              count="5"
              to="/programs?region=Asia"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-64 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-32">
            <span className="text-brand-red font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
              {t({ GE: "გამოხმაურებები", EN: "Testimonials" })}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-blue mb-8 tracking-tighter">
              {t({ GE: "რას ამბობენ სტუდენტები", EN: "What Students Say" })}
            </h2>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <TestimonialCard
              name="ლუკა ბერიძე"
              role="Oxford Summer School"
              content={t({
                GE: "დაუვიწყარი გამოცდილება იყო. ოქსფორდში გატარებულმა ორმა კვირამ სრულიად შეცვალა ჩემი ხედვა განათლებაზე.",
                EN: "It was an unforgettable experience. Two weeks at Oxford completely changed my perspective on education.",
              })}
              image="https://picsum.photos/seed/student-luka/200/200"
            />
            <TestimonialCard
              name="მარიამ გეგეშიძე"
              role="University Admissions"
              content={t({
                GE: "კონსულტანტების დახმარებით შევძელი ჩამებარებინა ჩემი ოცნების უნივერსიტეტში გერმანიაში. მადლობა GEN-ს!",
                EN: "With the help of consultants, I was able to get into my dream university in Germany. Thank you GEN!",
              })}
              image="https://picsum.photos/seed/student-mariam/200/200"
            />
            <TestimonialCard
              name="დავით მესხი"
              role="IELTS Preparation"
              content={t({
                GE: "კურსი იყო ძალიან ეფექტური. მოკლე დროში შევძელი სასურველი ქულის აღება და სწავლის გაგრძელება აშშ-ში.",
                EN: "The course was very effective. In a short time, I was able to get the desired score and continue my studies in the USA.",
              })}
              image="https://picsum.photos/seed/student-david/200/200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const HeroOverlayBlock: React.FC<{ label: string; to: string; icon: React.ReactNode; delay: number }> = ({ label, to, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    className="relative group"
  >
    <Link
      to={to}
      className="flex flex-col items-center justify-center p-12 bg-brand-dark/40 backdrop-blur-md hover:bg-brand-red/90 transition-all duration-700 h-full border-r border-white/10 last:border-r-0 overflow-hidden"
    >
      <div className="text-brand-gold group-hover:text-white mb-4 transition-colors duration-500 relative z-10">
        {icon}
      </div>
      <span className="text-white font-bold uppercase text-[9px] tracking-[0.3em] text-center relative z-10 leading-relaxed">
        {label}
      </span>
      <div className="absolute inset-0 bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
    </Link>
  </motion.div>
);

const ConsultantCard: React.FC<{ 
  name: string; 
  role: string; 
  image: string; 
  available: boolean;
  specialty: string;
}> = ({ name, role, image, available, specialty }) => {
  const { t } = useApp();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-700 ${!available && 'grayscale opacity-60'}`}
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
        
        {/* Availability Badge */}
        <div className={`absolute top-8 right-8 px-4 py-2 flex items-center gap-2 backdrop-blur-md rounded-full border ${available ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-slate-500/20 border-slate-500/50 text-slate-400'}`}>
          {available ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
          <span className="text-[9px] font-bold uppercase tracking-widest">
            {available ? t({ GE: "ხელმისაწვდომია", EN: "Available" }) : t({ GE: "დაკავებულია", EN: "Booked" })}
          </span>
        </div>
      </div>

      <div className="p-10">
        <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.3em] mb-3 block">{specialty}</span>
        <h4 className="font-serif text-2xl text-white mb-2">{name}</h4>
        <p className="text-white/40 text-xs mb-8">{role}</p>
        
        {available ? (
          <Link 
            to="/contact" 
            className="flex items-center justify-between group/btn"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover/btn:text-brand-gold transition-colors">
              {t({ GE: "მოითხოვეთ ზარი", EN: "Request a Call" })}
            </span>
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-dark group-hover/btn:bg-white transition-all duration-500">
              <PhoneCall size={16} />
            </div>
          </Link>
        ) : (
          <div className="flex items-center justify-between opacity-50">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">
              {t({ GE: "ადგილები არ არის", EN: "No Slots" })}
            </span>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white">
              <XCircle size={16} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const DestinationCard: React.FC<{ title: string; image: string; count: string; to: string }> = ({ title, image, count, to }) => (
  <Link to={to} className="group relative aspect-[3/4] overflow-hidden block">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
    <div className="absolute inset-0 p-12 flex flex-col justify-end">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[1px] w-8 bg-brand-gold group-hover:w-16 transition-all duration-700" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold">{count} {count === "1" ? "Program" : "Programs"}</span>
      </div>
      <h3 className="text-3xl font-serif text-white leading-tight group-hover:text-brand-gold transition-colors duration-500">{title}</h3>
    </div>
  </Link>
);

const TestimonialCard: React.FC<{ name: string; role: string; content: string; image: string }> = ({
  name,
  role,
  content,
  image,
}) => (
  <motion.div
    whileHover={{ y: -20 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="bg-brand-light p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    
    <div className="w-32 h-32 overflow-hidden mb-12 grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-full border-4 border-white shadow-xl">
      <img src={image} alt={name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" referrerPolicy="no-referrer" />
    </div>
    
    <div className="flex gap-2 mb-8 text-brand-gold">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
    
    <p className="text-slate-500 font-serif italic mb-12 leading-relaxed text-lg font-light">"{content}"</p>
    
    <div className="mt-auto">
      <h4 className="font-serif text-xl text-brand-blue mb-2">{name}</h4>
      <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.4em]">{role}</p>
    </div>
  </motion.div>
);
