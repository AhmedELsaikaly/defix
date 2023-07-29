import { useEffect } from 'react';
import AOS from 'aos';
import { useLocation, useMatch, useRoutes } from 'react-router-dom';
import routes from './router';
import { TopNav, Navbar, Footer, PagesWrapper } from './components';
import { useCallApi, useLang } from './hooks';
import { ROUTES } from './constants';
import './styles/app.scss';
import 'swiper/css/pagination';

function App() {
  const content = useRoutes(routes);
  const match = useMatch(ROUTES.home);
  const location = useLocation();
  const currentLanguage = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const direction = currentLanguage === 'en' ? 'ltr' : 'rtl';
    document.body.dir = direction;
    document.documentElement.setAttribute('lang', currentLanguage);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  // const { data, isLoading } = useCallApi('/header');
  // const { data: footerData, isLoading: footerLoading } = useCallApi('/footer');
  return (
    <div className='App'>
      <PagesWrapper loading={false}>
        <div>
          <TopNav />
          <Navbar isWhiteBg={!match} />
        </div>

        {content}
        <Footer />
      </PagesWrapper>
    </div>
  );
}

export default App;
