import { Container } from 'reactstrap';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { importImageByProcessEnv } from '../../utils';
import { InstaIcon, SnapShatIcon, TwitterIcon } from '../icons';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInnerWrapper}>
          <div className={styles.startFooterSection}>
            <Link to='#' className={styles.footerLogo}>
              <img
                width={145}
                height={45}
                className='img-full'
                alt='ديفكس'
                title='ديفكس'
                src={importImageByProcessEnv('logo.png')}
              />
            </Link>
            <p>Deffix وجهتك الأولى في عالم الإنشاءات</p>
          </div>
          <div className={styles.endFooterSection}>
            <p>تابعنا على</p>
            <ul className={styles.socialList}>
              <li>
                <a href='#' title='تابع ديفكس عبر تويتر'>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href='#' title='تابع ديفكس عبر سنابشات'>
                  <SnapShatIcon />
                </a>
              </li>
              <li>
                <a href='#' title='تابع ديفكس عبر انستقرام'>
                  <InstaIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
