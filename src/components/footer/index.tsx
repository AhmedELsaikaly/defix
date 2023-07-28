import { Container } from 'reactstrap';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { getValueByLang, importImageByProcessEnv } from '../../utils';
import { InstaIcon, SnapShatIcon, TwitterIcon } from '../icons';
import { BiLang } from '../../components';
import { FooterData } from '../../models';
interface FooterDataProps {
  footerData: FooterData;
}

const Footer = ({ footerData }: FooterDataProps) => {
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
                src={getValueByLang(footerData?.logoAr, footerData?.logoEn)}
              />
            </Link>
            <p>
              <BiLang
                arValue={footerData?.footerAr}
                enValue={footerData?.footerEn}
              />
            </p>
          </div>
          <div className={styles.endFooterSection}>
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
