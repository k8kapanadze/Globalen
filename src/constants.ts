import { NavItem, Program, Consultant, Course } from "./types";
import { ASSETS } from "./assets";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: { GE: "მთავარი", EN: "Home" }, path: "/" },
  { id: "about", label: { GE: "ჩვენს შესახებ", EN: "About Us" }, path: "/about" },
  { id: "programs", label: { GE: "საერთაშორისო პროგრამები", EN: "International Programs" }, path: "/programs" },
  { id: "admissions", label: { GE: "აკადემიური მენტორინგი", EN: "University Admissions" }, path: "/admissions" },
  { id: "courses", label: { GE: "ენობრივი აკადემია", EN: "Language Academy" }, path: "/courses" },
  { id: "gallery", label: { GE: "გალერეა", EN: "Gallery" }, path: "/gallery" },
  { id: "blog", label: { GE: "ბლოგი", EN: "Blog" }, path: "/blog" },
  { id: "contact", label: { GE: "კონტაქტი", EN: "Contact" }, path: "/contact" },
];

export const PROGRAMS: Program[] = [
  {
    id: "uk-oxford",
    region: "UK",
    title: { GE: "ოქსფორდის საზაფხულო სკოლა", EN: "Oxford Summer School" },
    description: { GE: "ექსკლუზიური აკადემიური პროგრამა ოქსფორდის უნივერსიტეტში. გაატარეთ დაუვიწყარი ზაფხული მსოფლიოს საუკეთესო საგანმანათლებლო გარემოში.", EN: "Exclusive academic program at Oxford University. Spend an unforgettable summer in the world's best educational environment." },
    conditions: { GE: "ასაკი: 14-18 წელი. ინგლისურის დონე: B2+. აკადემიური მოსწრება: მაღალი.", EN: "Age: 14-18. English level: B2+. Academic performance: High." },
    image: ASSETS.HERO_2,
    gallery: [ASSETS.STUDENT_CIRCLE, ASSETS.ACADEMIC_DEBATE],
  },
  {
    id: "usa-ivy",
    region: "USA",
    title: { GE: "Ivy League მოსამზადებელი პროგრამა", EN: "Ivy League Prep Program" },
    description: { GE: "ინტენსიური აკადემიური გამოცდილება ამერიკის წამყვან უნივერსიტეტებში. მოემზადეთ წარმატებული კარიერისთვის აშშ-ში.", EN: "Intensive academic experience at leading US universities. Prepare for a successful career in the USA." },
    conditions: { GE: "ასაკი: 16-21 წელი. ინგლისურის დონე: C1. SAT/ACT ქულები: სასურველი.", EN: "Age: 16-21. English level: C1. SAT/ACT scores: Preferred." },
    image: ASSETS.CONFERENCE_HALL,
    gallery: [ASSETS.LARGE_GROUP, ASSETS.ACADEMIC_DEBATE],
  },
  {
    id: "europe-elite",
    region: "Europe",
    title: { GE: "ევროპის ელიტური უნივერსიტეტების ტური", EN: "Elite European University Tour" },
    description: { GE: "გაეცანით ევროპის წამყვან საგანმანათლებლო ცენტრებს გერმანიაში, საფრანგეთსა და შვეიცარიაში.", EN: "Get to know Europe's leading educational centers in Germany, France, and Switzerland." },
    conditions: { GE: "ასაკი: 17-22 წელი. ენის ცოდნა: B2+. მოტივაცია: მაღალი.", EN: "Age: 17-22. Language: B2+. Motivation: High." },
    image: ASSETS.HERO_3,
    gallery: [ASSETS.HERO_1, ASSETS.STUDENT_CIRCLE],
  },
  {
    id: "asia-future",
    region: "Asia",
    title: { GE: "აზიის მომავლის ლიდერების პროგრამა", EN: "Asia Future Leaders Program" },
    description: { GE: "აღმოაჩინეთ აზიის ინოვაციური საგანმანათლებლო სისტემა იაპონიასა და სამხრეთ კორეაში.", EN: "Discover Asia's innovative educational system in Japan and South Korea." },
    conditions: { GE: "ასაკი: 15-20 წელი. ინგლისურის დონე: B2. ინტერესი ტექნოლოგიებისადმი.", EN: "Age: 15-20. English level: B2. Interest in technology." },
    image: ASSETS.LARGE_GROUP,
    gallery: [ASSETS.CONFERENCE_HALL, ASSETS.STUDENT_CIRCLE],
  },
];

export const CONSULTANTS: Consultant[] = [
  {
    id: "c1",
    name: { GE: "ნინო კაპანაძე", EN: "Nino Kapanadze" },
    role: { GE: "აკადემიური მენტორი", EN: "Academic Mentor" },
    image: ASSETS.MISSION,
    isAvailable: true,
  },
  {
    id: "c2",
    name: { GE: "გიორგი ბერიძე", EN: "Giorgi Beridze" },
    role: { GE: "უნივერსიტეტში ჩაბარების სტრატეგი", EN: "Admissions Strategist" },
    image: ASSETS.ACADEMIC_DEBATE,
    isAvailable: false,
  },
  {
    id: "c3",
    name: { GE: "ანა მესხი", EN: "Ana Meskhi" },
    role: { GE: "საერთაშორისო განათლების ექსპერტი", EN: "International Education Expert" },
    image: ASSETS.STUDENT_CIRCLE,
    isAvailable: true,
  },
];

export const COURSES: Course[] = [
  {
    id: "gen-eng",
    title: { GE: "ზოგადი ინგლისური", EN: "General English" },
    description: { GE: "სტრუქტურირებული კურსი კომუნიკაციის უნარების სრულყოფისთვის.", EN: "Structured course for perfecting communication skills." },
  },
  {
    id: "ielts",
    title: { GE: "IELTS მომზადება", EN: "IELTS Preparation" },
    description: { GE: "ინტენსიური აკადემიური მომზადება საერთაშორისო სერტიფიკატისთვის.", EN: "Intensive academic preparation for the international certificate." },
  },
  {
    id: "bus-eng",
    title: { GE: "ბიზნეს ინგლისური", EN: "Business English" },
    description: { GE: "პროფესიული ენობრივი უნარები გლობალური კარიერული წინსვლისთვის.", EN: "Professional language skills for global career advancement." },
  },
];
