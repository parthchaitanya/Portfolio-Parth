import FadeIn from '../components/FadeIn';
import { experience, skills } from '../data';

const border = { borderTop: '1px solid rgba(12, 12, 12, 0.15)' };

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-32 sm:pb-36 md:pb-44"
    >
      <FadeIn
        as="h2"
        y={40}
        className="text-center font-black uppercase leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Skills
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {skills.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.1} className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12" style={i === 0 ? undefined : border}>
            <span className="shrink-0 font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3 pt-1 sm:pt-3">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {s.name}
              </h3>
              <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {s.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn
        as="h2"
        y={40}
        className="text-center font-black uppercase leading-none tracking-tight mt-24 sm:mt-32 md:mt-40 mb-12 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {experience.map((e, i) => (
          <FadeIn
            key={e.role}
            delay={i * 0.1}
            className="grid gap-3 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-10 py-8 sm:py-10"
            style={i === 0 ? undefined : border}
          >
            <span className="font-light uppercase tracking-widest opacity-60" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}>
              {e.period}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {e.role}
              </h3>
              <span className="font-normal" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}>
                {e.org}
              </span>
              <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {e.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
