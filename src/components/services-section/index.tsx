import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import WebsiteCard from '../website-card';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Tabs from '../tabs';
import Button from '../button';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import Subtext from '../subtext';

interface ServicesProp {
  withMoreBtn?: boolean;
  selectedTab?: '0' | '1';
}

const ServiceCards = () => {
  return (
    <Row className='gy-4 justify-content-center'>
      <Col xl='4' lg='6'>
        <WebsiteCard
          moreBtnLink={`${ROUTES.services}/1`}
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
        <WebsiteCard
          moreBtnLink={`${ROUTES.services}/1`}
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
        <WebsiteCard
          moreBtnLink={`${ROUTES.services}/1`}
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
        <WebsiteCard
          moreBtnLink={`${ROUTES.services}/1`}
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
      <Col xl='4' lg='6'>
        <WebsiteCard
          moreBtnLink={`${ROUTES.services}/1`}
          iconHaveBg
          iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
          title='التخطيط والتصميم'
          text='تبدأ عملية البناء بتخطيط شامل للمشروع وتصميم مفصل يأخذ في الاعتبار المتطلبات الوظيفية والتصميمية للمبنى. يتضمن ذلك دراسة الموقع وتحديد المساحة والمواصفات المطلوبة وتحليل الاحتياجات المستقبلية'
        />
      </Col>
    </Row>
  );
};

const Services = ({ withMoreBtn = true, selectedTab }: ServicesProp) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'0' | '1'>(selectedTab || '0');

  useEffect(() => {
    if (selectedTab) {
      setActiveTab(selectedTab);
    }
  }, [selectedTab]);

  return (
    <SectionsWrapper id='services' className={styles.servicesSection}>
      <Container>
        <SectionsTitle text='خدماتنا' />
        <Subtext
          text='  تقدم شركة ديفكس خدمات احترافية وتلبية احتياجات سوق العمل في مختلف
          التخصصات'
        />

        <div
          className={styles.servicesTabs}
          data-aos='fade-up'
          data-aos-delay='250'
        >
          <Tabs
            activeTab={activeTab}
            setSelectedTab={setActiveTab}
            tabs={[
              { name: 'الإنشاءات', content: <ServiceCards /> },
              { name: 'الصيانة', content: <ServiceCards /> },
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
              onClick={() =>
                navigate(`${ROUTES.services}?selected=maintenance`)
              }
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

export default Services;
