import { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';
import { Col, Container, Row } from 'reactstrap';
import {
  DetailsModal,
  SectionsTitle,
  SectionsWrapper,
  Subtext,
} from '../../components';
import { ProjectCard } from './components';
import { importImageByProcessEnv } from '../../utils';
import { useModalState } from '../../hooks';
import styles from './index.module.scss';

const projectsCards = [
  {
    title: 'مشروع رقم واحد',
    desc: 'ندرك في Deffix أهمية الحفاظ على مطعمك في حالة ممتازة لضمان تجربة تناول طعام سلسة لعملائك. يعمل فريقنا المتمرس من المتخصصين في الصيانة على تقديم خدمات صيانة موثوقة وفعالة تلبي احتياجات مطعمك الفريدة. سواء كانت خدمات صيانة وقائية منتظمة  خدمتك',
    imgLink: importImageByProcessEnv('project-1.png'),
    id: '1',
  },
  {
    title: 'مشروع رقم واحد',
    desc: 'ندرك في Deffix أهمية الحفاظ على مطعمك في حالة ممتازة لضمان تجربة تناول طعام سلسة لعملائك. يعمل فريقنا المتمرس من المتخصصين في الصيانة على تقديم خدمات صيانة موثوقة وفعالة تلبي احتياجات مطعمك الفريدة. سواء كانت خدمات صيانة وقائية منتظمة  خدمتك',
    imgLink: importImageByProcessEnv('project-1.png'),
    id: '1',
  },
  {
    title: 'مشروع رقم واحد',
    desc: 'ندرك في Deffix أهمية الحفاظ على مطعمك في حالة ممتازة لضمان تجربة تناول طعام سلسة لعملائك. يعمل فريقنا المتمرس من المتخصصين في الصيانة على تقديم خدمات صيانة موثوقة وفعالة تلبي احتياجات مطعمك الفريدة. سواء كانت خدمات صيانة وقائية منتظمة  خدمتك',
    imgLink: importImageByProcessEnv('project-1.png'),
    id: '1',
  },
  {
    title: 'مشروع رقم واحد',
    desc: 'ندرك في Deffix أهمية الحفاظ على مطعمك في حالة ممتازة لضمان تجربة تناول طعام سلسة لعملائك. يعمل فريقنا المتمرس من المتخصصين في الصيانة على تقديم خدمات صيانة موثوقة وفعالة تلبي احتياجات مطعمك الفريدة. سواء كانت خدمات صيانة وقائية منتظمة  خدمتك',
    imgLink: importImageByProcessEnv('project-1.png'),
    id: '1',
  },
];

const Projects = () => {
  const [modalContent, setModalContent] = useState<any>();
  const { isOpen, openModal, toggleModal } = useModalState();
  const handleDetailsClick = (details: any) => {
    setModalContent(details);
    openModal();
  };

  return (
    <PageWrapper>
      <SectionsWrapper>
        <Container>
          <SectionsTitle text='مشاريعنا' />
          <Subtext text=' تقدم شركة ديفكس خدمات احترافية وتلبية احتياجات سوق العمل في مختلف التخصصات' />

          <SectionsWrapper>
            <Row className='gy-4'>
              {projectsCards.map(item => (
                <Col xl='4' md='6'>
                  <ProjectCard
                    onDetailsClick={handleDetailsClick}
                    title={item.title}
                    desc={item.desc}
                    imgLink={item.imgLink}
                    id={item.id}
                  />
                </Col>
              ))}
            </Row>
          </SectionsWrapper>
        </Container>
      </SectionsWrapper>
      <DetailsModal
        onClosed={() => setModalContent(undefined)}
        data={{
          title: modalContent?.title,
          desc: modalContent?.desc,
          imgLink: modalContent?.imgLink,
        }}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
    </PageWrapper>
  );
};

export default Projects;
