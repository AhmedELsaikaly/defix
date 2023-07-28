import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { SectionsTitle, SectionsWrapper } from '../../../components';
import { importImageByProcessEnv } from '../../../utils';
import styles from '../index.module.scss';

export const Clients = () => {
  return (
    <SectionsWrapper id='clients' className={styles.clientsSectionWrapper}>
      <Container>
        <SectionsTitle text='عملاؤنا' />
        <div
          data-aos='fade-in'
          data-aos-delay='200'
          className={styles.clientsSliderWrapper}
        >
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            speed={2000}
            freeMode
            slidesPerView={5}
            loop
            pagination={{ enabled: true, clickable: true }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              450: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-2.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-3.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-4.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-5.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-2.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-3.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-4.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  loading='lazy'
                  className='img-full '
                  src={importImageByProcessEnv('client-5.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
