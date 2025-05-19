'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function About() {
  const { t } = useTranslation();

  const paragraphs = [
    t('HOME.ABOUT.DESCRIPTION'),
    t(
      'HOME.ABOUT.PARAGRAPH_1',
      'Svakoj kompaniji pristupamo na autentičan način jer verujemo da je svaka kompanija jedinstvena. Pažljivo se obraćamo svakom klijentu i razumemo specifičnosti njihovih potreba što dovodi do dubljeg i efikasnijeg partnerstva.'
    ),
    t(
      'HOME.ABOUT.PARAGRAPH_2',
      'Naša suštinska svrha je vaše zadovoljstvo našim obukama koje dovode do konkretne transformacije i postizanja željenih rezultata.'
    ),
    t(
      'HOME.ABOUT.PARAGRAPH_3',
      'Kroz posvećeno mentorstvo, interaktivne sesije i podršku, gradimo vezu koja prevazilazi granice kursa postižući ciljeve zajedno. Svaki modul je pažljivo osmišljen da vam pruži praktično iskustvo i vrednost koja prevazilazi očekivanja.'
    ),
  ];

  return (
    <section className='text-left max-w-7xl w-full mx-auto mt-28 md:mt-44 px-4'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative uppercase text-4xl font-extrabold my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600"
      >
        {t('HOME.ABOUT.TITLE')}
      </motion.h2>

      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          className='mb-5 text-lg'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={i}
          variants={fadeInUp}
        >
          {text}
        </motion.p>
      ))}
    </section>
  );
}
