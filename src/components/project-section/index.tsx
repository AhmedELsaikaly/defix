import { Container } from 'reactstrap';
import ProjectsImages from '../projects-images';
import { importImageByProcessEnv } from '../../utils';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import styles from './index.module.scss';
import Subtext from '../subtext';

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
  title?: string;
  subTitle?: string;
  className?: string;
}

const ProjectsSection = ({
  withMoreBtn = true,
  title,
  subTitle,
  className,
}: ProjectsSectionProps) => {
  const navigate = useNavigate();
  return (
    <SectionsWrapper
      id='projects'
      className={`${styles.projectsSection} ${className}`}
    >
      <Container>
        {title && <SectionsTitle text={title} />}
        {subTitle && <Subtext text={subTitle} />}

        <div
          className={styles.projectsTabs}
          data-aos='fade-up'
          data-aos-delay='250'
        >
          <ProjectsImagesComp />
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
