import React, { useState } from "react";
import { useApp } from "../AppContext";
import { PROGRAMS } from "../constants";
import { Program } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Info, CheckCircle, ShoppingCart, ArrowLeft, Image as ImageIcon } from "lucide-react";

export const Programs: React.FC = () => {
  const { t, addToBasket } = useApp();
  const [selectedRegion, setSelectedRegion] = useState<Program["region"] | "All">("All");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const filteredPrograms =
    selectedRegion === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.region === selectedRegion);

  const regions: (Program["region"] | "All")[] = ["All", "UK", "USA", "Europe", "Asia"];

  if (selectedProgram) {
    return (
      <div className="pt-48 pb-40 bg-brand-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => setSelectedProgram(null)}
            className="flex items-center gap-6 text-brand-blue/40 hover:text-brand-red transition-all mb-16 uppercase text-[10px] font-bold tracking-[0.4em] group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            {t({ GE: "უკან დაბრუნება", EN: "Back to Programs" })}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] mb-12 grayscale hover:grayscale-0 transition-all duration-1000">
                <img
                  src={selectedProgram.image}
                  alt={t(selectedProgram.title)}
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                {selectedProgram.gallery.map((img, i) => (
                  <div key={i} className="aspect-video overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-1000">
                    <img src={img} alt="Gallery" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 text-brand-red font-bold uppercase tracking-[0.5em] text-[10px] mb-10">
                <MapPin size={14} />
                {selectedProgram.region}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-brand-blue">{t(selectedProgram.title)}</h1>
              <p className="text-lg text-slate-500 font-light leading-relaxed mb-16 italic">{t(selectedProgram.description)}</p>

              <div className="bg-white p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 mb-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />
                <h3 className="font-serif text-3xl text-brand-blue mb-8 flex items-center gap-4">
                  <Info size={28} className="text-brand-red" />
                  {t({ GE: "მონაწილეობის პირობები", EN: "Participation Conditions" })}
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg font-light italic">{t(selectedProgram.conditions)}</p>
              </div>

              <button
                onClick={() => addToBasket({ id: selectedProgram.id, type: "program", title: selectedProgram.title })}
                className="btn-primary flex items-center justify-center gap-6 py-6 group"
              >
                <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                {t({ GE: "კალათაში დამატება", EN: "Add to Basket" })}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-40 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
          <span className="text-brand-red font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
            {t({ GE: "საერთაშორისო პროგრამები", EN: "International Programs" })}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-blue mb-10">
            {t({ GE: "აღმოაჩინეთ სამყარო", EN: "Discover the World" })}
          </h1>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-16 font-light italic">
            {t({
              GE: "აღმოაჩინეთ საუკეთესო საგანმანათლებლო შესაძლებლობები მსოფლიოს მასშტაბით.",
              EN: "Discover the best educational opportunities across the globe.",
            })}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-10 py-3 font-bold text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${
                  selectedRegion === region
                    ? "bg-brand-blue text-white shadow-2xl shadow-brand-blue/20"
                    : "bg-white text-slate-400 hover:text-brand-blue border border-slate-100"
                }`}
              >
                {region === "All" ? t({ GE: "ყველა", EN: "All" }) : region}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 group cursor-pointer relative"
                onClick={() => setSelectedProgram(program)}
              >
                <div className="aspect-[4/5] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img
                    src={program.image}
                    alt={t(program.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 bg-brand-red text-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl">
                    {program.region}
                  </div>
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-12">
                  <h3 className="text-2xl font-serif text-brand-blue mb-4 group-hover:text-brand-red transition-colors duration-500">
                    {t(program.title)}
                  </h3>
                  <p className="text-slate-500 font-light italic line-clamp-2 mb-10 text-base leading-relaxed">{t(program.description)}</p>
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] flex items-center gap-3 group-hover:text-brand-red transition-colors">
                      <Info size={14} />
                      {t({ GE: "დეტალურად", EN: "Details" })}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToBasket({ id: program.id, type: "program", title: program.title });
                      }}
                      className="w-12 h-12 flex items-center justify-center bg-brand-light hover:bg-brand-red hover:text-white transition-all duration-500 text-brand-blue shadow-sm"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
