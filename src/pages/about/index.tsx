import { useEffect } from 'react';
import { Container } from 'reactstrap';
import {
  ContentWithImageComp,
  PagesHeader,
  SectionsTitle,
  SectionsWrapper,
} from '../../components';
import { importImageByProcessEnv } from '../../utils';
import styles from './index.module.scss';
import { useSearchParams } from 'react-router-dom';

const successPoints = [
  {
    title: 'الخبرة والتجربة',
    description:
      'تفتخر Deffix بفريق من المحترفين ذوي المهارات العالية والخبرة الواسعة في صناعة البناء. يتمتع مهندسون ومدراء المشاريع والحرفيون بالخبرة اللازمة للتعامل مع مشاريع ذات أي مقياس وتعقيد.',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
  {
    title: 'الخبرة والتجربة',
    description:
      'تفتخر Deffix بفريق من المحترفين ذوي المهارات العالية والخبرة الواسعة في صناعة البناء. يتمتع مهندسون ومدراء المشاريع والحرفيون بالخبرة اللازمة للتعامل مع مشاريع ذات أي مقياس وتعقيد.',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
  {
    title: 'الخبرة والتجربة',
    description:
      'تفتخر Deffix بفريق من المحترفين ذوي المهارات العالية والخبرة الواسعة في صناعة البناء. يتمتع مهندسون ومدراء المشاريع والحرفيون بالخبرة اللازمة للتعامل مع مشاريع ذات أي مقياس وتعقيد.',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
  {
    title: 'الخبرة والتجربة',
    description:
      'تفتخر Deffix بفريق من المحترفين ذوي المهارات العالية والخبرة الواسعة في صناعة البناء. يتمتع مهندسون ومدراء المشاريع والحرفيون بالخبرة اللازمة للتعامل مع مشاريع ذات أي مقياس وتعقيد.',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
];

const AboutUs = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams && searchParams.get('focused')) {
      const targetSection = document.getElementById(
        searchParams.get('focused')
      );
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, []);

  return (
    <div>
      <PagesHeader
        title='خدمات صيانة المطاعم'
        description='مرحبًا بكم في صفحة خدمات صيانة المطاعم الخاصة ب Deffix! ندرك في Deffix أهمية الحفاظ على مطعمك في حالة ممتازة لضمان تجربة تناول طعام سلسة لعملائك. يعمل فريقنا المتمرس من المتخصصين في الصيانة على تقديم خدمات صيانة موثوقة وفعالة تلبي احتياجات مطعمك الفريدة. سواء كانت خدمات صيانة وقائية منتظمة أو إصلاحات للمعدات أو ترقيات للمرافق، نحن في خدمتك.تشمل خدمات الصيانة لدى Deffix'
      />
      <SectionsWrapper className={styles.sectionItem} id='why-defix'>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle text='لماذا Deffix؟' />
            <p data-aos-delay='200' data-aos='fade-up'>
              اختيار ديفكس لخدمات البناء يأتي مع العديد من الفوائد والمزايا التي
              تميزنا عن المنافسة. فيما يلي بعض الأسباب المقنعة لاختيار ديفكس:
            </p>
          </div>
          {successPoints.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={item.description}
              imgLink={item.imageLink}
              title={item.title}
            />
          ))}
        </Container>
      </SectionsWrapper>

      <SectionsWrapper className={styles.sectionItem} id='vision'>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle text='رؤيتنا' />

            <p data-aos-delay='200' data-aos='fade-up'>
              ندرك في Deffix أن كل مشروع إنشائي عبارة عن قطعة فريدة طلب تخطيطًا
              دقيقًا وحرفية ماهرة واهتمامًا لغاَ بأدق التفاصيل. سواء كنت تبدأ
              مشروعًا سكنيًا أو تجاريًا أو صناعيًا، فإن فريقنا من المحترفين هنا
              لتحويل رؤيتك إلى حقيقة.
            </p>
          </div>
          {successPoints.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={item.description}
              imgLink={item.imageLink}
              title={item.title}
            />
          ))}
        </Container>
      </SectionsWrapper>

      <SectionsWrapper id='goals' className={styles.sectionItem}>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle text='أهدافنا' />

            <p data-aos-delay='200' data-aos='fade-up'>
              نحن ملتزمون بتقديم خدمات بناء استثنائية وتنفيذ مشاريع عالية الجودة
              تتجاوز توقعات عملائنا. هدفنا هو أن نكون شركة بناء رائدة معروفة
              بالاحترافية والخبرة والتفاني في التميز.
            </p>
          </div>
          {successPoints.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={item.description}
              imgLink={item.imageLink}
              title={item.title}
            />
          ))}
        </Container>
      </SectionsWrapper>
      <SectionsWrapper id='commitments' className={styles.sectionItem}>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle text='التزاماتنا' />

            <p data-aos-delay='200' data-aos='fade-up'>
              نحن ملتزمون بتقديم خدمات بناء استثنائية وتنفيذ مشاريع عالية الجودة
              تتجاوز توقعات عملائنا. هدفنا هو أن نكون شركة بناء رائدة معروفة
              بالاحترافية والخبرة والتفاني في التميز.
            </p>
          </div>
          {successPoints.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={item.description}
              imgLink={item.imageLink}
              title={item.title}
            />
          ))}
        </Container>
      </SectionsWrapper>
    </div>
  );
};

export default AboutUs;
