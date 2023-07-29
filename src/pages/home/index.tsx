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

const Home = () => {
  const { data, isLoading } = useCallApi<BodySliderData>('/body');
  console.log(data, 'data');

  return (
    <div>
      <PagesWrapper loading={isLoading}>
        <Header bodyData={data} />
        <AboutSection aboutSection={data} />
        <Services serviceData={data} />
        <Statistics />
        <ProjectsSection />
        <Clients />
        <Testimonials />
      </PagesWrapper>
    </div>
  );
};

export default Home;
