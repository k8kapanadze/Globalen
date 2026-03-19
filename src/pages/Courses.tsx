import React, { useState } from "react";
import { useApp } from "../AppContext";
import { COURSES } from "../constants";
import { motion } from "motion/react";
import { BookOpen, CheckCircle, ShoppingCart, Send, User, Phone, Mail } from "lucide-react";

export const Courses: React.FC = () => {
  const { t, addToBasket } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-40 pb-32 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="section-title">
            {t({ GE: "ენების კურსები", EN: "Language Courses" })}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 font-light tracking-wide">
            {t({
              GE: "გაიუმჯობესეთ ენის ცოდნა ჩვენს პროფესიონალ მასწავლებლებთან ერთად.",
              EN: "Improve your language skills with our professional teachers.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {COURSES.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -15 }}
              className="bg-white p-12 shadow-2xl border border-slate-50 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-serif text-brand-blue mb-4">{t(course.title)}</h3>
              <p className="text-slate-400 font-light mb-10 leading-relaxed">{t(course.description)}</p>

              <button
                onClick={() => addToBasket({ id: course.id, type: "course", title: course.title })}
                className="btn-primary w-full flex items-center justify-center gap-3"
              >
                <ShoppingCart size={18} />
                {t({ GE: "კალათაში დამატება", EN: "Add to Basket" })}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-16 lg:p-24 bg-brand-blue text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif mb-10 leading-tight">
                {t({
                  GE: "დარეგისტრირდით უფასო კონსულტაციაზე",
                  EN: "Register for a Free Consultation",
                })}
              </h2>
              <p className="text-white/60 mb-16 text-base font-light leading-relaxed">
                {t({
                  GE: "დაგვიტოვეთ თქვენი საკონტაქტო ინფორმაცია და ჩვენი მენეჯერი დაგიკავშირდებათ კურსის დეტალების განსახილველად.",
                  EN: "Leave your contact information and our manager will contact you to discuss course details.",
                })}
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                    <CheckCircle size={24} className="text-brand-red" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold">{t({ GE: "უფასო ტესტირება", EN: "Free Testing" })}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                    <CheckCircle size={24} className="text-brand-red" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold">{t({ GE: "მოქნილი გრაფიკი", EN: "Flexible Schedule" })}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center border border-white/10">
                    <CheckCircle size={24} className="text-brand-red" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold">{t({ GE: "სერტიფიკატი", EN: "Certificate" })}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16 lg:p-24">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
                  <User size={14} className="text-brand-red" />
                  {t({ GE: "სახელი", EN: "Full Name" })}
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-xl"
                  placeholder={t({ GE: "თქვენი სახელი", EN: "Your Name" })}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
                  <Phone size={14} className="text-brand-red" />
                  {t({ GE: "ტელეფონი", EN: "Phone Number" })}
                </label>
                <input
                  required
                  type="tel"
                  className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-xl"
                  placeholder="+995 5XX XX XX XX"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
                  <Mail size={14} className="text-brand-red" />
                  {t({ GE: "ელ-ფოსტა", EN: "Email Address" })}
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-xl"
                  placeholder="example@mail.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-6 font-bold text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 shadow-2xl ${
                  isSuccess
                    ? "bg-green-600 text-white"
                    : "bg-brand-blue hover:bg-brand-blue/90 text-white"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={20} />
                    {t({ GE: "წარმატებით გაიგზავნა", EN: "Sent Successfully" })}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t({ GE: "რეგისტრაცია", EN: "Register Now" })}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
