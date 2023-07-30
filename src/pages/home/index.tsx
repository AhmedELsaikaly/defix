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
import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>('construction');
  const { data, isLoading } = useCallApi<BodySliderData>('/body');
  console.log(data, 'datadata');

  return (
    <div>
      <PagesWrapper loading={isLoading}>
        <Header bodyData={data} />
        <AboutSection aboutSection={data} />
        <Services
          withMoreBtn={true}
          selectedTab={activeTab}
          setSelectedTab={(id) => setActiveTab(id)}
          serviceData={{
            services: data?.servicesHome,
            business: data?.businessHome,
            descriptionOurServicesAr: data?.descriptionOurServicesAr,
            descriptionOurServicesEn: data?.descriptionOurServicesEn,
            TitleOurServicesAr: data?.TitleOurServicesAr,
            TitleOurServicesEn: data?.TitleOurServicesEn,
          }}
        />
        <Statistics />
        <ProjectsSection
          title='مشاريعنا'
          subTitle='تقدم شركة ديفكس خدمات احترافية وتلبية احتياجات سوق العمل في مختلف التخصصات'
        />
        <Clients />
        <Testimonials />
      </PagesWrapper>
    </div>
  );
};

export default Home;
