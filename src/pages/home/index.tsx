import { useCallApi } from '../../hooks';
import {
  Services,
  AboutSection,
  Statistics,
  ProjectsSection,
  Clients,
  Header,
  Testimonials,
} from './components';

const Home = () => {
  const { data, isLoading } = useCallApi('/header');
  const { data: footerData, isLoading: footerLoading } = useCallApi('/footer');
  return (
    <div>
      <Header />
      <AboutSection />
      <Services />
      <Statistics />
      <ProjectsSection />
      <Clients />
      <Testimonials />
    </div>
  );
};

export default Home;
