import { Container } from 'reactstrap';
import {
  SectionsTitle,
  SectionsWrapper,
  WebsiteCard,
} from '../../../components';
import { AboutHome, BodySliderData } from '../../../models';
import styles from '../index.module.scss';

interface AboutSectionProps {
  aboutSection: BodySliderData;
}

export const AboutSection = ({ aboutSection }: AboutSectionProps) => {
  return (
    <SectionsWrapper id='about'>
      <Container>
        <SectionsTitle text='من نحن؟' />
        <div className={styles.aboutCardsWrapper}>
          <div className='row gy-4'>
            {aboutSection?.aboutHome?.map((item) => (
              <div key={item.id} className='col-xl-4 col-lg-6'>
                <WebsiteCard
                  hovered
                  iconLink={item.image}
                  title={item.title_ar}
                  text={item.description_ar}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
