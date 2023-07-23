import { Link } from 'react-router-dom';
import { ROUTES } from './../../constants/routes';
import { importImageByProcessEnv } from '../../utils';
import Button from '../button';
import styles from './index.module.scss';
import { Container } from 'reactstrap';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarWrapper}>
          <Link to={ROUTES.home} className={styles.navbarBrand}>
            <img
              className='img-full'
              alt='ديفكس'
              title='ديفكس'
              src={importImageByProcessEnv('logo.png')}
            />
          </Link>
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
      </Container>
    </nav>
  );
};

export default Navbar;
