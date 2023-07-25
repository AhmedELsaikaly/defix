import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { SectionsTitle, SectionsWrapper } from '../../../components';
import { importImageByProcessEnv } from '../../../utils';
import styles from '../index.module.scss';

export const Clients = () => {
  return (
    <SectionsWrapper className={styles.clientsSectionWrapper}>
      <Container>
        <SectionsTitle text='عملاؤنا' />
        <div className={styles.clientsSliderWrapper}>
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
            // slidesToS
            //
            // loop
            // draggable={false}
            // navigation={false}
            // speed={1000}
            // pagination={{
            //   clickable: true,
            // }}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   768: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
            //   1024: {
            //     slidesPerView: 5,
            //     spaceBetween: 50,
            //   },
            // }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-2.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-3.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-4.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-5.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-1.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-2.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-3.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
                  src={importImageByProcessEnv('client-4.png')}
                  alt='client1'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.clientItem}>
                <img
                  className='img-full'
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
