import {
  Button,
  SectionsTitle,
  SectionsWrapper,
  Tabs,
  WebsiteCard,
} from '../../../components';
import { Col, Container, Row } from 'reactstrap';
import styles from '../index.module.scss';

const ProjectsImages = () => {
  return (
    <Row>
      <Col lg='4'>
        <WebsiteCard
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col lg='4'>
        <WebsiteCard
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col lg='4'>
        <WebsiteCard
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
    </Row>
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
              { name: 'الإنشاءات', content: <ProjectsImages /> },
              { name: 'الصيانة', content: <ProjectsImages /> },
            ]}
          />
        </div>

        <div
          className={styles.moreBtnWrap}
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <Button type='primary' fullRadius>
            المزيد
          </Button>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
