import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { importImageByProcessEnv } from '../../utils';
import Button from '../button';
import styles from './index.module.scss';
import { Menu } from '../icons';
import ChangeLanguage from '../change-language';

interface NavLinksListProps {
  isSideMenu?: boolean;
  isChangeLangPrimary?: boolean;
  onMenuButtonClick?: () => void;
  setSideMenuOpen?: (opened: boolean) => void;
}

const navLinks = [
  { nameAr: 'الرئيسية', nameEn: 'home', targetSection: 'home' },
  { nameAr: 'من نحن', nameEn: 'About us', targetSection: 'about' },
  { nameAr: 'خدماتنا', nameEn: 'Services', targetSection: 'services' },
  { nameAr: 'إنجازاتنا', nameEn: 'home', targetSection: 'projects' },
  { nameAr: 'عملاؤنا', nameEn: 'home', targetSection: 'clients' },
];

export const NavLinksList = ({
  isSideMenu = false,
  onMenuButtonClick,
  setSideMenuOpen,
  isChangeLangPrimary = false,
}: NavLinksListProps) => {
  const closeSideMenu = () => {
    if (setSideMenuOpen) {
      setSideMenuOpen(false);
    }
  };

  const [activeLinkItem, setActiveLinkItem] = useState<string>('home');
  const handleNavLinkClick = (event: MouseEvent, targetSectionId: string) => {
    event.preventDefault();
    setActiveLinkItem(targetSectionId);

    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); // Scroll to the target section
      closeSideMenu();
    }
  };

  return (
    <div
      className={`${styles.navbarWrapper} ${
        isSideMenu ? styles.sideMenuLinksWrapper : ''
      }`}
    >
      <Link
        to={ROUTES.home}
        onClick={closeSideMenu}
        className={styles.navbarBrand}
      >
        <img
          className='img-full'
          alt='ديفكس'
          title='ديفكس'
          src={importImageByProcessEnv('logo.png')}
        />
      </Link>

      <ul className={styles.linksWrapper}>
        {navLinks.map(navLinkItem => (
          <li key={navLinkItem.targetSection}>
            <Link
              onClick={e => handleNavLinkClick(e, navLinkItem.targetSection)}
              to={`#${navLinkItem.targetSection}`}
              className={`${
                activeLinkItem === navLinkItem.targetSection
                  ? styles.active
                  : ''
              }`}
            >
              {navLinkItem.nameAr}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.changeLangCtaWrap}>
        {!isSideMenu && <ChangeLanguage isPrimary={isChangeLangPrimary} />}
        {!isSideMenu && (
          <button
            className={`${styles.menuToggler} menu-toggler`}
            onClick={onMenuButtonClick}
          >
            <Menu />
          </button>
        )}

        <Link to='#' className={styles.ctaWrap}>
          <Button onClick={closeSideMenu} type='outlined-white' fullRadius>
            تواصل معنا
          </Button>
        </Link>
      </div>
    </div>
  );
};
