import { Col, Container, Row } from 'reactstrap';
import { importImageByProcessEnv } from '../../../utils';
import { useSectionVisibility } from '../../../hooks';
import CountUp from 'react-countup';
import styles from '../index.module.scss';

export const Statistics = () => {
  const { isSectionVisible, targetSectionRef } = useSectionVisibility();
  console.log(isSectionVisible, 'isSectionVisible');
  return (
    <section
      ref={targetSectionRef}
      className={styles.statistics}
      data-aos='fade-up'
      data-aos-delay='150'
    >
      <Container>
        <div className={styles.statisticsWrapper}>
          <Row className={styles.row}>
            <Col lg='3'>
              <div className={styles.statisticsItem}>
                <div className={styles.statisticsItemImage}>
                  <img
                    title='منشأة'
                    alt='منشأة'
                    src={importImageByProcessEnv('icon1.svg')}
                  />
                </div>
                <div className={styles.statisticsItemContent}>
                  <h4>
                    <span>+</span>
                    {isSectionVisible && (
                      <span>
                        <CountUp duration={4} end={100} />
                      </span>
                    )}
                  </h4>
                  <p className='h5'>منشأة</p>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <div className={styles.statisticsItem}>
                <div className={styles.statisticsItemImage}>
                  <img
                    title='منشأة'
                    alt='منشأة'
                    src={importImageByProcessEnv('icon1.svg')}
                  />
                </div>
                <div className={styles.statisticsItemContent}>
                  <h4>
                    <span>+</span>
                    {isSectionVisible && (
                      <span>
                        <CountUp duration={4} end={10} />
                      </span>
                    )}
                  </h4>
                  <p className='h5'>خدمة صيانة</p>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <div className={styles.statisticsItem}>
                <div className={styles.statisticsItemImage}>
                  <img
                    title='منشأة'
                    alt='منشأة'
                    src={importImageByProcessEnv('icon1.svg')}
                  />
                </div>
                <div className={styles.statisticsItemContent}>
                  <h4>
                    <span>+</span>
                    {isSectionVisible && (
                      <span>
                        <CountUp duration={4} end={100} />
                      </span>
                    )}
                  </h4>
                  <p className='h5'>موظف متعاون</p>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <div className={styles.statisticsItem}>
                <div className={styles.statisticsItemImage}>
                  <img
                    title='منشأة'
                    alt='منشأة'
                    src={importImageByProcessEnv('icon1.svg')}
                  />
                </div>
                <div className={styles.statisticsItemContent}>
                  <h4>
                    <span>%</span>
                    {isSectionVisible && (
                      <span>
                        <CountUp duration={4} end={100} />
                      </span>
                    )}
                  </h4>
                  <p className='h5'>نسبة النجاح</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
