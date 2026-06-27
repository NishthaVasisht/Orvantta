import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Activity, Brain, Shield, GitBranch, Workflow, Users, Target,
  Sparkles, ArrowRight, CheckCircle2, Cpu, Network, LineChart,
  UserPlus, ClipboardCheck, TrendingUp, UserMinus, Play,
} from "lucide-react";
import heroImg from "@/assets/hero-control.jpg";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import chaosImg from "@/assets/chaos.jpg";
import orgImg from "@/assets/orgchart.jpg";
import cityImg from "@/assets/city.jpg";
import profileImg from "@/assets/ai-employee-card.jpg";
import lc1 from "@/assets/lifecycle-1.jpg";
import lc2 from "@/assets/lifecycle-2.jpg";
import lc3 from "@/assets/lifecycle-3.jpg";
import lc4 from "@/assets/lifecycle-4.jpg";
import govImg from "@/assets/governance.jpg";
import foundersImage from "@/assets/founder_image.png";
import orvanttaIcon from "@/assets/orvantta-icon.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orvantta AI — The Operating System for AI Workforces" },
      { name: "description", content: "Manage, govern, and optimize AI employees across your enterprise. The first platform built for the AI workforce era." },
      { property: "og:title", content: "Orvantta AI — The Operating System for AI Workforces" },
      { property: "og:description", content: "Every company will soon have AI employees. Every AI employee needs a manager." },
    ],
  }),
  component: Landing,
});

/* ------------------------- Scroll reveal hook ------------------------- */
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("reveal-on"); io.disconnect(); } },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ------------------------- Animated number ------------------------- */
function CountUp({ to, prefix = "", suffix = "", duration = 1600 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ------------------------- Nav ------------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={orvanttaIcon} alt="Orvantta AI logo" width={32} height={32} className="size-8 anim-pulse-glow" />
          <span className="font-display font-bold tracking-tight text-lg">Orvantta AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-widest text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition">Problem</a>
          <a href="#platform" className="hover:text-foreground transition">Platform</a>
          <a href="#lifecycle" className="hover:text-foreground transition">Lifecycle</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#team" className="hover:text-foreground transition">Team</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-full px-4 py-2 bg-navy text-primary-foreground hover:opacity-90 transition">
          Request demo <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ------------------------- Hero ------------------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 overflow-hidden grain">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <Reveal>
              <span className="pill">
                <span className="size-1.5 rounded-full bg-cyan anim-blink" />
                The AI workforce era is here
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.95] font-extrabold tracking-tight">
                The Operating <br />System for <span className="italic text-navy">AI Workforces.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                Every company will soon have AI employees. Every AI employee needs a manager.
                Orvantta AI is the first platform that manages, governs, and continuously
                improves AI employees across the enterprise — regardless of model or framework.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-navy text-primary-foreground font-semibold hover:opacity-90 transition">
                  Request a demo <ArrowRight className="size-4" />
                </a>
                <a href="#platform" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground/5 border border-border font-semibold hover:bg-foreground/10 transition">
                  <Play className="size-4" /> See the platform
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative anim-float">
              <div className="absolute -inset-6 bg-cyan/30 blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-navy">
                <video
                  src={heroVideo.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={1280}
                  height={1280}
                  className="w-full h-auto block object-cover"
                  poster={heroImg}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-cyan/30 to-transparent anim-scan" />
                </div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-cyan">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-cyan anim-blink" />
                    LIVE · orvantta.core
                  </span>
                  <span>↑ 1,283 AGENTS</span>
                </div>
              </div>
              <FloatStat top="-6%" left="-8%" label="Accuracy" value="96%" />
              <FloatStat bottom="-6%" right="-6%" label="Monthly ROI" value="31×" />
            </div>
          </Reveal>
        </div>
      </div>

      <LogoMarquee />
    </section>
  );
}

function FloatStat({ label, value, ...pos }: { label: string; value: string; top?: string; left?: string; right?: string; bottom?: string }) {
  return (
    <div className="absolute ink-card rounded-xl px-4 py-3 anim-float" style={pos}>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-display font-extrabold text-2xl text-navy">{value}</div>
    </div>
  );
}

function LogoMarquee() {
  const tags = ["MODEL-AGNOSTIC", "OPENAI", "ANTHROPIC", "GEMINI", "LLAMA", "MISTRAL", "GROK", "SOC-2 READY", "FULL AUDIT TRAIL", "VPC DEPLOY"];
  const row = [...tags, ...tags];
  return (
    <div className="mt-20 border-y border-border/60 py-4 overflow-hidden">
      <div className="flex gap-12 anim-marquee w-max">
        {row.map((t, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            ● {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------- Transform ------------------------- */
function Transform() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="pill">The shift</span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.02]">
            The workforce is about to <span className="italic text-navy">transform.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="ink-card rounded-2xl p-8 h-full">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Today</div>
              <p className="mt-3 text-lg leading-relaxed">
                Companies manage humans with a mature stack: HRIS, payroll, performance reviews,
                org charts, and compliance.
              </p>
              <div className="mt-6 font-mono text-sm flex gap-2">
                <span className="rounded bg-secondary px-2 py-1">150 humans</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="navy-card rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute -top-20 -right-20 size-64 rounded-full bg-cyan/30 blur-3xl" />
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-widest text-cyan">Tomorrow</div>
                <p className="mt-3 text-lg leading-relaxed">
                  Companies will manage 150 humans <span className="font-mono">+</span>{" "}
                  <span className="text-cyan font-semibold">3,200 AI employees.</span>{" "}
                  The infrastructure doesn't exist yet. <span className="font-semibold">Orvantta AI is building it.</span>
                </p>
                <div className="mt-6 flex flex-wrap gap-2 font-mono text-sm">
                  <span className="rounded bg-white/10 px-2 py-1">150 humans</span>
                  <span className="rounded bg-cyan text-foreground px-2 py-1">+ 3,200 AI employees</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Problem ------------------------- */
const problems = [
  { icon: GitBranch, title: "Duplicate work", desc: "Every department builds AI in isolation, reinventing the same agents." },
  { icon: Brain, title: "Hallucinations", desc: "No quality control. Errors compound across the organization." },
  { icon: LineChart, title: "Wasted spend", desc: "Redundant models and runaway token costs with no oversight." },
  { icon: Shield, title: "Zero governance", desc: "No ownership, no memory, no audit trail, no accountability." },
];

function Problem() {
  return (
    <section id="problem" className="py-24 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border-2 border-navy relative">
              <img src={chaosImg} alt="Chaotic server room of unmanaged AI" width={1024} height={1024} className="w-full h-auto block" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-destructive anim-blink" /> WITHOUT ORVANTTA · UNMANAGED · UNGOVERNED
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="pill">The problem</span>
              <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">
                Everyone builds AI.<br />
                <span className="italic text-navy">Nobody manages it.</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {problems.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="ink-card rounded-xl p-5 h-full hover:-translate-y-1 transition">
                    <div className="size-9 rounded-md bg-navy text-primary-foreground grid place-items-center">
                      <p.icon className="size-4" />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-lg">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- AI Employee Profile ------------------------- */
function Profile() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative anim-float">
            <div className="absolute -inset-10 bg-cyan/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-navy shadow-2xl">
              <img src={profileImg} alt="AI employee identity card" width={1024} height={1024} className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 navy-card rounded-full px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-cyan anim-blink" />
              AI-EMP-4402 · ACTIVE
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="pill">What is an AI employee?</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">
              Treat AI like a<br />
              <span className="italic text-navy">real team member.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
              An AI employee isn't just a prompt or a model. It has an identity, a budget,
              a manager, and a performance record. Orvantta gives every AI worker the same
              structure as a human employee — so you can hire, onboard, manage, and retire
              them with confidence.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 space-y-4">
              {[
                { label: "Identity", desc: "Name, role, department, manager — just like any team member.", icon: UserPlus },
                { label: "Resources", desc: "Model budget, permissions, memory, and skills under one roof.", icon: Cpu },
                { label: "Performance", desc: "Goals, accuracy, cost, and ROI tracked continuously.", icon: TrendingUp },
              ].map((a, i) => (
                <div key={a.label} className="flex gap-4 ink-card rounded-xl p-5 hover:-translate-y-0.5 transition">
                  <div className="size-10 rounded-md bg-navy text-primary-foreground grid place-items-center shrink-0">
                    <a.icon className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-navy">0{i + 1}</span>
                      <h3 className="font-display text-lg font-bold">{a.label}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Dashboard ------------------------- */
const stats = [
  { num: 1283, prefix: "", suffix: "", label: "AI employees active" },
  { num: 142, prefix: "$", suffix: "K", label: "Monthly AI spend tracked" },
  { num: 96, prefix: "", suffix: "%", label: "Average accuracy" },
  { num: 8, prefix: "", suffix: ".2M", label: "Tasks completed / month" },
  { num: 31, prefix: "", suffix: "×", label: "Average ROI per AI" },
  { num: 12, prefix: "", suffix: "", label: "Departments managed" },
];

function Dashboard() {
  return (
    <section id="platform" className="py-24 bg-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "linear-gradient(rgba(120,200,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(120,200,255,.18) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] bg-cyan/15 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="pill bg-cyan text-foreground">The platform</span>
              <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold max-w-2xl leading-[1.02]">
                One dashboard for your<br /><span className="italic text-cyan">entire AI workforce.</span>
              </h2>
            </div>
            <p className="font-mono text-sm text-white/70 max-w-md">
              See every AI employee, their cost, accuracy, and impact — in real time.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl bg-white/5 border border-white/15 backdrop-blur p-6 md:p-10">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/15">
              <div className="flex items-center gap-3">
                <Activity className="size-5 text-cyan" />
                <span className="font-display font-bold">AI Workforce Dashboard</span>
              </div>
              <span className="font-mono text-xs text-white/60 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-cyan anim-blink" /> live · all departments
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
              {stats.map((s) => (
                <div key={s.label} className="bg-navy/60 p-6">
                  <div className="font-display text-3xl md:text-5xl font-extrabold text-cyan">
                    <CountUp to={s.num} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/70 font-mono">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-xl bg-cyan/15 border border-cyan/30 p-4">
              <Sparkles className="size-5 text-cyan shrink-0 mt-0.5" />
              <p className="text-sm font-mono">
                <span className="font-bold text-cyan">$62K/month</span>{" "}
                <span className="text-white/80">in optimization opportunity identified automatically by Orvantta AI.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- Lifecycle ------------------------- */
const lifecycle = [
  { icon: UserPlus, img: lc1, tag: "Hiring", title: "AI Onboarding", desc: "Permissions, memory, skills, policies, manager, and budget — provisioned in seconds." },
  { icon: ClipboardCheck, img: lc2, tag: "Reviews", title: "Weekly Performance", desc: "Auto-generated reviews: accuracy trends, root causes, and projected savings." },
  { icon: TrendingUp, img: lc3, tag: "Promotions", title: "Promote & Demote", desc: "Top performers earn new authority. Underperformers require human approval." },
  { icon: UserMinus, img: lc4, tag: "Retirement", title: "AI Firing", desc: "No business impact for 45 days? Orvantta recommends retirement and reclaims spend." },
];

function Lifecycle() {
  return (
    <section id="lifecycle" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="pill">Full lifecycle</span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.02]">
            Hire, review, promote, retire — <span className="italic text-navy">automatically.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {lifecycle.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="ink-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                  <img src={step.img} alt={step.title} width={800} height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-background text-foreground px-2 py-1 rounded">0{i + 1}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-cyan text-foreground px-2 py-1 rounded">{step.tag}</span>
                  </div>
                  <step.icon className="absolute bottom-3 right-3 size-5 text-white" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Governance ------------------------- */
const governance = [
  { icon: Cpu, title: "Identity & Role" },
  { icon: Shield, title: "Permissions & Access" },
  { icon: Workflow, title: "Allowed Tools & APIs" },
  { icon: Network, title: "Allowed Databases" },
  { icon: Target, title: "Global Policies" },
  { icon: GitBranch, title: "Full Audit Trail" },
];

function Governance() {
  return (
    <section className="py-24 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative anim-float">
            <div className="absolute -inset-8 bg-cyan/25 blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-navy">
              <img src={govImg} alt="Enterprise governance diagram" width={1024} height={1024} className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="pill">Governance · Memory · Security</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">
              The company brain.<br /><span className="italic text-navy">Replayable like git.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 space-y-5">
              <div className="ink-card rounded-xl p-5">
                <h3 className="font-display text-lg font-bold flex items-center gap-2">
                  <Brain className="size-5 text-navy" /> AI Memory
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  AI employees share a unified memory layer — not isolated chats. Support AI already
                  knows your sales calls, contracts, engineering bugs, and meeting transcripts.
                </p>
              </div>
              <div className="ink-card rounded-xl p-5">
                <h3 className="font-display text-lg font-bold flex items-center gap-2">
                  <Shield className="size-5 text-navy" /> AI Governance
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Every action logged: who, why, evidence, confidence, model, cost, human approval.
                  Replay any decision like git for AI.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {governance.map((g) => (
                <div key={g.title} className="flex items-center gap-2 rounded-lg bg-background border border-border px-3 py-2">
                  <g.icon className="size-4 text-navy" />
                  <span className="font-mono text-xs">{g.title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Routing animated loop ------------------------- */
function Routing() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <span className="pill">Routing · Budget · Learning</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">
              An always-on <span className="italic text-navy">optimization loop.</span>
            </h2>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              Orvantta routes tasks to the right model, switches to the cheapest option that meets
              your quality bar, and turns every mistake into permanent learning.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <Reveal>
            <div className="ink-card rounded-3xl p-8 relative overflow-hidden">
              <svg viewBox="0 0 600 280" className="w-full h-auto">
                <defs>
                  <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="oklch(0.28 0.13 265)" />
                    <stop offset="100%" stopColor="oklch(0.82 0.14 215)" />
                  </linearGradient>
                </defs>
                <path d="M 110 140 C 110 40, 290 40, 300 140 C 310 240, 490 240, 490 140 C 490 40, 310 40, 300 140 C 290 240, 110 240, 110 140 Z"
                  fill="none" stroke="url(#lg)" strokeWidth="3" className="anim-dash" />
                <g className="anim-spin-slow" style={{ transformOrigin: "300px 140px" }}>
                  <circle cx="300" cy="40" r="6" fill="oklch(0.28 0.13 265)" />
                  <circle cx="490" cy="140" r="6" fill="oklch(0.82 0.14 215)" />
                  <circle cx="300" cy="240" r="6" fill="oklch(0.28 0.13 265)" />
                  <circle cx="110" cy="140" r="6" fill="oklch(0.82 0.14 215)" />
                </g>
                <text x="110" y="170" textAnchor="middle" className="font-mono" fontSize="11" fill="currentColor">ROUTE</text>
                <text x="300" y="22" textAnchor="middle" className="font-mono" fontSize="11" fill="currentColor">OPTIMIZE</text>
                <text x="490" y="170" textAnchor="middle" className="font-mono" fontSize="11" fill="currentColor">LEARN</text>
                <text x="300" y="266" textAnchor="middle" className="font-mono" fontSize="11" fill="currentColor">QUALITY</text>
              </svg>
            </div>
          </Reveal>

          <div className="space-y-3">
            {[
              { t: "Route to best model", d: "Send each task to the model that meets your quality bar." },
              { t: "Optimize for cost", d: "Auto-switch to the cheapest viable option in real time." },
              { t: "Maintain quality", d: "Hold every AI to an enforceable accuracy threshold." },
              { t: "Learn & improve", d: "Turn every mistake into permanent organizational learning." },
            ].map((l, i) => (
              <Reveal key={l.t} delay={i * 100}>
                <div className="ink-card rounded-xl p-5 flex gap-4 items-start hover:border-navy transition">
                  <div className="font-display font-extrabold text-3xl text-navy w-10">0{i + 1}</div>
                  <div>
                    <h3 className="font-display font-bold text-lg">{l.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{l.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Org Chart ------------------------- */
function OrgChart() {
  return (
    <section className="py-24 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <span className="pill">Org chart · Teams · Goals</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">
              Build AI teams,<br /><span className="italic text-navy">not lone agents.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 space-y-5">
              <div className="ink-card rounded-xl p-5">
                <h3 className="font-display text-lg font-bold flex items-center gap-2">
                  <Users className="size-5 text-navy" /> AI Teams
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Product Manager AI → Developer AI → Reviewer AI → QA AI → Release AI. Orvantta
                  manages the entire team as one unit.
                </p>
              </div>
              <div className="ink-card rounded-xl p-5">
                <h3 className="font-display text-lg font-bold flex items-center gap-2">
                  <Target className="size-5 text-navy" /> AI Goals
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  CEO says "Increase MRR 20%." Orvantta breaks it down across Marketing, Sales,
                  Pricing, Success, and Engineering — assigning AI workers automatically.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="relative anim-float">
            <div className="absolute -inset-8 bg-cyan/25 blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-navy">
              <img src={orgImg} alt="AI organizational chart" width={1024} height={1024} className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------- Pricing ------------------------- */
const tiers = [
  { name: "Starter", price: "$999", per: "/mo", scale: "Up to 100 AI employees", features: ["Full lifecycle management", "Unified memory layer", "Audit trail & policies", "Email support"] },
  { name: "Growth", price: "$4,999", per: "/mo", scale: "Up to 500 AI employees", featured: true, features: ["Everything in Starter", "Intelligent routing & budgeting", "Custom roles & teams", "Priority support & SLA"] },
  { name: "Enterprise", price: "Custom", per: "", scale: "Unlimited AI employees", features: ["Everything in Growth", "Dedicated VPC deployment", "Custom integrations", "Solutions engineering"] },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="pill">Pricing</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">
              Scale with <span className="italic text-navy">your workforce.</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className={`relative rounded-2xl p-8 h-full ${t.featured ? "navy-card shadow-[var(--shadow-glow)]" : "ink-card"}`}>
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan text-foreground text-xs font-mono uppercase tracking-widest px-3 py-1">Most popular</span>
                )}
                <h3 className="font-display text-2xl font-bold">{t.name}</h3>
                <p className={`text-sm mt-1 font-mono ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>{t.scale}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold">{t.price}</span>
                  <span className={t.featured ? "text-white/60" : "text-muted-foreground"}>{t.per}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`size-4 shrink-0 mt-0.5 ${t.featured ? "text-cyan" : "text-navy"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-8 w-full inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 font-semibold transition ${t.featured ? "bg-cyan text-foreground hover:opacity-90" : "bg-navy text-primary-foreground hover:opacity-90"}`}>
                  {t.name === "Enterprise" ? "Talk to sales" : "Get started"} <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Team ------------------------- */
const teamText = {
  title: "Built by operators who came together to build the future of work.",
  subtitle: "We came together",
  body: "We came together around a single belief: the next generation of enterprises won't just hire people — they'll hire AI. With deep experience across AI research, enterprise infrastructure, and product operations, we are building the operating system that makes AI employees manageable, measurable, and mission-ready.",
};

function Team() {
  return (
    <section id="team" className="py-24 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="pill">{teamText.subtitle}</span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.02]">
            {teamText.title.split(" ").slice(0, -4).join(" ")}{" "}
            <span className="italic text-navy">{teamText.title.split(" ").slice(-4).join(" ")}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border-2 border-navy group">
              <img
                src={foundersImage}
                alt="Orvantta AI founders team photo"
                width={1280}
                height={960}
                className="w-full h-auto block group-hover:scale-[1.02] transition duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="ink-card rounded-2xl p-8 md:p-10 h-full flex flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-widest text-navy">The team behind Orvantta AI</div>
              <p className="mt-5 text-lg leading-relaxed">{teamText.body}</p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-display text-xl font-bold">Founders</div>
                <div className="mt-1 text-sm text-muted-foreground font-mono">Orvantta AI</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- CTA ------------------------- */
function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border-2 border-navy">
            <img src={cityImg} alt="Futuristic cityscape" width={1920} height={900} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative p-12 md:p-20 text-center text-primary-foreground">
              <span className="pill bg-cyan text-foreground">The vision</span>
              <h2 className="mt-6 font-display text-3xl md:text-6xl font-extrabold leading-[1.02] max-w-3xl mx-auto">
                Windows → Apps. Kubernetes → Containers.<br />
                <span className="italic text-cyan">Orvantta AI → AI Workforce.</span>
              </h2>
              <p className="mt-6 font-mono text-sm text-white/80 max-w-2xl mx-auto">
                See how Orvantta manages your AI employees end-to-end. Book a 30-minute walkthrough
                with our team.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 rounded-full bg-white/10 border border-white/25 px-5 py-3 text-sm font-mono placeholder:text-white/50 focus:outline-none focus:border-cyan transition"
                />
                <button className="rounded-full px-6 py-3 bg-cyan text-foreground font-semibold hover:opacity-90 transition inline-flex items-center justify-center gap-1.5">
                  Request demo <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded bg-navy grid place-items-center text-xs font-bold text-primary-foreground">O</div>
          <span className="font-mono text-xs uppercase tracking-widest">© {new Date().getFullYear()} Orvantta AI</span>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Coming soon</span>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Transform />
        <Problem />
        <Profile />
        <Dashboard />
        <Lifecycle />
        <Governance />
        <Routing />
        <OrgChart />
        <Pricing />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
