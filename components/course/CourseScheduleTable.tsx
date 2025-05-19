'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '@/hooks/i18n';

interface CourseSchedule {
  participants: string;
  location: string;
  schedule: string;
  duration: string;
  price?: string;
}

interface CourseScheduleTableProps {
  schedules: CourseSchedule[];
  title?: string;
}

const CourseScheduleTable: React.FC<CourseScheduleTableProps> = ({
  schedules,
  title,
}) => {
  const hasPriceColumn = schedules.some((schedule) => !!schedule.price);
  const { t } = useTranslation();

  return (
    <div className='container mx-auto p-8'>
      {title && <h1 className='text-2xl font-bold mb-4'>{title}</h1>}
      <div className='overflow-x-auto'>
        <div className='border border-gray-300 rounded-2xl overflow-hidden hidden md:block'>
          <table className='min-w-full text-[#15103E]'>
            <thead className='border-b border-gray-300'>
              <tr
                className='bg-[#cfe3a0] text-left'
                style={{
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
              >
                <th className='py-3 px-6'>
                  {t('CALENDAR.TABLE.PARTICIPANTS', 'Broj polaznika')}
                </th>
                <th className='py-3 px-6'>
                  {t('CALENDAR.TABLE.LOCATION', 'Mesto')}
                </th>
                <th className='py-3 px-6'>
                  {t('CALENDAR.TABLE.SCHEDULE', 'Termin')}
                </th>
                <th className='py-3 px-6'>
                  {t('CALENDAR.TABLE.DURATION', 'Ukupno trajanje')}
                </th>
                {hasPriceColumn && (
                  <th className='py-3 px-6'>
                    {t('CALENDAR.TABLE.PRICE', 'Cena')}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <tr
                  key={index}
                  className={`${
                    index === schedules.length - 1 ? '' : 'border-b'
                  } text-[#15103E] ${
                    index % 2 === 0 ? 'bg-[#f2f6e7]' : 'bg-[#fcfdfc]'
                  } md:table-row flex flex-col w-full`}
                  style={
                    index === schedules.length - 1
                      ? {
                          borderBottomLeftRadius: '1rem',
                          borderBottomRightRadius: '1rem',
                        }
                      : {}
                  }
                >
                  <td className='py-3 px-6'>{schedule.participants}</td>
                  <td className='py-3 px-6'>{schedule.location}</td>
                  <td className='py-3 px-6'>{schedule.schedule}</td>
                  <td className='py-3 px-6'>{schedule.duration}</td>
                  {hasPriceColumn && (
                    <td className='py-3 px-6'>{schedule.price || 'N/A'}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Stacked Layout for Mobile */}
        <div className='md:hidden text-[#15103E]'>
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className='bg-white border border-gray-300 rounded-lg mb-4 '
            >
              <div className='p-4 bg-[#cfe3a0] rounded-t-lg'>
                <strong>
                  {t('CALENDAR.TABLE.PARTICIPANTS', 'Broj polaznika')}:{' '}
                </strong>
                {schedule.participants}
              </div>
              <div className='p-4'>
                <strong>{t('CALENDAR.TABLE.LOCATION', 'Mesto')}: </strong>
                {schedule.location}
              </div>
              <div className='p-4 bg-[#cfe3a0]'>
                <strong>{t('CALENDAR.TABLE.SCHEDULE', 'Termin')}: </strong>
                {schedule.schedule}
              </div>
              <div className='p-4'>
                <strong>
                  {t('CALENDAR.TABLE.DURATION', 'Ukupno trajanje')}:{' '}
                </strong>
                {schedule.duration}
              </div>
              {hasPriceColumn && (
                <div className='p-4 bg-[#cfe3a0] rounded-b-lg'>
                  <strong>{t('CALENDAR.TABLE.PRICE', 'Cena')}: </strong>
                  {schedule.price || 'N/A'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseScheduleTable;
