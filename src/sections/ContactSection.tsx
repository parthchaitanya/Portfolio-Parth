import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { profile, socials } from '../data';

export default function ContactSection() {
  return (
    <section id="contact" className="relative flex flex-col items-center gap-10 sm:gap-12 px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 pb-10 text-center">
      <FadeIn as="h2" y={40} className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Let&apos;s talk
      </FadeIn>
      <FadeIn delay={0.15} as="p" className="max-w-[560px] font-light leading-relaxed text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
        Open to internships, collaborations and anything involving LLMs, RAG or ML. Drop me a line at{' '}
        <a href={`mailto:${profile.email}`} className="font-medium underline decoration-[#B600A8] underline-offset-4 hover:opacity-80">
          {profile.email}
        </a>
      </FadeIn>
      <FadeIn delay={0.3}>
        <ContactButton label="Say Hello" />
      </FadeIn>
      <FadeIn delay={0.4} className="flex flex-wrap justify-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/40 px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
          >
            {s.label}
            <ArrowUpRight size={16} />
          </a>
        ))}
      </FadeIn>
      <footer className="mt-12 flex w-full flex-col items-center justify-between gap-2 border-t border-[#D7E2EA]/15 pt-6 text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/50 sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
