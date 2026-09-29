import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { projects, type Project } from '../data';

const radius = 'rounded-[32px] sm:rounded-[40px] md:rounded-[48px]';

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const [c1, c2, c3] = project.theme;

  return (
    <div
      className="sticky top-24 md:top-32 flex h-[85vh] items-start justify-center"
      style={{ '--i': index } as CSSProperties}
    >
      <motion.article
        style={{ scale, background: '#0C0C0C', transformOrigin: 'top center' }}
        className="proj-card relative flex w-full max-w-6xl flex-col gap-4 sm:gap-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60">{project.category}</span>
              <h3 className="font-medium uppercase leading-tight text-[#D7E2EA]" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}>
                {project.name}
              </h3>
              <span className="text-xs sm:text-sm font-light text-[#D7E2EA]/70">{project.subtitle}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <LiveProjectButton href={project.github} label="GitHub" icon="github" />
            {project.live && <LiveProjectButton href={project.live} />}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="flex flex-col gap-3 sm:w-[40%] sm:gap-4">
            <div
              className={`${radius} proj-tech-panel flex flex-wrap content-center gap-2 border border-white/10 p-5 sm:p-7`}
              style={{ background: `linear-gradient(140deg, ${c1} 0%, #121212 100%)` }}
            >
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[11px] sm:text-xs md:text-sm font-light text-[#D7E2EA]">
                  {t}
                </span>
              ))}
            </div>
            <div
              className={`${radius} proj-high-panel hidden sm:flex flex-col justify-center gap-3 border border-white/10 p-6 sm:p-7 md:p-9`}
              style={{ background: '#141414' }}
            >
              {project.highlights.map((h) => (
                <div key={h} className="flex gap-3 text-sm md:text-base font-light leading-snug text-[#D7E2EA]/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c2 }} />
                  {h}
                </div>
              ))}
            </div>
          </div>
          <div
            className={`${radius} relative flex flex-col justify-between overflow-hidden p-6 sm:w-[60%] sm:p-8 md:p-10`}
            style={{ background: `radial-gradient(circle at 80% 15%, ${c2} 0%, ${c3} 38%, ${c1} 80%)` }}
          >
            <div
              className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full opacity-40 blur-2xl"
              style={{ background: c3 }}
            />
            <p className="proj-desc relative max-w-md font-light leading-relaxed text-white/85" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)' }}>
              {project.description}
            </p>
            <div className="relative mt-6">
              <div className="font-black uppercase leading-none text-white" style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}>
                {project.stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.2em] text-white/75">
                {project.stat.label}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-12 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </FadeIn>

      <div ref={containerRef}>
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
