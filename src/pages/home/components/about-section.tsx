import { Col, Container, Row } from 'reactstrap';
import {
  SectionsTitle,
  SectionsWrapper,
  WebsiteCard,
} from '../../../components';
import { AboutHome, BodySliderData } from '../../../models';
import styles from '../index.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';
// <div className='col-xl-4 col-lg-6'>
//           <Link to={`${ROUTES.aboutUs}?focused=vision`}>
//             <WebsiteCard
//               hovered
//               iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
//               title='رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا'
//               text='أن نكون الشركة الرائدة في مجال البناء التي تحوّل الأفكار إلى منشآت استثنائية، مع تعزيز المجتمعات المستدامة وترك أثر إيجابي دائم على العالم من حولنا. نحن نسعى لوضع معايير جديدة للتميز في صناعة البناء وتجاوز توقعات عملائنا وأصحاب المصلحة على نحو مستمر'
//             />
//           </Link>
//         </div>
//         <div className='col-xl-4 col-lg-6'>
//           <Link to={`${ROUTES.aboutUs}?focused=goals`}>
//             <WebsiteCard
//               hovered
//               iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
//               title='رؤيتنا'
//               text='أن نكون الشركة الرائدة في مجال البناء التي تحوّل الأفكار إلى منشآت استثنائية، مع تعزيز المجتمعات المستدامة وترك أثر إيجابي دائم على العالم من حولنا. نحن نسعى لوضع معايير جديدة للتميز في صناعة البنر'
//             />
//           </Link>
//         </div>
//         <div className='col-xl-4 col-lg-6'>
//           <Link to={`${ROUTES.aboutUs}?focused=commitments`}>
//             <WebsiteCard
//               hovered
//               iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
//               title='رؤيتنا'
//               text='أن نكون الشركة الرائدة في مجال البناء التي تحوّل الأفكار إلى منشآت استثنائية، مع تعزيز المجتمعات المستدامة وترك أثر إيجابي دائم على العالم من حولنا. نحن نسعى لوضع معايير جديدة للتميز في صناعة البناء وتجاوز توقعات عملائنا وأصحاب المصلحة على نحو مستمر'
//             />
//           </Link>
//         </div>
interface AboutSectionProps {
  aboutSection: BodySliderData;
}

export const AboutSection = ({ aboutSection }: AboutSectionProps) => {
  return (
    <SectionsWrapper id='about'>
      <Container>
        <SectionsTitle text='من نحن؟' />
        <div className={styles.aboutCardsWrapper}>
          <Row className='gy-4'>
            {aboutSection?.aboutHome?.map(item => (
              <Col xl='4' lg='6' key={item.id}>
                <WebsiteCard
                  hovered
                  iconLink={item.image}
                  title={item.title_ar}
                  text={item.description_ar}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
