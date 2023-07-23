import { Container } from 'reactstrap';
import { MailIcon, WhatsappIcon } from '../icons';
import styles from './index.module.scss';

const TopNav = () => {
  return (
    <div className={styles.topNavWrapper}>
      <Container>
        <div className={styles.topNavInnerWrapper}>
          <div className={styles.topNavOpenDays}>
            <p>
              <span>الأحد - الخميس</span>
              <span>9:00 ص - 5:00 م</span>
            </p>
          </div>
          <ul className={styles.topNavContact}>
            <li>
              <a href='#' title='تواصل مع ديفكس عبرالواتسب'>
                <span className={styles.text}>0570707008</span>
                <span>
                  <WhatsappIcon />
                </span>
              </a>
            </li>
            <li>
              <a href='#' title='تواصل مع ديفكس عبر البريد الإلكتروني'>
                <span className={styles.text}>Info@deffixsa.com</span>
                <span>
                  <MailIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
