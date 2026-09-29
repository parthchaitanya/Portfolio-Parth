import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import Orb from '../components/Orb';
import { navLinks, profile } from '../data';

export default function HeroSection() {
  const [portraitFailed, setPortraitFailed] = useState(false);
  const showPortrait = Boolean(profile.portrait) && !portraitFailed;

  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[15.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          Hi, i&apos;m {profile.firstName}
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {profile.tagline}
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className={
          showPortrait
            ? 'absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]'
            : 'pointer-events-none absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-[4%] sm:w-[320px] sm:translate-y-0 md:w-[380px] lg:w-[440px]'
        }
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          {showPortrait ? (
            <img
              src={profile.portrait!}
              alt={profile.fullName}
              className="block w-full select-none"
              draggable={false}
              onError={() => setPortraitFailed(true)}
            />
          ) : (
            <Orb />
          )}
        </Magnet>
      </FadeIn>
    </section>
  );
}
