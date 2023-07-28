import { Container } from 'reactstrap';
import ProjectsImages from '../projects-images';
import { importImageByProcessEnv } from '../../utils';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Tabs from '../tabs';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import styles from './index.module.scss';

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

interface ProjectsSectionProps {
  withMoreBtn?: boolean;
}

const ProjectsSection = ({ withMoreBtn = true }: ProjectsSectionProps) => {
  const navigate = useNavigate();
  return (
    <SectionsWrapper id='projects' className={styles.projectsSection}>
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
        {withMoreBtn && (
          <div
            className={styles.moreBtnWrap}
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <Button
              onClick={() => navigate(ROUTES.projects)}
              whiteText
              type='primary'
              fullRadius
            >
              المزيد
            </Button>
          </div>
        )}
      </Container>
    </SectionsWrapper>
  );
};
export default ProjectsSection;
