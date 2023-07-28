import { Col, Container, Row } from 'reactstrap';
import { QuotsIcon, SectionsTitle, SectionsWrapper } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import styles from '../index.module.scss';
import { importImageByProcessEnv } from '../../../utils';

export const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + '</div>';
    },
  };
  return (
    <SectionsWrapper id='testimonials' className={styles.testimonialsSection}>
      <Container>
        <Row className='gy-4'>
          <Col lg='4'>
            <SectionsTitle
              className={styles.testimonialsTitle}
              text='ماذا يقول عملاؤنا لنا'
            />
            <p data-aos='fade-up' data-aos-delay='200'>
              أجمل اللحظات هي اللحظات عندما نقوم بتسليم المشروع والذي غالبًا ما
              يكون وراءه توقعات العميل
            </p>
          </Col>
          <Col lg='8'>
            <div
              className={styles.testimonialsSliderWrapper}
              data-aos='fade-in'
              data-aos-delay='200'
            >
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={1500}
                loop
                effect='fade'
                draggable={false}
                navigation={false}
                pagination={pagination}
                spaceBetween={15}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide>
                  <div className={styles.testimonialsCard}>
                    <div className={styles.cardHead}>
                      <div className={styles.authordesc}>
                        <div className={styles.icon}>
                          <QuotsIcon />
                        </div>
                        <div>
                          <h5>م. سائد النجار</h5>
                          <p>المدير التشغيلي لشركة سكايلينا</p>
                        </div>
                      </div>
                      <div className={styles.authorImg}>
                        <img
                          loading='lazy'
                          className='img-full img-bg'
                          src={importImageByProcessEnv('testim.png')}
                          alt='م. سائد النجار'
                          title='م. سائد النجار'
                        />
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <p>
                        سعدت كثيرا بالتعامل مع شركة ديفكس لأعمال الصيانة ، لما
                        قدموه من عمل ممتاز في المهام الموكلة إليهم والسرعة
                        العالية في تنفيذها ولن يكون أخر تعامل
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.testimonialsCard}>
                    <div className={styles.cardHead}>
                      <div className={styles.authordesc}>
                        <div className={styles.icon}>
                          <QuotsIcon />
                        </div>
                        <div>
                          <h5>م. سائد النجار</h5>
                          <p>المدير التشغيلي لشركة سكايلينا</p>
                        </div>
                      </div>
                      <div className={styles.authorImg}>
                        <img
                          loading='lazy'
                          className='img-full img-bg'
                          src={importImageByProcessEnv('testim.png')}
                          alt='م. سائد النجار'
                          title='م. سائد النجار'
                        />
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <p>
                        سعدت كثيرا بالتعامل مع شركة ديفكس لأعمال الصيانة ، لما
                        قدموه من عمل ممتاز في المهام الموكلة إليهم والسرعة
                        العالية في تنفيذها ولن يكون أخر تعامل
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.testimonialsCard}>
                    <div className={styles.cardHead}>
                      <div className={styles.authordesc}>
                        <div className={styles.icon}>
                          <QuotsIcon />
                        </div>
                        <div>
                          <h5>م. سائد النجار</h5>
                          <p>المدير التشغيلي لشركة سكايلينا</p>
                        </div>
                      </div>
                      <div className={styles.authorImg}>
                        <img
                          loading='lazy'
                          className='img-full img-bg'
                          src={importImageByProcessEnv('testim.png')}
                          alt='م. سائد النجار'
                          title='م. سائد النجار'
                        />
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <p>
                        سعدت كثيرا بالتعامل مع شركة ديفكس لأعمال الصيانة ، لما
                        قدموه من عمل ممتاز في المهام الموكلة إليهم والسرعة
                        العالية في تنفيذها ولن يكون أخر تعامل
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionsWrapper>
  );
};
