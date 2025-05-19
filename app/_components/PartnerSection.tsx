'use client';

import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import '@/hooks/i18n';
import { PlaneIcon } from '@/components/icons';
import { motion } from 'framer-motion';

export default function Partner() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email) {
      alert(`Email submitted: ${email}`);
      router.push('/thank-you');
    } else {
      alert(t('PARTNER.VALIDATION.EMAIL_REQUIRED'));
    }
  };

  return (
    <section className='my-32 px-4'>
      <div className='max-w-[1140px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 lg:gap-32'>
        {/* Left Side: Text Content */}
        <motion.div
          className='flex-1 flex flex-col gap-6 text-center lg:text-left'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className='text-3xl font-bold'>{t('PARTNER.TITLE')}</h2>
          <p className='text-lg text-gray-300'>{t('PARTNER.DESCRIPTION')}</p>
        </motion.div>

        {/* Right Side: Plane Icon */}
        <motion.div
          className='flex-1 flex justify-center lg:justify-end'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }}
            className='w-[200px]'
          >
            <PlaneIcon stroke='white' width={200} className='self-center' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
