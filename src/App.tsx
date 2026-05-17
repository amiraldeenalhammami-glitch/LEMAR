import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Facebook, 
  Globe, 
  Layers, 
  Lightbulb, 
  Maximize2,
  Menu,
  Play,
  ShieldCheck,
  Hammer,
  Users,
  Cpu,
  Monitor,
  Printer,
  Sparkles,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const IMAGE_BASE = "https://lh3.googleusercontent.com/d/";
const LOGO_EXPO = "1VQCJ0eMdybAAtnUfo1D2Zx1_-UoZwybm";
const LOGO_ACADEMY = "14dBYLCk0r6mL6DjYUzvud2TsZQFymv7D";
const VIDEO_PREVIEW = "https://docs.google.com/file/d/1eN-gYRmQ4ulvezUD8vlPbI4rCtJsg55S/preview";

const SERVICES = [
  {
    title: "تصميم استراتيجي للستاند",
    desc: "نصمم أجنحة معارض مدروسة لتعزيز ظهور العلامة التجارية وجذب الزوار وتحسين تجربة العرض داخل المساحة.",
    icon: Layers
  },
  {
    title: "تنفيذ مطابق للتصميم",
    desc: "نضمن تنفيذ الجناح بدقة عالية وبنفس المواصفات المعتمدة في التصميم، مع إشراف هندسي كامل حتى التسليم.",
    icon: ShieldCheck
  },
  {
    title: "إدارة وتجهيز الجناح",
    desc: "نتولى تجهيز الجناح بالكامل قبل المعرض، من التركيب والتشطيبات حتى الجاهزية التشغيلية الكاملة.",
    icon: Hammer
  },
  {
    title: "كادر دعم احترافي",
    desc: "نوفر فريق استقبال وتمثيل مدرّب على شرح خدمات ومنتجات العميل باحترافية داخل الجناح.",
    icon: Users
  },
  {
    title: "حلول رقمية للزوار",
    desc: "تجهيز أنظمة ذكية لتسجيل بيانات العملاء والزوار وتسهيل المتابعة التسويقية بعد المعرض.",
    icon: Cpu
  },
  {
    title: "تجهيز تقني متكامل",
    desc: "توفير شاشات عرض، أنظمة صوت، إنترنت خاص، وأدوات تقنية داعمة لتجربة عرض حديثة.",
    icon: Monitor
  },
  {
    title: "إنتاج بصري وتسويقي",
    desc: "تصميم وطباعة المواد البصرية والإعلانية الخاصة بالجناح بما يعزز هوية الشركة أثناء الحدث.",
    icon: Printer
  }
];

const MAIN_GALLERY = [
  "1HtOxnSyhgV8NyYiAP-uxlPhL0ZbNo6fe",
  "1UXqJkqjrMP_tYtg1ObUHF9HY33L27ApL",
  "1xPRavDFlmFONAzsJVTV04z5oGKB5FwU6",
  "1YeBmhEO1jObiOYUWzfgdqnOiBqG6jPYP",
  "1qbwaZuS0IhxNoKTLKIfywwjUQm8baJ9g",
  "1tOm6_70ooUj5IvjHuYWa5ZItk_LgQ8LR",
  "1JMjIu37QUGd3PjnbMmxTYmNRy_yn-iiQ",
  "1AgDb-zX0emsywgJFK2bj7ki-TXFc4y4b",
  "1utgi-YLUAUIsuls7vSL3w59ZSL1eKW0g",
  "1OXrlahhh0Kd-3U8nc9p5O2P9GopAdy6S"
];

const LIGHTING_STUDY = [
  "1yJv5mZD13a0C4bS0aTrs3yL2-w5R28_t",
  "1deyqAxJoNKcSV4fGlfZnJ70zLRhIoJgU",
  "11EFv5P0oUO-hON8vsfsjfolD3b7FP24Y",
  "1xYs-daoCl_AvKYZHZB2t3LW8LYhVTPy_",
  "1HtOxnSyhgV8NyYiAP-uxlPhL0ZbNo6fe",
  "1EOXmAEuVjSUcMdkfRn-UuIt9Hxejp1Fy",
  "1K7p4sAUt-bjQPvO7Vlfb7EK1ezlzmta4"
];

const LogoAb3adLogo = ({ id, className = "w-12 h-12" }: { id: string, className?: string }) => (
  <div className={`${className} bg-white rounded-2xl flex items-center justify-center shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden`}>
    <img src={`${IMAGE_BASE}${id}`} className="w-full h-full object-contain p-1" alt="Logo" referrerPolicy="no-referrer" />
  </div>
);

const LogoExpo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <LogoAb3adLogo id={LOGO_EXPO} className={className} />
);

const LogoAcademy = ({ className = "w-12 h-12" }: { className?: string }) => (
  <LogoAb3adLogo id={LOGO_ACADEMY} className={className} />
);

const LogoLemar = () => (
  <a href="https://lemarlighting.com/" target="_blank" className="flex flex-col items-start leading-none font-black tracking-tighter hover:opacity-80 transition-opacity">
    <span className="text-burgundy text-4xl">LEMAR</span>
    <span className="text-ink text-sm tracking-[0.4em] mr-1">LIGHTING</span>
  </a>
);

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 border-b border-ink/5 bg-beige-100/95 backdrop-blur-2xl">
    <div className="container mx-auto flex justify-between items-center" dir="rtl">
      <a href="https://exposyria.ab3adacademy.com/" target="_blank" className="flex items-center gap-3 md:gap-5 group cursor-pointer">
        <LogoExpo className="w-10 h-10 md:w-14 h-14" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-lg md:text-2xl leading-tight text-ink">أبعاد معارض سوريا</span>
            <div className="w-2 h-2 bg-burgundy rounded-full animate-ping hidden md:block" />
          </div>
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] text-burgundy uppercase font-bold">Syrian Exhibition Excellence</span>
        </div>
      </a>
      <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-ink/60">
        <a href="#services" className="hover:text-burgundy transition-all hover:scale-110">AB3AD EXPOSYRIA</a>
        <a href="#gallery" className="hover:text-burgundy transition-all hover:scale-110">المعرض</a>
        <a href="#lighting" className="hover:text-burgundy transition-all hover:scale-110">دراسة الضوء</a>
        <a href="#video" className="hover:text-burgundy transition-all hover:scale-110">العرض السينمائي</a>
        <a 
          href="https://api.whatsapp.com/send/?phone=%2B963969558304&text&type=phone_number&app_absent=0" 
          target="_blank"
          className="px-6 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center gap-2"
        >
          تواصل معنا
        </a>
        <a href="#legal" className="px-6 py-2.5 bg-burgundy text-white rounded-full hover:bg-ink transition-colors shadow-lg shadow-burgundy/20">الحقوق</a>
      </div>
      <button className="lg:hidden text-burgundy p-2"><Menu className="w-7 h-7 md:w-8 h-8" /></button>
    </div>
  </header>
);

const LightingCarousel = ({ active, setActive }: { active: number, setActive: (n: number | ((p: number) => number)) => void }) => {
  const next = () => setActive((p) => (p + 1) % LIGHTING_STUDY.length);
  const prev = () => setActive((p) => (p - 1 + LIGHTING_STUDY.length) % LIGHTING_STUDY.length);

  return (
    <div className="relative group w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[1px] border-white/10" dir="rtl">
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={`${IMAGE_BASE}${LIGHTING_STUDY[active]}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className="w-full aspect-video object-contain bg-zinc-950"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between items-center z-20 pointer-events-none w-full px-4 left-0">
        <button onClick={prev} className="w-12 h-12 md:w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/5 text-white/30 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all pointer-events-auto">
          <ChevronRight className="w-8 h-8 md:w-10 h-10" />
        </button>
        <button onClick={next} className="w-12 h-12 md:w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/5 text-white/30 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all pointer-events-auto">
          <ChevronLeft className="w-8 h-8 md:w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [activeLighting, setActiveLighting] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setActiveLighting((p) => (p + 1) % LIGHTING_STUDY.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleZoom = () => {
    setZoomScale(prev => {
      if (prev === 1) return 2.5;
      if (prev === 2.5) return 4.5;
      return 1;
    });
  };

  return (
    <div className="min-h-screen luxury-grid selection:bg-burgundy selection:text-white" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2 }} 
            className="lg:order-2 relative"
          >
            <div className="absolute -inset-10 bg-burgundy/10 rounded-full blur-[120px] -z-10" />
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(128,0,32,0.3)] border-[8px] md:border-[15px] border-white relative group">
              <img src={`${IMAGE_BASE}${MAIN_GALLERY[0]}`} className="w-full h-full object-contain bg-white transition-transform duration-1000 group-hover:scale-110" alt="Main View" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 p-6 md:p-10 bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border border-burgundy/10 flex items-center gap-4 md:gap-6 animate-bounce-slow">
               <LogoLemar />
               <div className="h-8 md:h-12 w-px bg-ink/10" />
               <div className="flex flex-col">
                  <div className="text-[8px] md:text-[10px] font-black uppercase text-burgundy tracking-widest">Featured At</div>
                  <div className="text-lg md:text-2xl font-serif font-black">BUILDEX 2026</div>
               </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="space-y-8 md:space-y-14 lg:order-1">
            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="w-12 md:w-20 h-1 bg-burgundy rounded-full" />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-burgundy">Architectural Excellence</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[11rem] xl:text-[13rem] font-serif font-black text-ink leading-[0.8] lg:leading-[0.7] tracking-tighter">
                <a href="https://lemarlighting.com/" target="_blank" className="hover:text-burgundy transition-colors">LEMAR</a> <br /> <span className="text-burgundy italic">Exhibition</span>
              </h1>
              <p className="text-xl md:text-3xl text-ink/60 font-serif italic pr-6 md:pr-12 border-r-4 md:border-r-8 border-burgundy max-w-2xl leading-relaxed">
                دراسة تصميمية متكاملة لصالح شركة <a href="https://lemarlighting.com/" target="_blank" className="text-ink font-black border-b-2 md:border-b-4 border-burgundy/20 hover:border-burgundy transition-colors">ليمار للانارة والكهربائيات</a>، تهدف لتقديم تجربة بصرية غامرة تجمع بين فخامة الإضاءة وهندسة الفراغ.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 md:gap-10 items-center pt-6 md:pt-10">
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} 
                className="px-8 md:px-14 py-5 md:py-7 bg-ink text-white rounded-2xl md:rounded-3xl font-black text-lg md:text-xl flex items-center gap-4 md:gap-6 hover:bg-burgundy hover:scale-105 transition-all shadow-2xl group"
              >
                استعراض الدراسة
                <ChevronLeft className="w-6 h-6 md:w-8 h-8 group-hover:-translate-x-3 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 md:gap-6 pr-6 md:pr-10 border-r border-ink/10">
                <a href="https://www.facebook.com/amir.aldeen.alhammami/" target="_blank" className="w-12 h-12 md:w-16 h-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center border border-ink/5 hover:rotate-12 transition-transform cursor-pointer group">
                   <Facebook className="w-6 h-6 md:w-8 h-8 text-burgundy group-hover:scale-110 transition-transform" />
                </a>
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] font-black text-ink/40 uppercase tracking-widest">Architectural Director</span>
                  <a href="https://www.facebook.com/amir.aldeen.alhammami/" target="_blank" className="font-black text-lg md:text-2xl text-ink italic hover:text-burgundy transition-colors">أمير الدين الحمامي</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Identity Bar */}
      <section className="py-20 md:py-32 bg-white/60 border-y border-ink/5 backdrop-blur-md">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 md:gap-20 items-center">
            <motion.a href="https://exposyria.ab3adacademy.com/" target="_blank" whileHover={{ y: -10 }} className="flex flex-col sm:flex-row items-center text-center sm:text-right gap-6 md:gap-10 p-8 md:p-10 bg-beige-100/50 rounded-[2.5rem] md:rounded-[3.5rem] border border-white shadow-xl group cursor-pointer transition-colors hover:bg-burgundy/5">
               <LogoExpo className="w-20 h-20 md:w-24 h-24" />
               <div className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-serif font-black text-ink group-hover:text-burgundy transition-colors">أبعاد معارض سوريا</h4>
                  <p className="text-base md:text-lg font-serif italic text-ink/50 tracking-wide">الجهة المصممة والمالكة للدراسة المعمارية</p>
               </div>
            </motion.a>

            <motion.div whileHover={{ y: -10 }} className="flex flex-col sm:flex-row items-center text-center sm:text-right gap-6 md:gap-10 p-8 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-burgundy/10 shadow-2xl group">
               <div className="w-20 h-20 md:w-24 h-24 rounded-[1.2rem] md:rounded-[1.5rem] bg-burgundy/5 flex flex-col items-center justify-center">
                  <span className="text-3xl md:text-4xl font-black text-burgundy leading-none">L</span>
                  <span className="text-[6px] md:text-[8px] font-black text-burgundy tracking-widest mt-1 uppercase">Brand</span>
               </div>
               <div className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-serif font-black text-ink">
                    <a href="https://lemarlighting.com/" target="_blank" className="hover:text-burgundy transition-colors">ليمار للانارة والكهربائيات</a>
                  </h4>
                  <p className="text-base md:text-lg font-serif italic text-ink/50 tracking-wide">الشريك الاستراتيجي وصاحب الجناح</p>
               </div>
            </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-24 space-y-8">
             <h2 className="text-6xl lg:text-9xl font-serif font-black italic">التفاصيل <span className="text-burgundy">الكاملة</span></h2>
             <p className="text-2xl text-ink/40 font-serif italic max-w-3xl mx-auto leading-relaxed border-b-2 border-burgundy/10 pb-8">
               يتم عرض كافة النماذج بأبعادها الحقيقية لتسليط الضوء على دقة التنفيذ وتوزيع الكتل المعمارية كما هو في المخططات النهائية.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {MAIN_GALLERY.map((id, i) => (
              <motion.div 
                key={id} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8 }}
                className="group cursor-zoom-in"
                onClick={() => setSelectedImage(`${IMAGE_BASE}${id}`)}
              >
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-[1px] border-ink/5 bg-[#FDFDFD] aspect-video flex items-center justify-center transition-all duration-700 hover:shadow-2xl">
                  <img src={`${IMAGE_BASE}${id}`} className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-700" alt={`Perspective ${i}`} referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                     <div className="p-6 bg-white rounded-full text-burgundy shadow-lg scale-50 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 className="w-8 h-8" />
                     </div>
                  </div>
                </div>
                <div className="mt-6 px-4 flex justify-between items-end">
                   <div className="space-y-1">
                      <div className="text-[10px] font-black text-burgundy uppercase tracking-[0.5em]">Project Perspective</div>
                      <div className="text-xl font-serif font-black italic">منظور رقم 0{i + 1}</div>
                   </div>
                   <div className="text-4xl font-serif font-black text-ink/5 italic group-hover:text-burgundy/10 transition-colors">
                     0{i + 1}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Section */}
      <section id="lighting" className="py-24 md:py-48 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 luxury-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-beige-100/10 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <LightingCarousel active={activeLighting} setActive={setActiveLighting} />
        </div>
      </section>

      {/* Full Width Cinematic Video */}
      <section id="video" className="bg-zinc-950 pt-20 pb-20">
        <div className="w-full aspect-video bg-black relative group shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.8)] max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/5">
           <iframe 
            src={VIDEO_PREVIEW} 
            className="w-full h-full border-none" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
            referrerPolicy="no-referrer" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 pointer-events-none" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 md:py-48 bg-beige-100/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24 space-y-8">
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-burgundy" />
              <span className="text-sm font-black uppercase tracking-[0.4em] text-burgundy">Our Premium Services</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif font-black leading-tight">
              لماذا تختار <span className="text-burgundy">AB3AD EXPOSYRIA</span> لمستقبل معارضكم؟
            </h3>
            <p className="text-xl md:text-2xl text-ink/60 font-serif italic border-r-4 border-burgundy pr-8 leading-relaxed">
              نقدم حلولاً متكاملة تضمن للشركات الطامحة الوصول إلى إحصائيات مبيعات ناجحة وتواجد استثنائي في كل معرض.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white rounded-[2.5rem] border border-ink/5 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col items-start gap-8"
              >
                <div className="w-16 h-16 bg-burgundy/5 rounded-xl flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-serif font-black">{service.title}</h4>
                  <p className="text-lg text-ink/60 font-serif italic leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-white rounded-[3rem] border border-ink/5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="space-y-4 text-center md:text-right">
              <h4 className="text-3xl md:text-4xl font-serif font-black">جاهز للتميز في معرضك القادم؟</h4>
              <p className="text-xl text-ink/60 font-serif italic">تواصل معنا الآن واطلب المزيد من الخدمات في عالم المعارض.</p>
            </div>
            <a 
              href="https://api.whatsapp.com/send/?phone=%2B963969558304&text&type=phone_number&app_absent=0" 
              target="_blank"
              className="px-12 py-6 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition-all shadow-2xl shadow-green-600/30 text-xl flex items-center gap-4 group"
            >
              <span>اطلب استشارة واتساب</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ChevronLeft className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <span className="text-sm font-black uppercase tracking-[0.4em] text-burgundy">Strategic Partners</span>
              <h3 className="text-4xl md:text-6xl font-serif font-black">شركاؤنا في مجال التدريب والتطوير الهندسي</h3>
            </div>
            
            <a 
              href="https://www.ab3adacademy.com/" 
              target="_blank" 
              className="group p-12 md:p-20 bg-beige-100/50 rounded-[4rem] border border-ink/5 hover:border-burgundy/20 transition-all hover:bg-white hover:shadow-2xl flex flex-col items-center gap-10"
            >
              <LogoAcademy className="w-32 h-32 md:w-48 h-48 group-hover:scale-110 transition-transform duration-700" />
              <div className="space-y-4">
                <h4 className="text-3xl md:text-5xl font-serif font-black text-ink uppercase tracking-tighter">أكاديمية أبعاد للهندسة المعمارية</h4>
                <p className="text-xl text-burgundy font-serif italic tracking-widest uppercase">Ab3ad Academy for Architecture</p>
              </div>
              <div className="flex items-center gap-4 text-ink/40 group-hover:text-burgundy transition-colors font-black uppercase text-xs tracking-[0.3em]">
                <span>Visit Official Website</span>
                <Globe className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Copyrights Section */}
      <section id="legal" className="py-24 md:py-48 px-6 bg-white relative">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto bg-burgundy p-12 md:p-32 rounded-[3.5rem] md:rounded-[6rem] text-white space-y-10 md:space-y-16 relative overflow-hidden group shadow-[0_100px_150px_-30px_rgba(128,0,32,0.4)]">
            <div className="absolute inset-0 luxury-grid opacity-10" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-10 md:space-y-14">
              <ShieldCheck className="w-20 h-20 md:w-32 h-32 text-white/20 animate-pulse-slow" />
              <h4 className="text-3xl md:text-6xl lg:text-8xl font-serif font-black leading-tight italic">
                "بصمة معمارية حصرية <br /> <span className="text-ink">لأبعاد معارض سوريا</span> <br /> والمهندس <a href="https://www.facebook.com/amir.aldeen.alhammami/" target="_blank" className="underline decoration-white/20 hover:text-white transition-colors">أمير الدين</a>"
              </h4>
              <div className="h-1 w-32 md:w-64 bg-white/20 rounded-full" />
              <p className="text-lg md:text-2xl text-white/60 font-serif italic max-w-4xl leading-relaxed">
                يحتفظ المصمم بكامل الحقوق الفكرية والقانونية والنقابية لهذا المشروع. يمنع منعا باتاً إعادة إنتاجه أو تنفيذه دون تفويض رسمي ومكتوب.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-ink/5 bg-beige-100/20">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
            <a href="https://exposyria.ab3adacademy.com/" target="_blank" className="flex items-center gap-6 md:gap-8 group">
               <LogoExpo className="w-12 h-12 md:w-16 h-16 grayscale group-hover:grayscale-0 transition-all" />
               <div className="flex flex-col text-right sm:text-right">
                  <span className="font-serif font-black text-xl md:text-3xl">أبعاد معارض سوريا</span>
                  <span className="text-[8px] md:text-[10px] font-black text-burgundy tracking-[0.3em] md:tracking-[0.5em] uppercase">Exhibition Management</span>
               </div>
            </a>
            
            <div className="flex flex-col items-center gap-6">
               <p className="text-[10px] font-black text-ink/20 uppercase tracking-[1em] mb-4">Official Portfolio 2026</p>
               <div className="flex gap-10 md:gap-14">
                 <a href="https://www.facebook.com/amir.aldeen.alhammami/" target="_blank"><Facebook className="w-6 h-6 md:w-7 h-7 opacity-20 hover:text-burgundy hover:opacity-100 transition-all cursor-pointer" /></a>
                 <a href="https://exposyria.ab3adacademy.com/" target="_blank"><Globe className="w-6 h-6 md:w-7 h-7 opacity-20 hover:text-burgundy hover:opacity-100 transition-all cursor-pointer" /></a>
               </div>
            </div>

            <div className="text-center md:text-left font-serif italic text-ink/30 text-lg">
               &copy; {new Date().getFullYear()} All Rights Reserved.
            </div>
         </div>
      </footer>

      {/* Professional Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-ink/98 backdrop-blur-3xl flex flex-col select-none overflow-hidden"
          >
            {/* Toolbar */}
            <div className="absolute top-0 inset-x-0 h-24 flex items-center justify-between px-8 z-50 bg-gradient-to-b from-ink/50 to-transparent">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div className="text-white">
                    <div className="text-xs font-black uppercase tracking-[0.2em] opacity-50">Image View</div>
                    <div className="text-lg font-serif italic">نمط العرض الاحترافي</div>
                  </div>
               </div>
               <button 
                className="w-12 h-12 bg-white/10 hover:bg-burgundy text-white rounded-full flex items-center justify-center transition-all shadow-xl"
                onClick={() => { setSelectedImage(null); setZoomScale(1); }}
               >
                 <X className="w-6 h-6" />
               </button>
            </div>

            {/* Interaction Layer */}
            <div 
              className="flex-1 relative flex items-center justify-center cursor-move"
              onClick={() => {
                if (!isDragging) toggleZoom();
              }}
            >
              <motion.div
                drag={zoomScale > 1}
                dragConstraints={{ left: -2000, right: 2000, top: -2000, bottom: 2000 }}
                dragElastic={0}
                dragMomentum={true}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
                animate={{ 
                  scale: zoomScale,
                  x: zoomScale === 1 ? 0 : undefined,
                  y: zoomScale === 1 ? 0 : undefined
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="relative bg-white p-1 md:p-2 rounded-lg shadow-2xl flex items-center justify-center"
              >
                <img 
                  src={selectedImage} 
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-md" 
                  referrerPolicy="no-referrer"
                  draggable={false}
                />
              </motion.div>
            </div>

            {/* Footer Control */}
            <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-6 z-50">
               {zoomScale > 1 && (
                 <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3"
                 >
                   <span className="w-1 h-1 bg-burgundy rounded-full animate-ping" />
                   Drag to Explore ({zoomScale}x)
                 </motion.div>
               )}
               
               <div className="flex items-center gap-3 p-1.5 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
                  {[1, 2.5, 4.5].map((level) => (
                    <button
                      key={level}
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomScale(level);
                      }}
                      className={`px-6 py-2.5 rounded-xl text-[10px] font-black tracking-widest transition-all ${zoomScale === level ? 'bg-burgundy text-white shadow-lg' : 'text-white/40 hover:text-white'}`}
                    >
                      {level}X
                    </button>
                  ))}
                  <div className="w-px h-6 bg-white/10 mx-2" />
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(null); setZoomScale(1); }}
                    className="px-6 py-2.5 text-[10px] font-black tracking-widest text-white/80 hover:text-white uppercase"
                  >
                    إغلاق العرض
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


