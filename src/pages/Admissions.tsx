import React, { useState } from "react";
import { useApp } from "../AppContext";
import { CONSULTANTS } from "../constants";
import { motion, AnimatePresence } from "motion/react";
import { PhoneCall, CheckCircle, XCircle, UserCheck, ShieldCheck, Award, X, Send, User, Phone, Mail } from "lucide-react";
import { ASSETS } from "../assets";

export const Admissions: React.FC = () => {
  const { t } = useApp();
  const [selectedConsultant, setSelectedConsultant] = useState<typeof CONSULTANTS[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRequestCall = (consultant: typeof CONSULTANTS[0]) => {
    if (consultant.isAvailable) {
      setSelectedConsultant(consultant);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedConsultant(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-40 pb-32 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="section-title">
            {t({ GE: "უნივერსიტეტში ჩაბარების მომსახურება", EN: "University Admissions Service" })}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 font-light tracking-wide">
            {t({
              GE: "ჩვენი გამოცდილი კონსულტანტები დაგეხმარებიან შერჩევის, მომზადებისა და ჩაბარების ყველა ეტაპზე.",
              EN: "Our experienced consultants will help you at all stages of selection, preparation, and admission.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
          {CONSULTANTS.map((consultant) => (
            <motion.div
              key={consultant.id}
              whileHover={consultant.isAvailable ? { y: -15 } : {}}
              className={`relative bg-white overflow-hidden shadow-2xl border transition-all duration-700 group ${
                consultant.isAvailable 
                  ? "border-slate-50" 
                  : "border-slate-300 grayscale-[100%] opacity-40 pointer-events-none select-none"
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={consultant.image}
                  alt={t(consultant.name)}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    consultant.isAvailable ? "grayscale group-hover:grayscale-0" : "grayscale-100"
                  }`}
                  referrerPolicy="no-referrer"
                />
                <div
                  className={`absolute top-6 right-6 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 shadow-2xl ${
                    consultant.isAvailable ? "bg-brand-blue text-white" : "bg-slate-800 text-white"
                  }`}
                >
                  {consultant.isAvailable ? <CheckCircle size={10} /> : <XCircle size={10} />}
                  {consultant.isAvailable ? t({ GE: "თავისუფალია", EN: "Available" }) : t({ GE: "დაკავებულია", EN: "Busy" })}
                </div>
              </div>
              <div className="p-12 text-center">
                <h3 className="text-2xl font-serif text-brand-blue mb-2">{t(consultant.name)}</h3>
                <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em] mb-8">{t(consultant.role)}</p>

                <button
                  onClick={() => handleRequestCall(consultant)}
                  disabled={!consultant.isAvailable}
                  className={`w-full py-4 font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                    consultant.isAvailable
                      ? "bg-brand-blue hover:bg-brand-blue/90 text-white shadow-2xl"
                      : "bg-slate-200 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  <PhoneCall size={14} />
                  {t({ GE: "მოითხოვე ზარი", EN: "Request a Call" })}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center shadow-2xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-blue mb-12 leading-tight">
              {t({
                GE: "რატომ უნდა აირჩიოთ ჩვენი საკონსულტაციო მომსახურება?",
                EN: "Why Choose Our Consulting Service?",
              })}
            </h2>
            <div className="space-y-10">
              <FeatureItem
                icon={<UserCheck className="text-brand-red" size={28} />}
                title={t({ GE: "ინდივიდუალური მიდგომა", EN: "Individual Approach" })}
                description={t({
                  GE: "თითოეული სტუდენტისთვის ვადგენთ პერსონალურ სტრატეგიას.",
                  EN: "We develop a personal strategy for each student.",
                })}
              />
              <FeatureItem
                icon={<ShieldCheck className="text-brand-red" size={28} />}
                title={t({ GE: "გარანტირებული ხარისხი", EN: "Guaranteed Quality" })}
                description={t({
                  GE: "ჩვენი ექსპერტები ფლობენ უახლეს ინფორმაციას მოთხოვნების შესახებ.",
                  EN: "Our experts have the latest information about requirements.",
                })}
              />
              <FeatureItem
                icon={<Award className="text-brand-red" size={28} />}
                title={t({ GE: "წარმატების მაღალი მაჩვენებელი", EN: "High Success Rate" })}
                description={t({
                  GE: "ჩვენი სტუდენტების 95% წარმატებით აბარებს სასურველ უნივერსიტეტში.",
                  EN: "95% of our students successfully get into their desired university.",
                })}
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video overflow-hidden shadow-2xl">
              <img
                src={ASSETS.CONFERENCE_HALL}
                alt="Consultation"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-brand-blue text-white p-10 shadow-2xl min-w-[240px]">
              <div className="text-4xl font-serif mb-2">10+</div>
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-[0.3em]">
                {t({ GE: "წლიანი გამოცდილება", EN: "Years of Experience" })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Call Modal */}
      <AnimatePresence>
        {selectedConsultant && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedConsultant(null)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedConsultant(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-brand-blue transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-12">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-gold">
                    <img src={selectedConsultant.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-brand-blue">{t(selectedConsultant.name)}</h3>
                    <p className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">{t(selectedConsultant.role)}</p>
                  </div>
                </div>

                <h4 className="text-xl font-serif text-brand-blue mb-8">
                  {t({ GE: "მოითხოვეთ უფასო კონსულტაცია", EN: "Request a Free Consultation" })}
                </h4>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                      <User size={12} className="text-brand-red" />
                      {t({ GE: "სახელი", EN: "Full Name" })}
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-lg"
                      placeholder={t({ GE: "თქვენი სახელი", EN: "Your Name" })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                      <Phone size={12} className="text-brand-red" />
                      {t({ GE: "ტელეფონი", EN: "Phone Number" })}
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-lg"
                      placeholder="+995 5XX XX XX XX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                      <Mail size={12} className="text-brand-red" />
                      {t({ GE: "ელ-ფოსტა", EN: "Email Address" })}
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-lg"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 font-bold text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 shadow-2xl ${
                      isSuccess
                        ? "bg-green-600 text-white"
                        : "bg-brand-blue hover:bg-brand-blue/90 text-white"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isSuccess ? (
                      <>
                        <CheckCircle size={18} />
                        {t({ GE: "წარმატებით გაიგზავნა", EN: "Sent Successfully" })}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {t({ GE: "გაგზავნა", EN: "Send Request" })}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex gap-6">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="text-xl font-serif text-brand-blue mb-2">{title}</h4>
      <p className="text-sm text-slate-400 font-light leading-relaxed">{description}</p>
    </div>
  </div>
);
