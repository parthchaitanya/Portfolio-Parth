import { useMemo, type ComponentType, type CSSProperties, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Tag = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'span' | 'section' | 'li' | 'nav' | 'a';

type FadeInProps = {
  children?: ReactNode;
  as?: Tag;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
};

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  ...rest
}: FadeInProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = useMemo(() => motion.create(as) as ComponentType<any>, [as]);

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
