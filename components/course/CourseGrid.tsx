'use client';

import { FC } from 'react';
import { StaticImageData } from 'next/image';
import { MultilingualText, SupportedLanguage } from '@/types/common';
import { useLanguageChange } from '@/hooks/i18n';
import Link from 'next/link';
import Button from '@/components/common/Button/Button';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

type CourseSection = {
  title: string | MultilingualText;
  items: (string | MultilingualText)[];
  flags?: (string | StaticImageData)[];
  companyLogos?: FC[];
};

interface CourseGridProps {
  content: CourseSection[];
  course?: string;
}

const CourseGrid: React.FC<CourseGridProps> = ({ content = [], course }) => {
  const { t } = useTranslation();
  // Safely access the content array with null checks
  const logos =
    content && content.length > 1 && content[1]?.companyLogos
      ? content[1].companyLogos
      : undefined;
  const { currentLanguage } = useLanguageChange();

  // Improved handling of multilingual content
  const getLocalizedText = (
    text: string | MultilingualText,
    fallback: string,
    lang: SupportedLanguage
  ): string => {
    if (typeof text === 'object' && text !== null) {
      return text[lang] || text.en || text.sr || text.de || text.fr || fallback;
    }
    return text || fallback;
  };

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <section className='container mx-auto p-4 md:p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
        {content.map((section, index) => (
          <div
            key={index}
            className='bg-gray-50 shadow-md relative pt-10 md:pt-4 rounded-xl'
          >
            <h3 className='absolute top-0 transform -translate-y-1/2 bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-2xl font-bold px-6 py-3 pe-12 rounded-r-full'>
              {getLocalizedText(section.title, '', currentLanguage)}
            </h3>
            <ul className='list-disc space-y-2 p-6 pt-12 ps-10'>
              {section.items.map((item, idx) => (
                <li key={idx} className='text-gray-700'>
                  {getLocalizedText(item, '', currentLanguage)}
                </li>
              ))}
              {index === 1 && logos && (
                <div className='flex flex-wrap items-center gap-6 mt-4'>
                  {logos.map((LogoComponent, idx) => (
                    <div key={idx} className='flex items-center justify-center'>
                      <LogoComponent />
                    </div>
                  ))}
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>

      {course === 'hrStarter' && (
        <div className='container overflow-hidden mx-auto p-8 my-12 flex items-center justify-center'>
          <Link
            href='/assets/pdfs/hr-starter-program.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='success'>
              <span className='flex items-center'>
                {t('COURSES.HR_STARTER.PDF_BUTTON')}
                <BsFileEarmarkPdf className='text-xl ml-2' />
              </span>
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CourseGrid;
