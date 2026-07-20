import { motion, type MotionProps, type Variants } from "framer-motion";
import type { PropsWithChildren, HTMLAttributes } from "react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] } },
};

type FadeUpProps = PropsWithChildren<
  {
    delay?: number;
    className?: string;
    once?: boolean;
    as?: "div" | "section" | "article" | "li" | "h1" | "h2" | "h3" | "p" | "span";
  } & Omit<HTMLAttributes<HTMLElement>, "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration">
>;

export function FadeUp({ children, delay = 0, className, once = true, as = "div", ...rest }: FadeUpProps) {
  const Cmp = motion[as] as unknown as React.ComponentType<
    MotionProps & HTMLAttributes<HTMLElement>
  >;
  return (
    <Cmp
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Cmp>
  );
}

export function FloatY({
  children,
  className,
  amplitude = 6,
  duration = 6,
  delay = 0,
}: PropsWithChildren<{ className?: string; amplitude?: number; duration?: number; delay?: number }>) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  once = true,
}: PropsWithChildren<{
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
}>) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants: Variants = fadeUpVariants;

export function StaggerItem({
  children,
  className,
  as = "div",
}: PropsWithChildren<{ className?: string; as?: "div" | "article" | "li" }>) {
  const Cmp = motion[as] as unknown as React.ComponentType<
    MotionProps & HTMLAttributes<HTMLElement>
  >;
  return (
    <Cmp className={className} variants={staggerItemVariants}>
      {children}
    </Cmp>
  );
}
