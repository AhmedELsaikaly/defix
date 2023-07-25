import { useEffect } from 'react';
import AOS from 'aos';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { TopNav, Navbar, Footer } from './components';
import './styles/app.scss';
import 'swiper/css/pagination';

function App() {
  const content = useRoutes(routes);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);
  return (
    <div className='App'>
      <TopNav />
      <Navbar />
      {content}
      <Footer />
    </div>
  );
}

export default App;
