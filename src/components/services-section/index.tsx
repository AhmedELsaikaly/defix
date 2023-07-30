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
import { IBusinessItem, IServiceItem, IServices } from '../../models/services';

interface ServicesProp {
  withMoreBtn?: boolean;
  selectedTab?: string;
  serviceData?: IServices;
  setSelectedTab: (tabId: string) => void;
  onDetailsBtnClick?: (itemData: IBusinessItem) => void;
  withDetailsBtn?: boolean;
}

interface ServiceCardsProps {
  servicesDataList: Array<IBusinessItem | IServiceItem>;
  moreBtnLink?: string;
  onDetailsBtnClick?: (itemData: IServiceItem) => void;
  withDetailsBtn?: boolean;
}

const ServiceCards = ({
  servicesDataList,
  onDetailsBtnClick,
  withDetailsBtn = false,
}: ServiceCardsProps) => {
  return (
    <Row className='gy-4 justify-content-center'>
      {servicesDataList?.map((item: IBusinessItem | IServiceItem) => (
        <Col xl='4' lg='6' key={item.id}>
          <WebsiteCard
            withDetailsBtn={withDetailsBtn}
            onMoreBtnClick={
              onDetailsBtnClick
                ? () => onDetailsBtnClick(item as IServiceItem)
                : undefined
            }
            moreBtnLink={
              !onDetailsBtnClick ? `${ROUTES.services}/${item.id}` : undefined
            }
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
  setSelectedTab,
  onDetailsBtnClick,
  withDetailsBtn,
}: ServicesProp) => {
  console.log(serviceData?.services, 'serviceDataserviceDataserviceData');
  console.log(serviceData?.business, 'serviceData?.business');

  const navigate = useNavigate();
  return (
    <SectionsWrapper id='services' className={styles.servicesSection}>
      <Container>
        <SectionsTitle
          text={getValueByLang(
            serviceData?.TitleOurServicesAr,
            serviceData?.TitleOurServicesEn
          )}
        />
        <Subtext
          text={getValueByLang(
            serviceData?.descriptionOurServicesAr,
            serviceData?.descriptionOurServicesEn
          )}
        />

        <div
          className={styles.servicesTabs}
          data-aos='fade-up'
          data-aos-delay='250'
        >
          <Tabs
            activeTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabs={[
              {
                id: 'construction',
                name: getValueByLang(
                  serviceData?.services,
                  serviceData?.descriptionOurServicesEn
                ),
                content: (
                  <ServiceCards
                    withDetailsBtn={withDetailsBtn}
                    onDetailsBtnClick={onDetailsBtnClick}
                    servicesDataList={serviceData?.services}
                  />
                ),
              },
              {
                id: 'maintenance',
                name: 'الصيانة',
                content: (
                  <ServiceCards
                    withDetailsBtn={withDetailsBtn}
                    servicesDataList={serviceData?.business}
                  />
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
                navigate(`${ROUTES.services}?selectedTab=${selectedTab}`)
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
