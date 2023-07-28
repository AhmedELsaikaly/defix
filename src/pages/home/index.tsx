import { ProjectsSection, Services } from '../../components';
import {
  AboutSection,
  Statistics,
  Clients,
  Header,
  Testimonials,
} from './components';

const Home = () => {
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
