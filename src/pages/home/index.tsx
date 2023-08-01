import { useCallApi } from '../../hooks';
import { PagesWrapper, ProjectsSection, Services } from '../../components';
import {
  AboutSection,
  Statistics,
  Clients,
  Header,
  Testimonials,
} from './components';
import { BodySliderData } from '../../models';
import { useState, useEffect } from 'react';
import { getValueByLang } from '../../utils';

const Home = () => {
  const [activeTab, setActiveTab] = useState<number>();
  const { data, isLoading } = useCallApi<BodySliderData>('/body');

  useEffect(() => {
    if (data) {
      setActiveTab(data?.businesServicesHome?.[0]?.id ?? 1);
    }
  }, [data]);

  return (
    <div>
      <PagesWrapper loading={isLoading}>
        <Header bodyData={data} />
        <AboutSection aboutSection={data} />
        <Services
          withMoreBtn={true}
          selectedTab={activeTab}
          setSelectedTab={id => setActiveTab(id)}
          serviceData={{
            services: data?.businesServicesHome,
            TitleOurServicesAr: data?.TitleOurServicesAr,
            TitleOurServicesEn: data?.TitleOurServicesEn,
            descriptionOurServicesAr: data?.descriptionOurServicesAr,
            descriptionOurServicesEn: data?.descriptionOurServicesEn,
          }}
        />
        <Statistics data={data} />
        <ProjectsSection
          title={getValueByLang(data?.TitleOurProjectsAr, data?.TitleOurProjectsEn)}
          subTitle={getValueByLang(data?.descriptionOurProjectsAr, data?.descriptionOurProjectsEn)}
          data={data}
        />
        <Clients data={data} />
        <Testimonials data={data} />
      </PagesWrapper>
    </div>
  );
};

export default Home;
