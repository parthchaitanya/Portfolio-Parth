import { useEffect, useRef } from 'react';
import { marqueeRow1, marqueeRow2, type Tile } from '../data';

const gradients = [
  'linear-gradient(135deg, #1a0620 0%, #2a0b36 100%)',
  'linear-gradient(135deg, #111418 0%, #1d232b 100%)',
  'linear-gradient(135deg, #1f0a01 0%, #2e1206 100%)',
  'linear-gradient(135deg, #0b1320 0%, #122238 100%)',
];

function TileCard({ tile, i }: { tile: Tile; i: number }) {
  return (
    <div
      className="flex h-[150px] w-[300px] sm:h-[180px] sm:w-[360px] shrink-0 flex-col justify-between rounded-2xl border border-white/10 p-6"
      style={{ background: gradients[i % gradients.length] }}
    >
      <span className="text-xs sm:text-sm font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60">{tile.group}</span>
      <span className="hero-heading truncate text-3xl sm:text-4xl font-bold leading-tight">{tile.name}</span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const row1 = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const row2 = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  return (
    <section ref={sectionRef} className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div ref={row1Ref} className="flex gap-3" style={{ willChange: 'transform', marginLeft: '-60%' }}>
        {row1.map((t, i) => (
          <TileCard key={`a${i}`} tile={t} i={i} />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform', marginLeft: '-60%' }}>
        {row2.map((t, i) => (
          <TileCard key={`b${i}`} tile={t} i={i + 1} />
        ))}
      </div>
    </section>
  );
}
