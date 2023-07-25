import {
  Button,
  ProjectsImages,
  SectionsTitle,
  SectionsWrapper,
  Tabs,
} from '../../../components';
import { Container } from 'reactstrap';
import styles from '../index.module.scss';
import { importImageByProcessEnv } from '../../../utils';

const ProjectsImagesComp = () => {
  return (
    <ProjectsImages
      images={[
        importImageByProcessEnv('1.png'),
        importImageByProcessEnv('2.png'),
        importImageByProcessEnv('3.png'),
        importImageByProcessEnv('4.png'),
        importImageByProcessEnv('5.png'),
      ]}
    />
  );
};

export const ProjectsSection = () => {
  return (
    <SectionsWrapper className={styles.projectsSection}>
      <Container>
        <SectionsTitle text='مشاريعنا' />
        <p data-aos='fade-up' data-aos-delay='200' className={styles.subtext}>
          تقدم شركة ديفكس خدمات احترافية وتلبية احتياجات سوق العمل في مختلف
          التخصصات
        </p>
        <div
          className={styles.projectsTabs}
          data-aos='fade-up'
          data-aos-delay='250'
        >
          <Tabs
            tabs={[
              { name: 'الإنشاءات', content: <ProjectsImagesComp /> },
              { name: 'الصيانة', content: <ProjectsImagesComp /> },
            ]}
          />
        </div>

        <div
          className={styles.moreBtnWrap}
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <Button whiteText type='primary' fullRadius>
            المزيد
          </Button>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
