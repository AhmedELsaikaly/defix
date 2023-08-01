import { Col, Container, Row } from 'reactstrap';
import { getValueByLang, importImageByProcessEnv } from '../../../utils';
import { useSectionVisibility } from '../../../hooks';
import CountUp from 'react-countup';
import styles from '../index.module.scss';
import { BodySliderData } from '../../../models';

interface statisticsProps {
  data: BodySliderData
}

export const Statistics = ({ data }: statisticsProps) => {


  const { isSectionVisible, targetSectionRef } = useSectionVisibility();
  return (
    <section
      id='achievement'
      ref={targetSectionRef}
      className={styles.statistics}
      data-aos='fade-up'
      data-aos-delay='150'
    >
      <Container>
        <div className={styles.statisticsWrapper}>
          <Row className={`${styles.row} gy-4`}>
            <Col lg='3' sm='6'>
              {
                data?.achievement?.map((item) => (

                  <div className={styles.statisticsItem}>
                    <div className={styles.statisticsItemImage}>
                      <img
                        loading='lazy'
                        className='img-bg'
                        alt='منشأة'
                        src={item?.icon}
                      />
                    </div>
                    <div className={styles.statisticsItemContent}>
                      <h4>
                        <span>+</span>
                        {isSectionVisible && (
                          <span>
                            <CountUp duration={4} end={item?.value} />
                          </span>
                        )}
                      </h4>
                      <p className='h5'>{
                        getValueByLang(item?.title_ar, item?.title_en)
                      }</p>
                    </div>
                  </div>
                ))
              }

            </Col>



          </Row>
        </div>
      </Container>
    </section>
  );
};
