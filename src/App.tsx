import { useEffect } from 'react';
import AOS from 'aos';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { TopNav, Navbar, Footer, PagesWrapper } from './components';
import { useCallApi, useLang } from './hooks';
import './styles/app.scss';
import 'swiper/css/pagination';

function App() {
  const content = useRoutes(routes);
  const currentLanguage = useLang();
  console.log(currentLanguage, 'currentLanguagecurrentLanguage');
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

  const { data, isLoading } = useCallApi('/header');
  const { data: footerData, isLoading: footerLoading } = useCallApi('/footer');

  return (
    <div className='App'>
      <PagesWrapper loading={isLoading || footerLoading}>
        <TopNav />
        <Navbar />
        {content}
        <Footer />
      </PagesWrapper>
    </div>
  );
}

export default App;
