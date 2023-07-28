import { Container } from 'reactstrap';
import { HeaderData } from '../../models';
import { MailIcon, WhatsappIcon } from '../icons';
import styles from './index.module.scss';

interface TopNavProps {
  headerData: HeaderData;
}
const TopNav = ({ headerData }: TopNavProps) => {
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
              <a
                href={`mailto:${headerData?.whatsApp}`}
                title='تواصل مع ديفكس عبرالواتسب'
              >
                <span className={styles.text}>{headerData?.whatsApp}</span>
                <span>
                  <WhatsappIcon />
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${headerData?.email}`}
                title='تواصل مع ديفكس عبر البريد الإلكتروني'
              >
                <span className={styles.text}>{headerData?.email}</span>
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
