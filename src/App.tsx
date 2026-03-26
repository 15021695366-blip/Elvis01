import { motion } from "motion/react";
import {
  Menu,
  ChevronDown,
  Video,
  PartyPopper,
  Landmark,
  Layers,
  Music,
  ArrowRight
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const services = [
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "拍摄服务",
      description:
        "从商业广告到艺术短片，我们用镜头捕捉每一个不可复制的瞬间，赋予画面电影质感的叙事张力。",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      span: "md:col-span-2"
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-primary" />,
      title: "线下活动",
      description:
        "打造沉浸式品牌体验，将创意构思转化为具有影响力的现场互动场景。",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      span: "md:col-span-1"
    },
    {
      icon: <Landmark className="w-8 h-8 text-primary" />,
      title: "场馆运营",
      description:
        "探索空间的商业与艺术价值，为创意场馆提供全方位策划与维护方案。",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      span: "md:col-span-1"
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "品牌运营",
      description:
        "通过深度内容孵化与整合营销，提升品牌的生命力与持续影响力。",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      span: "md:col-span-1"
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "音乐内容",
      description:
        "定制化声音设计与原创音乐，为视觉影像注入能够呼吸的灵魂旋律。",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
      span: "md:col-span-1"
    }
  ];

  const workflow = [
    {
      id: "01",
      title: "需求沟通",
      description: "深度倾听您的每一个创意火花，明确核心目标与核心视觉基调。"
    },
    {
      id: "02",
      title: "方案策划",
      description: "由资深创意团队输出完整的执行方案，将抽象概念具象为视觉蓝图。"
    },
    {
      id: "03",
      title: "执行落地",
      description: "严谨的现场把控与后期制作，确保创意的高品质还原与极致呈现。"
    },
    {
      id: "04",
      title: "持续运营",
      description: "不仅是交付，更是陪伴。为后续的推广与迭代提供长期的专业支持。"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary selection:text-black">
      <nav className="fixed top-0 w-full z-50 bg-neutral-900/60 backdrop-blur-xl flex justify-between items-center px-6 md:px-8 py-5">
        <a href="#hero" className="text-2xl font-headline text-amber-200 tracking-widest">
          零壹公社
        </a>

        <div className="hidden md:flex gap-12 items-center">
          <div className="flex gap-8">
            <a href="#about" className="text-stone-300 hover:text-amber-100 transition-colors text-sm">
              关于
            </a>
            <a href="#services" className="text-stone-300 hover:text-amber-100 transition-colors text-sm">
              服务
            </a>
            <a href="#workflow" className="text-stone-300 hover:text-amber-100 transition-colors text-sm">
              流程
            </a>
            <a href="#contact" className="text-stone-300 hover:text-amber-100 transition-colors text-sm">
              联系
            </a>
          </div>
          <a
            href="#contact"
            className="bg-primary text-black px-6 py-2 text-sm transition-all duration-300 active:opacity-80 active:scale-95"
          >
            立即合作
          </a>
        </div>

        <button className="md:hidden text-primary" aria-label="menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <header id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <span className="tracking-[0.3em] uppercase mb-6 block text-sm text-primary">
            Creative Studio Collective
          </span>
          <h1 className="serif-headline text-6xl md:text-9xl font-black mb-8 tracking-tight">
            零壹公社
          </h1>
          <p className="serif-headline text-2xl md:text-4xl font-light mb-12 tracking-[0.5em] text-primary-fixed-dim">
            为梦而生
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="#about"
              className="bg-primary text-black px-12 py-4 text-sm font-bold tracking-widest min-w-[200px]"
            >
              了解我们
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-primary px-12 py-4 text-sm font-bold tracking-widest hover:bg-white/5 transition-all min-w-[200px]"
            >
              立即合作
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </header>

      <section id="about" className="py-24 md:py-40 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div {...fadeIn} className="md:col-span-7">
            <span className="tracking-widest text-xs mb-4 block text-primary">ABOUT US</span>
            <h2 className="serif-headline text-4xl md:text-6xl leading-tight mb-12">
              从 0 到 1
              <br />
              <span className="text-primary-fixed-dim italic font-light">
                连接人与故事的无限可能
              </span>
            </h2>
            <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed max-w-2xl font-light">
              <p>
                零壹公社是一家深耕于视觉与感官叙事的创意机构。我们相信每一个伟大的项目都始于一个纯粹的梦想，始于那个从无到有的“1”。
              </p>
              <p>
                通过影像的深邃、空间的重塑、声音的律动以及内容的深度，我们不断打破媒介的边界，将碎片化的创意拼凑成触动灵魂的完整体验。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5 relative aspect-[3/4]"
          >
            <img
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
              alt="About"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary p-8 hidden md:block">
              <p className="text-black text-3xl font-black">0 → 1</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="tracking-widest text-xs mb-2 block text-primary">OUR EXPERTISE</span>
              <h2 className="serif-headline text-4xl md:text-5xl">业务介绍</h2>
            </div>
            <div className="hidden md:block h-[1px] bg-white/10 flex-grow mx-12 mb-4"></div>
            <span className="hidden md:inline text-xs tracking-widest text-outline mb-2">
              CINEMATIC SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`${service.span} group relative overflow-hidden bg-surface-container h-[400px] md:h-[500px]`}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale"
                  src={service.image}
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="serif-headline text-3xl mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant font-light max-w-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <span className="tracking-[0.2em] text-xs mb-4 block text-primary">WORKFLOW</span>
            <h2 className="serif-headline text-4xl md:text-5xl">合作流程</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group p-8 bg-surface-container-low transition-all duration-500 hover:bg-surface-container-high"
              >
                <div className="mb-12">
                  <span className="serif-headline text-6xl font-black text-white/10 group-hover:text-primary/20 transition-colors">
                    {step.id}
                  </span>
                </div>
                <h4 className="serif-headline text-xl mb-4">{step.title}</h4>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < 3 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block w-[1px] h-24 bg-white/10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="serif-headline text-4xl md:text-6xl mb-12 leading-tight">
              期待与每一个有表达欲、
              <br />
              有创造力、有梦想的人一起，
              <br />
              <span className="gold-gradient-text italic font-black">做点真正有意思的事。</span>
            </h2>

            <div className="space-y-4 text-on-surface-variant mb-12">
              <p>微信：你的微信号</p>
              <p>邮箱：hello@zeroone.com</p>
              <p>电话：138-0000-0000</p>
              <p>地址：这里填写你的工作室地址</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
              <a
                className="text-primary text-2xl border-b-2 border-primary/30 pb-2 hover:border-primary transition-all flex items-center gap-2"
                href="mailto:hello@zeroone.com"
              >
                START A PROJECT <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-surface-container-lowest flex flex-col items-center gap-8 py-16 px-4 w-full border-t border-white/5">
        <div className="text-lg text-amber-200 tracking-[0.2em]">
          零壹公社 ZERO-ONE COLLECTIVE
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {["微信公众号", "小红书", "联系我们", "隐私政策"].map((item) => (
            <a
              key={item}
              className="text-stone-500 hover:text-amber-200 transition-colors duration-500 text-xs"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="text-stone-500 text-xs opacity-50 text-center">
          © 2024 零壹公社 ZERO-ONE COLLECTIVE. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
