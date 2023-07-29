import { useState } from 'react';
import PageWrapper from '../../components/page-wrapper';
import {
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import { SectionsTitle, SectionsWrapper, Subtext } from '../../components';
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
  const { isOpen, openModal, toggleModal, closeModal } = useModalState();
  const toggle = () => toggleModal();
  const handleDetailsClick = (details: any) => {
    setModalContent(details);
    openModal();
  };

  const handleModalClose = (details: any) => {
    closeModal();
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
      <Modal
        centered
        isOpen={true}
        toggle={toggleModal}
        // className={className}
        backdrop
        keyboard
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </PageWrapper>
  );
};

export default Projects;
