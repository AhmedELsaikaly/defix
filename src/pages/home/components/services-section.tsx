import {
  Button,
  SectionsTitle,
  SectionsWrapper,
  Tabs,
  WebsiteCard,
} from '../../../components';
import { Col, Container, Row } from 'reactstrap';
import styles from '../index.module.scss';

const ServiceCards = () => {
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

export const Services = () => {
  return (
    <SectionsWrapper className={styles.servicesSection}>
      <Container>
        <SectionsTitle text='خدماتنا' />
        <p data-aos='fade-up' data-aos-delay='200' className={styles.subtext}>
          تقدم شركة ديفكس خدمات احترافية وتلبية احتياجات سوق العمل في مختلف
          التخصصات
        </p>
        <div
          className={styles.servicesTabs}
          data-aos='fade-up'
          data-aos-delay='250'
        >
          <Tabs
            tabs={[
              { name: 'الإنشاءات', content: <ServiceCards /> },
              { name: 'الصيانة', content: <ServiceCards /> },
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
