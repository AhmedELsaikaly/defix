import { useEffect, useState } from 'react';
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
  selectedTab?: '0' | '1';
}

const ProjectsSection = ({
  withMoreBtn = true,
  selectedTab,
}: ProjectsSectionProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'0' | '1'>('0');
  useEffect(() => {
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
  }, [selectedTab]);
  return (
    <SectionsWrapper id='projects' className={styles.projectsSection}>
      <Container>
        <SectionsTitle text='مشاريعنا' />
        <Subtext
          text='   تقدم شركة ديفكس خدمات احترافية وتلبية احتياجات سوق العمل في مختلف
          التخصصات'
        />

        <div
          className={styles.projectsTabs}
          data-aos='fade-up'
          data-aos-delay='250'
        >
          {/* <Tabs
            activeTab={activeTab}
            setSelectedTab={setActiveTab}
            tabs={[
              {
                id: 'construction',
                name: 'الإنشاءات',
                content: <ProjectsImagesComp />,
              },
              {
                id: 'maintenance',
                name: 'الصيانة',
                content: <ProjectsImagesComp />,
              },
            ]}
          /> */}
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
