import React, { useState } from "react";
import { useApp } from "../AppContext";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, ShoppingBag, CheckCircle, Send, User, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Basket: React.FC = () => {
  const { basket, removeFromBasket, clearBasket, t } = useApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const contactInfo = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: basket, contactInfo }),
      });

      if (response.ok) {
        setIsSuccess(true);
        clearBasket();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-40 pb-32 bg-brand-light min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white p-20 shadow-2xl text-center border border-slate-50"
        >
          <div className="w-24 h-24 bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-10 border border-green-100">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-4xl font-serif text-brand-blue mb-6">
            {t({ GE: "შეკვეთა მიღებულია!", EN: "Order Received!" })}
          </h1>
          <p className="text-slate-400 mb-12 font-light leading-relaxed tracking-wide">
            {t({
              GE: "თქვენი მოთხოვნა წარმატებით გაიგზავნა. ჩვენი მენეჯერი მალე დაგიკავშირდებათ დეტალების დასაზუსტებლად.",
              EN: "Your request has been sent successfully. Our manager will contact you soon to clarify the details.",
            })}
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-3 px-12 py-5"
          >
            {t({ GE: "მთავარ გვერდზე დაბრუნება", EN: "Back to Home" })}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title flex items-center gap-6">
          <ShoppingBag size={40} className="text-brand-red" />
          {t({ GE: "თქვენი კალათა", EN: "Your Basket" })}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="popLayout">
              {basket.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white p-20 text-center border border-slate-50 shadow-2xl"
                >
                  <p className="text-slate-400 text-xl font-light mb-10 tracking-wide">
                    {t({ GE: "კალათა ცარიელია", EN: "Your basket is empty" })}
                  </p>
                  <Link
                    to="/programs"
                    className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs hover:underline flex items-center justify-center gap-3"
                  >
                    {t({ GE: "პროგრამების დათვალიერება", EN: "Browse Programs" })}
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ) : (
                basket.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white p-8 flex items-center justify-between shadow-2xl border border-slate-50 group"
                  >
                    <div className="flex items-center gap-8">
                      <div className="w-20 h-20 bg-brand-blue/5 text-brand-blue font-serif text-3xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                        {item.type === "program" ? "P" : "C"}
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif text-brand-blue mb-2">{t(item.title)}</h3>
                        <p className="text-[10px] text-brand-red uppercase font-bold tracking-[0.3em]">
                          {item.type === "program"
                            ? t({ GE: "საერთაშორისო პროგრამა", EN: "International Program" })
                            : t({ GE: "ენის კურსი", EN: "Language Course" })}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromBasket(item.id)}
                      className="p-4 text-slate-300 hover:text-brand-red hover:bg-brand-red/5 transition-all"
                    >
                      <Trash2 size={24} />
                    </button>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-12 shadow-2xl border border-slate-50 sticky top-40">
              <h2 className="text-3xl font-serif text-brand-blue mb-10">
                {t({ GE: "გაფორმება", EN: "Checkout" })}
              </h2>
              <form onSubmit={handleCheckout} className="space-y-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
                    <User size={14} className="text-brand-red" />
                    {t({ GE: "სახელი", EN: "Full Name" })}
                  </label>
                  <input
                    required
                    name="name"
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
                    name="phone"
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
                    name="email"
                    type="email"
                    className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-xl"
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="pt-10 border-t border-slate-100 mt-12">
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{t({ GE: "სულ", EN: "Total" })}:</span>
                    <span className="text-3xl font-serif text-brand-blue">
                      {basket.length} {t({ GE: "ერთეული", EN: "Items" })}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || basket.length === 0}
                    className="btn-primary w-full py-6 flex items-center justify-center gap-4"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        {t({ GE: "შეკვეთა", EN: "Place Order" })}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
