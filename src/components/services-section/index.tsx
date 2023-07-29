import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import WebsiteCard from '../website-card';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Tabs from '../tabs';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import Subtext from '../subtext';
import { ServicesItem } from '../../models';
import styles from './index.module.scss';
import { getValueByLang } from '../../utils';

interface ServicesProp {
  withMoreBtn?: boolean;
  selectedTab?: string;
  serviceData?: {
    descriptionOurServicesAr: string;
    descriptionOurServicesEn: string;
    businessHome: ServicesItem[];
    servicesHome: ServicesItem[];
  };
}

interface ServiceCardsProps {
  servicesDataList: Array<ServicesItem>;
}

const ServiceCards = ({ servicesDataList }: ServiceCardsProps) => {
  return (
    <Row className='gy-4 justify-content-center'>
      {servicesDataList?.map((item: ServicesItem) => (
        <Col xl='4' lg='6' key={item.id}>
          <WebsiteCard
            iconHaveBg
            iconLink={item?.icon}
            title={getValueByLang(item?.title_ar, item?.title_en)}
            text={getValueByLang(item?.description_ar, item?.description_en)}
          />
        </Col>
      ))}
    </Row>
  );
};

const Services = ({
  withMoreBtn = true,
  selectedTab,
  serviceData,
}: ServicesProp) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(
    selectedTab || 'construction'
  );

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
              {
                id: 'construction',
                name: 'الإنشاءات',
                content: (
                  <ServiceCards servicesDataList={serviceData?.servicesHome} />
                ),
              },
              {
                id: 'maintenance',
                name: 'الصيانة',
                content: (
                  <ServiceCards servicesDataList={serviceData?.businessHome} />
                ),
              },
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
                navigate(`${ROUTES.services}?selected=${activeTab}`)
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
