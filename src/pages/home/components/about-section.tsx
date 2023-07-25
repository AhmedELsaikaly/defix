import { Container } from 'reactstrap';
import {
  SectionsTitle,
  SectionsWrapper,
  WebsiteCard,
} from '../../../components';
import styles from '../index.module.scss';

export const AboutSection = () => {
  return (
    <SectionsWrapper>
      <Container>
        <SectionsTitle text='من نحن؟' />
        <div className={styles.aboutCardsWrapper}>
          <div className='row'>
            <div className='col-lg-4'>
              <WebsiteCard
                hovered
                iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
                title='رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا رؤيتنا'
                text='أن نكون الشركة الرائدة في مجال البناء التي تحوّل الأفكار إلى منشآت استثنائية، مع تعزيز المجتمعات المستدامة وترك أثر إيجابي دائم على العالم من حولنا. نحن نسعى لوضع معايير جديدة للتميز في صناعة البناء وتجاوز توقعات عملائنا وأصحاب المصلحة على نحو مستمر'
              />
            </div>
            <div className='col-lg-4'>
              <WebsiteCard
                hovered
                iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
                title='رؤيتنا'
                text='أن نكون الشركة الرائدة في مجال البناء التي تحوّل الأفكار إلى منشآت استثنائية، مع تعزيز المجتمعات المستدامة وترك أثر إيجابي دائم على العالم من حولنا. نحن نسعى لوضع معايير جديدة للتميز في صناعة البنر'
              />
            </div>
            <div className='col-lg-4'>
              <WebsiteCard
                hovered
                iconLink='https://deffix.alialqrinawi.me/uploads/Sliders/wdztgAiKVZM21690036183_.jpg'
                title='رؤيتنا'
                text='أن نكون الشركة الرائدة في مجال البناء التي تحوّل الأفكار إلى منشآت استثنائية، مع تعزيز المجتمعات المستدامة وترك أثر إيجابي دائم على العالم من حولنا. نحن نسعى لوضع معايير جديدة للتميز في صناعة البناء وتجاوز توقعات عملائنا وأصحاب المصلحة على نحو مستمر'
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
