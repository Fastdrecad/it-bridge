'use client';

import TestimonialItems from '@/components/ui/TestimonialCarousel';
import { testimonials } from '@/data';
import bg from '@/public/assets/images/backgrounds/testimonial-bg.webp';
import quoteImg from '@/public/assets/images/quote-start.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Type definition for the translated testimonials
interface TranslatedTestimonial {
  NAME: string;
  TITLE: string;
  POSITION: string;
  REVIEW: string;
}

export default function HomeTestimonials() {
  const { t } = useTranslation();

  // Try to get translated testimonials or use originals as fallback
  const useTranslatedItems = () => {
    try {
      const translated = t('TESTIMONIALS.ITEMS', { returnObjects: true });
      if (Array.isArray(translated) && translated.length > 0) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const useTranslated = useTranslatedItems();
  const title = t('TESTIMONIALS.TITLE', 'TESTIMONIJALI');

  return (
    <section className='relative w-full min-h-[100vh] md:min-h-[100vh] my-20 md:my-44 px-4 overflow-hidden rounded-[30px]'>
      <div className='absolute inset-0 w-full h-full '>
        <Image
          src={bg}
          fill
          alt='background image'
          className='object-cover object-center'
          loading='lazy'
          quality={60}
          placeholder='blur'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw'
        />
      </div>
      {/* Hero Wrapper */}
      <div className='absolute inset-0 w-full h-full left-1/2 transform -translate-x-1/2'>
        <div className='flex items-center justify-center gap-32 w-full h-full bg-slate-950/55 pt-16'>
          <TestimonialItems title={title}>
            {useTranslated
              ? (
                  t('TESTIMONIALS.ITEMS', {
                    returnObjects: true,
                  }) as TranslatedTestimonial[]
                ).map((item, index) => (
                  <div
                    className='flex items-center justify-center h-full relative'
                    key={index}
                  >
                    <div className='absolute top-0 left-4 sm:left-8 md:left-60'>
                      <Image
                        src={quoteImg}
                        alt='quote start'
                        className='w-8 h-auto sm:w-10 md:w-12 lg:w-14 xl:w-16'
                        loading='lazy'
                      />
                    </div>
                    <div className='absolute top-0 right-4 sm:right-8 md:right-60 rotate-180'>
                      <Image
                        src={quoteImg}
                        alt='quote start'
                        className='w-8 h-auto sm:w-10 md:w-12 lg:w-14 xl:w-16'
                        loading='lazy'
                      />
                    </div>
                    <div className='min-h-[400px] h-full w-2/3 md:w-1/2 text-center text-white flex flex-col relative justify-between items-center pb-5 gap-8'>
                      <div>
                        <p className='text-2xl pb-8 md:py-8 md:pt-12 text-warning-600'>
                          {item.TITLE}
                        </p>
                        <em>
                          <p className='text-center text-sm md:text-lg'>
                            {item.REVIEW}
                          </p>
                        </em>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-3xl font-bold text-white py-2'>
                          {item.NAME}
                        </h3>
                        <h4 className='text-md md:text-lg text-white pb-2'>
                          {item.POSITION}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))
              : testimonials.map((item, index) => (
                  <div
                    className='flex items-center justify-center h-full relative'
                    key={index}
                  >
                    <div className='absolute top-0 left-8 md:left-60'>
                      <Image
                        src={quoteImg}
                        alt='quote start'
                        className='w-8 h-auto sm:w-10 md:w-12 lg:w-14 xl:w-16'
                        loading='lazy'
                      />
                    </div>
                    <div className='absolute top-0 right-8 md:right-60 rotate-180'>
                      <Image
                        src={quoteImg}
                        alt='quote start'
                        className='w-8 h-auto sm:w-10 md:w-12 lg:w-14 xl:w-16'
                        loading='lazy'
                      />
                    </div>
                    <div className='min-h-[400px] h-full w-2/3 md:w-1/2 text-center text-white flex flex-col relative justify-between items-center pb-5 gap-8'>
                      <div>
                        <p className='text-2xl pb-8 md:py-8 md:pt-12 text-warning-600'>
                          {item.title}
                        </p>
                        <em>
                          <p className='text-center text-sm md:text-lg'>
                            {item.review}
                          </p>
                        </em>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-3xl font-bold text-white py-2'>
                          {item.name}
                        </h3>
                        <h4 className='text-md md:text-lg text-white pb-2'>
                          {item.position}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
          </TestimonialItems>
        </div>
      </div>
    </section>
  );
}
