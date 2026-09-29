import { Download } from 'lucide-react';
import { profile } from '../data';

export default function ResumeButton({ label = 'Download Resume' }: { label?: string }) {
  return (
    <a
      href={profile.resumeUrl}
      download="Parth-Chaitanya-Resume.pdf"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {label}
      <Download size={18} strokeWidth={2} />
    </a>
  );
}
