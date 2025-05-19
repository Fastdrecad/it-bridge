'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { MdCheckCircle, MdEmail } from 'react-icons/md';

import '@/hooks/i18n';
import { getNewsletterSchema } from '@/validations/newsletterSchema';
import { NewsletterFormValues } from '@/validations/newsletterSchema';
import { capitalizeFirstLetter } from '@/utils/stringUtils';
import Button from '@/components/common/Button/Button';
import { newsletterInputs } from '@/data/newsletterInputs';
import FormInput from '@/components/form/FormInput';
import { ItBridgeLogo } from '@/components/icons';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Newsletter() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<
    'success' | 'error' | 'loading' | 'idle'
  >('idle');
  const [responseMsg, setResponseMsg] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(getNewsletterSchema()),
    mode: 'onBlur', // Validate on blur for better UX
  });

  const onSubmit: SubmitHandler<NewsletterFormValues> = async (data) => {
    setStatus('loading');

    try {
      const response = await axios.post('/api/subscribe', {
        firstName: capitalizeFirstLetter(data.firstName.trim()),
        lastName: capitalizeFirstLetter(data.lastName.trim()),
        email: data.email.trim(),
      });

      setStatus('success');
      setResponseMsg(response.data.message);
      reset();
    } catch (err: unknown) {
      console.error('Subscription error:', err);
      setStatus('error');
      if (axios.isAxiosError(err) && err.response) {
        setResponseMsg(
          err.response.data.error || t('NEWSLETTER.FORM.SERVER_ERROR')
        );
      } else {
        setResponseMsg(t('NEWSLETTER.FORM.SERVER_ERROR'));
      }
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setResponseMsg('');
    reset();
  };

  return (
    <section className='relative flex items-center justify-center min-h-[75vh] bg-gradient-to-r from-[#15103E] to-[#A0C943] overflow-hidden'>
      {/* Animated Background Logo */}
      <motion.div
        className='absolute right-[-200px] md:right-0 top-1/3 -translate-y-1/2 opacity-20 z-0'
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: -100, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <ItBridgeLogo width='900' color='#15103E' />
      </motion.div>

      {/* Animated Content */}
      <motion.div
        className='p-6 rounded-lg w-full max-w-screen-sm z-10 text-white'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {status !== 'success' && (
          <>
            <motion.h2
              className='text-4xl font-bold mb-4 text-center'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('NEWSLETTER.TITLE')}
            </motion.h2>
            <motion.p
              className='text-center mb-8 text-lg md:px-20'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t('NEWSLETTER.SUBTITLE')}
            </motion.p>
          </>
        )}

        {status === 'success' ? (
          <motion.div
            className='text-center'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
          >
            <MdCheckCircle className='text-5xl text-warning-600 mx-auto mb-4 animate-bounce' />
            <h3 className='text-2xl font-bold mb-2'>
              {t('NEWSLETTER.FORM.THANKS_TITLE')}
            </h3>
            <p className='mb-4'>{responseMsg}</p>
            <Button
              variant='success'
              className='mt-4 m-auto'
              onClick={resetForm}
            >
              {t('NEWSLETTER.FORM.NEW_SUBSCRIPTION')}
            </Button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {newsletterInputs.map((input) => (
              <FormInput
                key={input.id}
                id={input.id}
                name={input.name}
                type={input.type}
                placeholder={t(input.placeholder)}
                label={t(input.label)}
                register={register}
                error={errors[input.name]}
              />
            ))}

            <div className='flex items-center justify-center w-fit mx-auto'>
              <Button
                variant='success'
                className='text-secondary-500 whitespace-nowrap w-full'
                disabled={status === 'loading'}
                loading={status === 'loading'}
              >
                {t('NEWSLETTER.FORM.SUBMIT')}
                <MdEmail className='text-xl m-0 ms-2' />
              </Button>
            </div>

            {status === 'error' && (
              <motion.div
                className='text-orange-600 bg-orange-100 p-3 mt-4 rounded-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {responseMsg}
              </motion.div>
            )}
          </motion.form>
        )}
      </motion.div>
    </section>
    // <section className='relative flex items-center justify-center min-h-[85vh] bg-gradient-to-r from-[#15103E] to-[#A0C943] overflow-hidden'>
    //   {/* Floating Background Elements */}
    // <motion.div
    //   className='absolute w-40 h-40 bg-green-300 rounded-full opacity-20 z-0 pointer-events-none'
    //   style={{ top: '10%', left: '5%' }}
    //   animate={{ y: [0, 30, 0] }}
    //   transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    // />
    // <motion.div
    //   className='absolute w-32 h-32 bg-yellow-400 rounded-full opacity-20 z-0 pointer-events-none'
    //   style={{ bottom: '15%', right: '5%' }}
    //   animate={{ y: [0, -25, 0] }}
    //   transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    // />
    //   <motion.div
    //     className='absolute right-[-200px] md:right-0 top-1/2 -translate-y-1/2 opacity-20 z-0'
    //     initial={{ x: 300, opacity: 0 }}
    //     animate={{ x: 0, opacity: 0.2 }}
    //     transition={{ duration: 1.5, ease: 'easeOut' }}
    //   >
    //     <ItBridgeLogo width='900' color='#15103E' />
    //   </motion.div>

    //   {/* Content */}
    //   <motion.div
    //     className='p-6 rounded-lg w-full max-w-screen-sm z-10 text-white'
    //     initial='hidden'
    //     whileInView='visible'
    //     viewport={{ once: true }}
    //     variants={containerVariants}
    //   >
    //     {status !== 'success' && (
    //       <>
    //         <motion.h2
    //           className='text-4xl font-bold mb-4 text-center'
    //           variants={itemVariants}
    //         >
    //           {t('NEWSLETTER.TITLE')}
    //         </motion.h2>
    //         <motion.p
    //           className='text-center mb-8 text-lg md:px-20'
    //           variants={itemVariants}
    //         >
    //           {t('NEWSLETTER.SUBTITLE')}
    //         </motion.p>
    //       </>
    //     )}

    //     {status === 'success' ? (
    //       <motion.div
    //         className='text-center'
    //         initial={{ scale: 0.8, opacity: 0 }}
    //         animate={{ scale: 1, opacity: 1 }}
    //         transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
    //       >
    //         <MdCheckCircle className='text-5xl text-warning-600 mx-auto mb-4 animate-bounce' />
    //         <h3 className='text-2xl font-bold mb-2'>
    //           {t('NEWSLETTER.FORM.THANKS_TITLE')}
    //         </h3>
    //         <p className='mb-4'>{responseMsg}</p>
    //         <Button
    //           variant='success'
    //           className='mt-4 m-auto'
    //           onClick={resetForm}
    //         >
    //           {t('NEWSLETTER.FORM.NEW_SUBSCRIPTION')}
    //         </Button>
    //       </motion.div>
    //     ) : (
    //       <motion.form
    //         onSubmit={handleSubmit(onSubmit)}
    //         variants={containerVariants}
    //       >
    //         {newsletterInputs.map((input, index) => (
    //           <motion.div key={input.id} variants={itemVariants}>
    //             <FormInput
    //               id={input.id}
    //               name={input.name}
    //               type={input.type}
    //               placeholder={t(input.placeholder)}
    //               label={t(input.label)}
    //               register={register}
    //               error={errors[input.name]}
    //             />
    //           </motion.div>
    //         ))}

    //         <motion.div
    //           className='flex items-center justify-center w-fit mx-auto'
    //           variants={itemVariants}
    //         >
    //           <Button
    //             variant='success'
    //             className='text-secondary-500 whitespace-nowrap w-full'
    //             disabled={status === 'loading'}
    //             loading={status === 'loading'}
    //           >
    //             {t('NEWSLETTER.FORM.SUBMIT')}
    //             <MdEmail className='text-xl m-0 ms-2' />
    //           </Button>
    //         </motion.div>

    //         {status === 'error' && (
    //           <motion.div
    //             className='text-orange-600 bg-orange-100 p-3 mt-4 rounded-lg'
    //             initial={{ opacity: 0 }}
    //             animate={{ opacity: 1 }}
    //           >
    //             {responseMsg}
    //           </motion.div>
    //         )}
    //       </motion.form>
    //     )}
    //   </motion.div>
    // </section>
  );
}
