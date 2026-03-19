import React from "react";
import { useApp } from "../AppContext";
import { motion } from "motion/react";
import { History, Award, Users, Quote, Globe, GraduationCap } from "lucide-react";
import { ASSETS } from "../assets";

export const About: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="pt-40 pb-32 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
          <h1 className="section-title">
            {t({ GE: "ჩვენს შესახებ", EN: "About Us" })}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed tracking-wide">
            {t({
              GE: "გლობალური განათლების ქსელი - თქვენი გზამკვლევი საერთაშორისო განათლების სამყაროში.",
              EN: "Global Education Network - Your guide to the world of international education.",
            })}
          </p>
        </div>

        {/* Founder Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src={ASSETS.MISSION}
                alt="Founder"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-brand-blue text-white p-12 shadow-2xl max-w-sm hidden md:block">
              <Quote className="text-brand-red mb-6" size={40} />
              <p className="text-xl italic font-serif leading-relaxed text-white/90">
                {t({
                  GE: "ჩვენი მიზანია, თითოეულ სტუდენტს მივცეთ შესაძლებლობა, მიაღწიოს მაქსიმუმს თავის აკადემიურ კარიერაში.",
                  EN: "Our goal is to give each student the opportunity to reach their maximum potential in their academic career.",
                })}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
              {t({ GE: "დამფუძნებელი", EN: "Founder" })}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue mb-10 leading-tight">
              {t({ GE: "ჩვენი ხედვა და ღირებულებები", EN: "Our Vision and Values" })}
            </h2>
            <div className="space-y-8 text-slate-400 text-lg font-light leading-relaxed">
              <p>
                {t({
                  GE: "როგორც ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში, ჩვენ ვგრძნობთ დიდ პასუხისმგებლობას. ჩვენი ისტორია დაიწყო სურვილით, შეგვექმნა ხიდი ქართველ ახალგაზრდებსა და მსოფლიოს წამყვან საგანმანათლებლო ცენტრებს შორის.",
                  EN: "As the first and only official representative of Oxford in Georgia, we feel a great responsibility. Our history began with a desire to create a bridge between Georgian youth and the world's leading educational centers.",
                })}
              </p>
              <p>
                {t({
                  GE: "ჩვენი გუნდი შედგება პროფესიონალებისგან, რომლებსაც აქვთ მრავალწლიანი გამოცდილება საერთაშორისო პროგრამების მართვაში. ჩვენ გვჯერა, რომ განათლება არის საუკეთესო ინვესტიცია მომავალში.",
                  EN: "Our team consists of professionals with years of experience in managing international programs. We believe that education is the best investment in the future.",
                })}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Achievements */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          <AboutCard
            icon={<History className="text-brand-red" size={28} />}
            title={t({ GE: "ისტორია", EN: "History" })}
            description={t({
              GE: "10 წელზე მეტია ვემსახურებით ქართველ სტუდენტებს და ვეხმარებით მათ წარმატების მიღწევაში.",
              EN: "For over 10 years, we have been serving Georgian students and helping them achieve success.",
            })}
          />
          <AboutCard
            icon={<Award className="text-brand-red" size={28} />}
            title={t({ GE: "მიღწევები", EN: "Achievements" })}
            description={t({
              GE: "ჩვენი სტუდენტები სწავლობენ მსოფლიოს ტოპ 50 უნივერსიტეტში, მათ შორის ოქსფორდსა და კემბრიჯში.",
              EN: "Our students study at the world's top 50 universities, including Oxford and Cambridge.",
            })}
          />
          <AboutCard
            icon={<Users className="text-brand-red" size={28} />}
            title={t({ GE: "დელეგაციები", EN: "Delegations" })}
            description={t({
              GE: "ყოველწლიურად ვაწყობთ საგანმანათლებლო დელეგაციებს ევროპასა და აშშ-ში.",
              EN: "Every year we organize educational delegations to Europe and the USA.",
            })}
          />
        </section>
      </div>
    </div>
  );
};

const AboutCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-12 shadow-2xl border border-slate-50 transition-all hover:border-brand-blue/20 group">
    <div className="w-16 h-16 bg-brand-blue/5 flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">{icon}</div>
    <h3 className="text-2xl font-serif text-brand-blue mb-4">{title}</h3>
    <p className="text-slate-400 font-light leading-relaxed">{description}</p>
  </div>
);

export const Gallery: React.FC = () => {
  const { t } = useApp();
  const images = [
    ASSETS.HERO_1,
    ASSETS.HERO_2,
    ASSETS.HERO_3,
    ASSETS.MISSION,
    ASSETS.ACADEMIC_DEBATE,
    ASSETS.CONFERENCE_HALL,
    ASSETS.LARGE_GROUP,
    ASSETS.STUDENT_CIRCLE,
  ];

  return (
    <div className="pt-40 pb-32 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="section-title">{t({ GE: "გალერეა", EN: "Gallery" })}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            {t({
              GE: "იხილეთ ფოტოები ჩვენი წინა პროგრამებიდან და დელეგაციებიდან.",
              EN: "See photos from our previous programs and delegations.",
            })}
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden shadow-2xl border border-white group"
            >
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const { t } = useApp();

  return (
    <div className="pt-40 pb-32 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="section-title">{t({ GE: "კონტაქტი", EN: "Contact" })}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            {t({
              GE: "დაგვიკავშირდით ნებისმიერ დროს. ჩვენ მზად ვართ გიპასუხოთ ყველა კითხვაზე.",
              EN: "Contact us anytime. We are ready to answer all your questions.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ContactInfoCard
                title={t({ GE: "ტელეფონი", EN: "Phone" })}
                value="+995 322 123 456"
                description={t({ GE: "ორშაბათი-პარასკევი, 10:00-18:00", EN: "Monday-Friday, 10:00-18:00" })}
              />
              <ContactInfoCard
                title={t({ GE: "ელ-ფოსტა", EN: "Email" })}
                value="info@gen.ge"
                description={t({ GE: "მოგვწერეთ ნებისმიერ დროს", EN: "Write to us anytime" })}
              />
            </div>

            <div className="bg-white p-16 shadow-2xl border border-slate-50">
              <h3 className="text-2xl font-serif text-brand-blue mb-8">{t({ GE: "მისამართი", EN: "Address" })}</h3>
              <p className="text-slate-400 font-light mb-10">Tbilisi, Georgia. Rustaveli Ave. 1</p>
              <div className="aspect-video bg-slate-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.826315516!2d44.798!3d41.716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzU3LjYiTiA0NMKwNDcnNTIuOCJF!5e0!3m2!1sen!2sge!4v1620000000000!5m2!1sen!2sge"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-16 shadow-2xl border border-slate-50">
            <h3 className="text-3xl font-serif text-brand-blue mb-12">{t({ GE: "მოგვწერეთ", EN: "Message Us" })}</h3>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{t({ GE: "სახელი", EN: "Name" })}</label>
                  <input type="text" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-xl" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{t({ GE: "ელ-ფოსტა", EN: "Email" })}</label>
                  <input type="email" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-xl" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{t({ GE: "შეტყობინება", EN: "Message" })}</label>
                <textarea rows={4} className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-brand-blue transition-all outline-none font-serif text-xl resize-none" />
              </div>
              <button className="btn-primary w-full py-6">
                {t({ GE: "გაგზავნა", EN: "Send Message" })}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard: React.FC<{ title: string; value: string; description: string }> = ({ title, value, description }) => (
  <div className="bg-white p-10 shadow-2xl border border-slate-50 group hover:border-brand-blue/20 transition-all">
    <h4 className="text-[10px] font-bold text-brand-red uppercase tracking-[0.4em] mb-4">{title}</h4>
    <p className="text-2xl font-serif text-brand-blue mb-2">{value}</p>
    <p className="text-xs text-slate-400 font-light tracking-wide">{description}</p>
  </div>
);
