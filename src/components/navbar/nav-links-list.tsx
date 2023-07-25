import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { importImageByProcessEnv } from '../../utils';
import Button from '../button';
import styles from './index.module.scss';

interface NavLinksListProps {
  isSideMenu?: boolean;
  onMenuButtonClick?: () => void;
}

export const NavLinksList = ({
  isSideMenu = false,
  onMenuButtonClick,
}: NavLinksListProps) => {
  return (
    <div
      className={`${styles.navbarWrapper} ${
        isSideMenu ? styles.sideMenuLinksWrapper : ''
      }`}
    >
      <Link to={ROUTES.home} className={styles.navbarBrand}>
        <img
          className='img-full'
          alt='ديفكس'
          title='ديفكس'
          src={importImageByProcessEnv('logo.png')}
        />
      </Link>
      {!isSideMenu && (
        <button className={styles.menuToggler} onClick={onMenuButtonClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <line x1='3' y1='12' x2='21' y2='12'></line>
            <line x1='3' y1='6' x2='21' y2='6'></line>
            <line x1='3' y1='18' x2='15' y2='18'></line>
          </svg>
        </button>
      )}

      <ul className={styles.linksWrapper}>
        <li>
          <Link to={ROUTES.home} className={styles.active}>
            الرئيسية
          </Link>
        </li>

        <li>
          <Link to={ROUTES.home}>من نحن</Link>
        </li>
        <li>
          <Link to={ROUTES.home}>خدماتنا</Link>
        </li>
        <li>
          <Link to={ROUTES.home}>إنجازاتنا</Link>
        </li>
        <li>
          <Link to={ROUTES.home}>المشاريع</Link>
        </li>
        <li>
          <Link to={ROUTES.home}>عملاؤنا</Link>
        </li>
      </ul>
      <Link to='#' className={styles.ctaWrap}>
        <Button type='outlined-white' fullRadius>
          تواصل معنا
        </Button>
      </Link>
    </div>
  );
};
