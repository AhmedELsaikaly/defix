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
  const { data, isLoading } = useCallApi<BodySliderData>('/body');
  const [activeTab, setActiveTab] = useState<string>('construction');

  return (
    <div>
      <PagesWrapper loading={isLoading}>
        <Header bodyData={data} />
        <AboutSection aboutSection={data} />
        <Services
          selectedTab={activeTab}
          setSelectedTab={id => setActiveTab(id)}
          serviceData={{
            services: data?.servicesHome,
            business: data?.businessHome,
            descriptionOurServicesAr: data?.descriptionOurServicesAr,
            descriptionOurServicesEn: data?.descriptionOurServicesEn,
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
