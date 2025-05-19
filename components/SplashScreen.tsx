'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import ItBridgeLogo from './icons/ItBridgeLogo';

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [scope, animate] = useAnimate();

  // if mobile use 2 columns
  const [nbOfColumns, setNbOfColumns] = useState(4);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setNbOfColumns(isMobile ? 2 : 4);
  }, []);

  // Handle entrance animation for the logo (immediate 300ms reveal)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.body.classList.add('no-scroll');

    const enterAnimation = async () => {
      await animate(
        '.it-logo-end',
        {
          clipPath: [
            'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', // Hidden state
            'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Fully revealed
          ],
          opacity: [0, 1], // Fade in from 0 to 1
        },
        {
          duration: 0.5,
          times: [0, 1],
          ease: [0.68, -0.55, 0.27, 1.55],
        }
      );

      await animate(
        '.logo-container',
        {
          opacity: [1, 0],
        },
        { duration: 0.5, ease: [0.87, 0, 0.13, 1] }
      );

      const loadInStrapPromises = Array.from({ length: nbOfColumns }).map(
        (_, i) =>
          animate(
            `.loading-column-${i}`,
            {
              transformOrigin: ['0% 100% 0px', '0% 100% 0px'],
              transform: [
                'translate(0%, 0%) rotate(0deg) skew(-4.96067e-05deg, 0deg) scale(1.1, 1.05)',
                'translate(0%, -100%) rotate(-6deg) skew(-4.96067e-05deg, 0deg) scale(1.1, 1.05)',
              ],
              backgroundColor: '#110D29',
            },
            {
              duration: 0.375,
              delay: i * 0.04,
              ease: [0.87, 0, 0.13, 1],
              times: [0, 1], // Keyframes timing
              backgroundColor: { duration: 0 }, // Instant color change
            }
          )
      );

      const transitionStrapPromises = Array.from({ length: nbOfColumns }).map(
        (_, i) =>
          animate(
            `.transition-column-${i}`,
            {
              transformOrigin: ['100% 100% 0px', '100% 100% 0px'],
              transform: [
                'translate(0%, 0%) rotate(0deg) scale(1.1, 1.05)',
                'translate(0%, -100%) rotate(6deg) scale(1.1, 1.05)',
              ],
              backgroundColor: ['#7C9A3F'],
            },
            {
              duration: 0.4,
              delay: i * 0.04 + 0.125,
              ease: [0.87, 0, 0.13, 1],
              times: [0, 1], // Keyframes timing
              backgroundColor: { duration: 0 }, // Instant color change
            }
          )
      );

      await Promise.all([...loadInStrapPromises, ...transitionStrapPromises]);

      // Signal completion
      finishLoading();

      // Reset body overflow when the animation completes
      document.body.classList.remove('no-scroll');
    };

    enterAnimation();
    window.scrollTo(0, 0);
  }, [nbOfColumns]);

  return (
    <>
      <motion.div
        ref={scope}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }} // Keep visible during exit animations
        className='fixed inset-0 overflow-hidden z-[2500]  flex pointer-events-none'
      >
        <div className='fixed inset-0 overflow-hidden z-[2500]  flex'>
          {Array.from({ length: nbOfColumns }).map((_, i) => (
            <motion.div
              key={`loading-column-${i}`}
              className={`loading-column-${i} relative w-full h-full bg-[#110D29] flex justify-center items-center`}
            />
          ))}

          {/* Logo positioned in the center with CSS animations */}
          <div className='absolute inset-0 flex justify-center items-center z-[2501]'>
            <div className='logo-container relative  overflow-hidden'>
              <motion.div
                className=''
                initial='visible'
                animate='hidden'
                variants={{
                  visible: { y: 0 },
                  hidden: { y: '-100%' },
                }}
                transition={{ duration: 0.2, delay: 0.65 }}
              >
                {/* Gray logo only visible initially */}
                <div className='it-logo-start'>
                  <ItBridgeLogo width='240' showText={true} color='#263634' />
                </div>

                {/* White logo animates in immediately (fast reveal) */}
                <div
                  className='it-logo-end absolute top-0 left-0'
                  style={{
                    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                  }}
                >
                  <ItBridgeLogo width='240' showText={true} color='#9AA2A1' />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='fixed inset-0 overflow-hidden z-[1500] flex'>
          {Array.from({ length: nbOfColumns }).map((_, i) => (
            <motion.div
              key={`transition-${i}`}
              className={`transition-column-${i} relative w-full h-full flex justify-center items-center`}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SplashScreen;
