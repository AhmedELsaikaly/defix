import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { getValueByLang, importImageByProcessEnv } from '../../utils';
import Button from '../button';
import styles from './index.module.scss';
import { Menu } from '../icons';
import ChangeLanguage from '../change-language';
import { HeaderData } from '../../models';
import BiLang from '../bi-lang-comp';

interface NavLinksListProps {
  isSideMenu?: boolean;
  isChangeLangPrimary?: boolean;
  onMenuButtonClick?: () => void;
  setSideMenuOpen?: (opened: boolean) => void;
  data?: HeaderData;
}

export const NavLinksList = ({
  isSideMenu = false,
  onMenuButtonClick,
  setSideMenuOpen,
  isChangeLangPrimary = false,
  data,
}: NavLinksListProps) => {
  const closeSideMenu = () => {
    if (setSideMenuOpen) {
      setSideMenuOpen(false);
    }
  };
  const navLinks = [
    {
      nameAr: data?.TitleHomeAr,
      nameEn: data?.TitleHomeEn,
      targetSection: 'home',
    },
    {
      nameAr: data?.TitleAboutUsAr,
      nameEn: data?.TitleAboutUsEr,
      targetSection: 'about',
    },
    {
      nameAr: data?.TitleOurServicesAr,
      nameEn: data?.TitleOurServicesEn,
      targetSection: 'services',
    },
    {
      nameAr: data?.TitleOurProjectsAr,
      nameEn: data?.TitleOurProjectsEn,
      targetSection: 'projects',
    },
    {
      nameAr: data?.TitleOurClientsAr,
      nameEn: data?.TitleOurClientsEn,
      targetSection: 'clients',
    },
    {
      nameAr: data?.TitleOurAchievementsAr,
      nameEn: data?.TitleOurAchievementsEn,
      targetSection: 'achievement',
    },
  ];

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
          src={getValueByLang(data?.darkLogoAr, data?.darkLogoEn)}
        />
      </Link>

      <ul className={styles.linksWrapper}>
        {navLinks.map((navLinkItem) => (
          <li key={navLinkItem.targetSection}>
            <Link
              onClick={(e) => handleNavLinkClick(e, navLinkItem.targetSection)}
              to={`#${navLinkItem.targetSection}`}
              className={`${
                activeLinkItem === navLinkItem.targetSection
                  ? styles.active
                  : ''
              }`}
            >
              {getValueByLang(navLinkItem.nameAr, navLinkItem.nameEn)}
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
            <BiLang
              arValue={data?.TitleOurConnectWithUsAr}
              enValue={data?.TitleOurConnectWithUsEn}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};
