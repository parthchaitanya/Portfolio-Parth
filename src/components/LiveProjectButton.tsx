import { ArrowUpRight, Github } from 'lucide-react';

export default function LiveProjectButton({
  href,
  label = 'Live Project',
  icon = 'arrow',
}: {
  href: string;
  label?: string;
  icon?: 'arrow' | 'github';
}) {
  const Icon = icon === 'github' ? Github : ArrowUpRight;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {label}
      <Icon size={18} strokeWidth={2} />
    </a>
  );
}
