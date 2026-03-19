import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../AppContext";
import { NAV_ITEMS } from "../constants";
import { ShoppingBasket, Menu, X, Globe, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { ASSETS } from "../assets";

export const Header: React.FC = () => {
  const { language, setLanguage, basket, t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] py-4" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="h-14 transition-all duration-700 group-hover:scale-110">
            <img src={ASSETS.LOGO} alt="GEN Logo" className="h-full w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-16">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:text-brand-red relative group/nav",
                location.pathname === item.path
                  ? "text-brand-red"
                  : isScrolled ? "text-brand-blue/80" : "text-white/70"
              )}
            >
              {t(item.label)}
              <span className={cn(
                "absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-red transition-all duration-500 group-hover/nav:w-full",
                location.pathname === item.path && "w-full"
              )} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            to="/apply"
            className={cn(
              "hidden md:flex items-center gap-3 text-[10px] font-bold px-8 py-4 transition-all duration-500 tracking-[0.3em] uppercase group/apply relative overflow-hidden",
              isScrolled 
                ? "bg-brand-red text-white hover:bg-brand-blue shadow-lg shadow-brand-red/20" 
                : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-brand-red hover:border-brand-red"
            )}
          >
            <span className="relative z-10">{t({ GE: "რეგისტრაცია", EN: "Apply Now" })}</span>
            <ArrowRight size={14} className="relative z-10 group-hover/apply:translate-x-2 transition-transform duration-500" />
          </Link>

          <button
            onClick={() => setLanguage(language === "GE" ? "EN" : "GE")}
            className={cn(
              "flex items-center gap-2 text-[10px] font-bold px-4 py-2 border transition-all duration-500 tracking-widest uppercase",
              isScrolled ? "border-slate-200 text-slate-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue" : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            <Globe size={14} />
            {language}
          </button>

          <Link
            to="/basket"
            className={cn(
              "relative p-3 transition-all duration-500 group",
              isScrolled ? "text-slate-600 hover:text-brand-red" : "text-white hover:text-brand-red"
            )}
          >
            <ShoppingBasket size={22} className="group-hover:scale-110 transition-transform" />
            {basket.length > 0 && (
              <span className="absolute top-0 right-0 bg-brand-red text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {basket.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "lg:hidden p-3 transition-all duration-500",
              isScrolled ? "text-slate-600 hover:text-brand-red" : "text-white hover:text-brand-red"
            )}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 overflow-hidden lg:hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-bold uppercase tracking-[0.3em] p-4 transition-all duration-500",
                    location.pathname === item.path ? "text-brand-red bg-brand-light" : "text-brand-blue hover:text-brand-red hover:bg-brand-light"
                  )}
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer: React.FC = () => {
  const { t } = useApp();
  return (
    <footer className="bg-brand-dark text-white py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-24 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-6 mb-12 group">
            <div className="h-16 transition-all duration-700 group-hover:scale-110">
              <img src={ASSETS.LOGO} alt="GEN Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
          <p className="text-white/40 text-lg leading-relaxed max-w-md font-light italic tracking-wide">
            {t({
              GE: "ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში. ჩვენ ვეხმარებით სტუდენტებს საერთაშორისო განათლების მიღებაში.",
              EN: "Oxford's first and only official representative in Georgia. We help students achieve international education.",
            })}
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-12 text-brand-red">
            {t({ GE: "ნავიგაცია", EN: "Navigation" })}
          </h4>
          <nav className="flex flex-col gap-6 text-[10px] text-white/50 tracking-[0.3em] uppercase font-bold">
            {NAV_ITEMS.map((item) => (
              <Link key={item.id} to={item.path} className="hover:text-brand-red transition-colors duration-500">
                {t(item.label)}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-12 text-brand-red">
            {t({ GE: "კონტაქტი", EN: "Contact" })}
          </h4>
          <div className="text-[10px] text-white/50 space-y-10 tracking-[0.3em] uppercase font-bold">
            <div className="flex flex-col gap-3">
              <span className="text-[8px] text-white/20 tracking-[0.5em]">Email</span>
              <a href="mailto:info@gen.ge" className="hover:text-white transition-colors">info@gen.ge</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[8px] text-white/20 tracking-[0.5em]">Phone</span>
              <a href="tel:+995322123456" className="hover:text-white transition-colors">+995 322 123 456</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[8px] text-white/20 tracking-[0.5em]">Address</span>
              <span className="text-white/40">Tbilisi, Georgia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
        <span>© {new Date().getFullYear()} Global Education Network. All Rights Reserved.</span>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors duration-500">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
