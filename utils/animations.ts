import { Variants } from 'framer-motion';

export const slideUp: Variants = {
  animate: (i: number) => ({
    transformOrigin: ['100% 100% 0px', '100% 100% 0px'],
    transform: [
      'translate(0%, 0%) rotate(0deg) scale(1.1, 1.05)',
      'translate(0%, -100%) rotate(6deg) scale(1.1, 1.05)',
    ],
    backgroundColor: 'rgb(0 21 20)',
    transition: {
      duration: 0.6,
      delay: i * 0.04,
      ease: [0.87, 0, 0.13, 1],
      times: [0, 1], // Keyframes timing
      backgroundColor: { duration: 0 }, // Instant color change
    },
  }),
  exit: (i: number) => ({
    transformOrigin: ['100% 0% 0px', '100% 0% 0px'],
    transform: [
      'translate(0%, 100%) rotate(-6deg) scale(1.1, 1.05)',
      'translate(0%, 0%) rotate(0deg) scale(1.1, 1.05)',
    ],
    backgroundColor: '#182B2A',
    transition: {
      duration: 0.4,
      delay: i * 0.04,
      ease: [0.87, 0, 0.13, 1],
      times: [0, 1], // Keyframes timing
      backgroundColor: { duration: 0 }, // Instant color change
    },
  }),
};

export const introSlideUp: Variants = {
  initial: {
    transform: 'translate(0%, 0%) rotate(0deg) scale(1.1, 1.05)',
    backgroundColor: '#110D29',
  },
  animate: (i: number) => ({
    transformOrigin: ['100% 100% 0px', '100% 100% 0px'],
    transform: [
      'translate(0%, 0%) rotate(0deg) scale(1.1, 1.05)',
      'translate(0%, -100%) rotate(6deg) scale(1.1, 1.05)',
    ],
    backgroundColor: '#110D29',
    transition: {
      duration: 0.6,
      delay: i * 0.04,
      ease: [0.87, 0, 0.13, 1],
      times: [0, 1], // Keyframes timing
      backgroundColor: { duration: 0 }, // Instant color change
    },
  }),
};

export const anim = (variants: Variants, i: number) => ({
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants,
  custom: i,
});
