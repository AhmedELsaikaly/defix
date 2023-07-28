import { Col, Container, Row } from 'reactstrap';
import WebsiteCard from '../website-card';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Tabs from '../tabs';
import Button from '../button';
import styles from './index.module.scss';

const ServiceCards = () => {
  return (
    <Row className='gy-4 justify-content-center'>
      <Col xl='4' lg='6'>
        <WebsiteCard
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
        <WebsiteCard
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
        <WebsiteCard
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
        <WebsiteCard
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
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

const Services = () => {
  return (
    <SectionsWrapper id='services' className={styles.servicesSection}>
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
          <Button whiteText type='primary' fullRadius>
            المزيد
          </Button>
        </div>
      </Container>
    </SectionsWrapper>
  );
};

export default Services;
