import { Col, Container, Row } from 'reactstrap';
import WebsiteCard from '../website-card';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Tabs from '../tabs';
import Button from '../button';
import styles from './index.module.scss';
import { getValueByLang } from '../../utils';
import { BodySliderData } from '../../models';

interface ServiceDataProps {
  serviceData?: BodySliderData;
  maintenance?: string;
}

const ServiceCards = ({ serviceData, maintenance }: ServiceDataProps) => {
  console.log(serviceData, 'serviceDataserviceData');

  return (
    <Row className='gy-4 justify-content-center'>
      <Col xl='4' lg='6'>
        {serviceData?.servicesHome?.map((item) => (
          <WebsiteCard
            iconHaveBg
            iconLink={item?.icon}
            title={getValueByLang(item?.title_ar, item?.title_en)}
            text={getValueByLang(item?.description_ar, item?.description_en)}
          />
        ))}
      </Col>
      {/*       <Col xl='4' lg='6'>
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
      </Col> */}
    </Row>
  );
};

const Services = ({ serviceData }: ServiceDataProps) => {
  return (
    <SectionsWrapper id='services' className={styles.servicesSection}>
      <Container>
        <SectionsTitle text='خدماتنا' />
        <p data-aos='fade-up' data-aos-delay='200' className={styles.subtext}>
          {getValueByLang(
            serviceData?.descriptionOurServicesAr,
            serviceData?.descriptionOurServicesAr
          )}
        </p>
        <div
          className={styles.servicesTabs}
          data-aos='fade-up'
          data-aos-delay='250'
        >
          <Tabs
            tabs={[
              {
                name: 'الإنشاءات',
                content: <ServiceCards serviceData={serviceData} />,
              },
              {
                name: 'الصيانة',
                content: (
                  <ServiceCards
                    serviceData={serviceData}
                    maintenance='maintenance'
                  />
                ),
              },
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
