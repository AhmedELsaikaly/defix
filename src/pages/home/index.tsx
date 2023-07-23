import { Header } from '../../components';
import {
  Services,
  AboutSection,
  Statistics,
  ProjectsSection,
} from './components';
import styles from './index.module.scss';

const Home = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <Services />
      <Statistics />
      <ProjectsSection />
    </div>
  );
};

export default Home;
