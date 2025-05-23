'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguageChange } from '@/hooks/i18n';

import { courses } from '@/data/courses';
import CourseCard from '@/components/course/CourseCard';
import Button from '@/components/common/Button/Button';

export default function Courses() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguageChange();
  const pathname = usePathname();
  const isCoursesPage = pathname === '/courses';

  const router = useRouter();

  const handleNavigate = () => {
    router.push('/contact');
  };

  const [animateCards, setAnimateCards] = useState(false);

  const [firstCardRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimateCards(true);
    }
  }, [inView]);

  const animationProps = {
    duration: isCoursesPage ? 0.6 : 1.0,
    delay: isCoursesPage ? 0.15 : 0.25,
  };

  return (
    <section className='text-center mx-auto w-full max-w-7xl my-20 md:my-20 px-4 overflow-x-hidden'>
      <h2
        className={`relative text-4xl font-extrabold mb-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 bg-success ${
          isCoursesPage ? 'text-white' : ''
        }`}
      >
        {t('COURSES.TITLE')}
      </h2>
      <ul className='grid grid-cols-fill-350 gap-8 relative mt-12 mx-auto'>
        {courses.map((course, idx) => (
          <div ref={idx === 0 ? firstCardRef : null} key={idx}>
            <CourseCard
              item={course}
              idx={idx}
              isCoursesPage={isCoursesPage}
              animationProps={animationProps}
              langPrefix={`/${currentLanguage}`}
            />
          </div>
        ))}
      </ul>
      <motion.div
        className='flex flex-col gap-48 justify-center items-center my-24'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
      >
        <Button variant='success' onClick={handleNavigate}>
          {t('HOME.COURSES.CONTACT_BUTTON')}
        </Button>
      </motion.div>
    </section>
  );
}
