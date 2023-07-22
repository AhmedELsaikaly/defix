import { Container } from 'reactstrap';
import { importImageByProcessEnv } from '../../utils';
import styles from './index.module.scss';
import Button from '../button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div
        className={styles.headerItem}
        style={{
          backgroundImage: `url(${importImageByProcessEnv('bg.png')})`,
        }}
      >
        <Container>
          <div className={styles.headerItemContent}>
            <h1>وجهتك الأولى في عالم الإنشاءات والصيانة</h1>
            <p>
              ندرك في Deffix أن كل مشروع إنشائي عبارة عن قطعة فريدة طلب تخطيطًا
              دقيقًا وحرفية ماهرة واهتمامًا لغاَ بأدق التفاصيل. سواء كنت تبدأ
              مشروعًا سكنيًا أو تجاريًا أو صناعيًا، فإن فريقنا من المحترفين هنا
              لتحويل رؤيتك إلى حقيقة
            </p>
            <div className={styles.headerItemCtaWrap}>
              <Button type='primary'>تحميل الملف الشخصي</Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
