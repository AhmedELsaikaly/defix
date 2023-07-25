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
