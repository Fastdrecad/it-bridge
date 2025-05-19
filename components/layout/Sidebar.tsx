// Sidebar.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react/dist/iconify.js';

interface LinkItem {
  href: string;
  labelKey: string;
  subLinks?: LinkItem[];
}

interface SidebarProps {
  isOpen: boolean;
  isHomePage: boolean;
  isScrolled: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const { t } = useTranslation();

  const links: LinkItem[] = useMemo(
    () => [
      { href: '/', labelKey: 'HEADER.HOME' },
      {
        href: '/courses',
        labelKey: 'HEADER.COURSES',
        subLinks: [
          { href: '/courses/hr-starter', labelKey: 'HR' },
          { href: '/courses/soft-skills', labelKey: 'Soft Skills' },
          { href: '/courses/business-english', labelKey: 'Business English' },
          { href: '/courses/pcm', labelKey: 'PCM' },
          { href: '/courses/power-bi', labelKey: 'Power BI' },
          { href: '/courses/excel', labelKey: 'Excel' },
        ],
      },
      { href: '/about', labelKey: 'HEADER.ABOUT' },
      // { href: "/calendar", labelKey: "HEADER.CALENDAR" },
      { href: '/contact', labelKey: 'HEADER.CONTACT' },
    ],
    []
  );

  const handleDropdownToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Check if the pathname matches the main "Courses" link or any of its sublinks
  const isCoursesActive =
    links[1].subLinks?.some((subLink) => pathname === subLink.href) ||
    pathname === '';

  return (
    <div className='md:hidden md:h-screen md:w-full'>
      <aside
        className={`fixed right-0 w-full bg-white text-black z-20 transform h-full text-xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='flex h-screen mt-10'>
          {/* Fixed Top Section */}
          <ul className='inline-block mx-8 w-full text-4xl'>
            <li className='my-10'>
              <Link
                href='/'
                className={`text-nowrap uppercase ${
                  pathname === '/' ? 'font-bold' : 'font-medium'
                }`}
                onClick={onToggle}
              >
                {t('HEADER.HOME')}
              </Link>
            </li>
            <li className='relative z-50 my-10' ref={dropdownRef}>
              <div className='flex items-center gap-1'>
                <Link
                  href='/courses'
                  className={`text-nowrap uppercase ${
                    isCoursesActive ? 'font-bold' : 'font-medium'
                  }`}
                  onClick={onToggle}
                >
                  {t('HEADER.COURSES')}
                </Link>
                <div
                  className='cursor-pointer ml-2'
                  onClick={handleDropdownToggle}
                >
                  {isDropdownOpen ? (
                    <Icon icon='mdi:chevron-up' className='text-2xl' />
                  ) : (
                    <Icon icon='mdi:chevron-down' className='text-2xl' />
                  )}
                </div>
              </div>
              {isDropdownOpen && (
                <ul className='mt-6 ms-2 space-y-2 bg-warning-600 py-3 rounded-2xl'>
                  {links[1].subLinks?.map((subLink) => (
                    <li key={subLink.href}>
                      <Link
                        href={subLink.href}
                        className={`block px-5 py-1 text-base leading-6 ${
                          pathname === subLink.href
                            ? 'bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white font-bold rounded-sm'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={onToggle}
                      >
                        {subLink.labelKey}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className='my-10'>
              <Link
                href='/about'
                className={`text-nowrap uppercase ${
                  pathname === '/about' ? 'font-bold' : 'font-medium'
                }`}
                onClick={onToggle}
              >
                {t('HEADER.ABOUT')}
              </Link>
            </li>
            {/* <li className="my-2">
              <Link
                href="/kalendar"
                className={`text-nowrap uppercase ${
                  pathname === "/kalendar" ? "font-bold" : "font-medium"
                }`}
                onClick={onToggle}
              >
                {t("HEADER.CALENDAR")}
              </Link>
            </li> */}
            <li className='my-10'>
              <Link
                href='/contact'
                className={`text-nowrap uppercase ${
                  pathname === '/contact' ? 'font-bold' : 'font-medium'
                }`}
                onClick={onToggle}
              >
                {t('HEADER.CONTACT')}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
