import { useEffect } from 'react';
import AOS from 'aos';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { TopNav, Navbar, Footer, PagesWrapper } from './components';
import { useCallApi, useLang } from './hooks';
import './styles/app.scss';
import 'swiper/css/pagination';
import { FooterData, HeaderData } from './models';

function App() {
  const content = useRoutes(routes);
  const currentLanguage = useLang();
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

  const { data: headerData, isLoading } = useCallApi<HeaderData>('/header');
  const { data: footerData, isLoading: footerLoading } =
    useCallApi<FooterData>('/footer');
  console.log(footerData, 'footerData');

  return (
    <div className='App'>
      <PagesWrapper loading={isLoading || footerLoading}>
        <TopNav headerData={headerData} />
        <Navbar />
        {content}
        <Footer footerData={footerData} />
      </PagesWrapper>
    </div>
  );
}

export default App;
