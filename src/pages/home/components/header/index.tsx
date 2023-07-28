import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';
import { getValueByLang, importImageByProcessEnv } from '../../../../utils';
import { Button } from '../../../../components';
import { BodySliderData } from '../../../../models';
import { useEffect, useState } from 'react';

interface TopBodySliderProps {
  bodyData: BodySliderData;
}
export const Header = ({ bodyData }: TopBodySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % bodyData?.sliders.length
      );
    }, 30000);

    return () => clearInterval(interval);
  }, [bodyData?.sliders?.length]);
  return (
    <header className={styles.header} id='home'>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={2500}
        loop
        effect='fade'
        draggable={false}
        navigation={false}
        pagination={false}
        spaceBetween={0}
        modules={[EffectFade, Autoplay]}
        noSwiping={true}
        noSwipingClass='swiper-no-swiping'
      >
        <SwiperSlide>
          <div
            className={`${styles.headerItem} bg-cover`}
            style={{
              backgroundImage: `url(${bodyData?.sliders[currentIndex].image})`,
            }}
          >
            <Container>
              <div className={styles.headerItemContent}>
                <div className='row'>
                  <div className='col-lg-6'>
                    <h1 data-aos='fade-up' data-aos-delay='150'>
                      {getValueByLang(
                        bodyData?.titleSliderAr,
                        bodyData?.titleSliderEn
                      )}
                    </h1>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-lg-7'>
                    <p data-aos='fade-up' data-aos-delay='200'>
                      {getValueByLang(
                        bodyData?.sliderTextAr,
                        bodyData?.sliderTextEn
                      )}
                    </p>
                  </div>
                </div>

                <div
                  className={styles.headerItemCtaWrap}
                  data-aos='fade-up'
                  data-aos-delay='250'
                >
                  <a
                    title='تحميل الملف الشخصي'
                    href={getValueByLang(bodyData?.cvAr, bodyData?.cvEn)}
                    target='_blank'
                  >
                    <Button type='primary'>تحميل الملف الشخصي</Button>
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        {/*  <SwiperSlide>
            <div
              className={`${styles.headerItem} bg-cover`}
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80')`,
              }}
            >
              <Container>
                <div className={styles.headerItemContent}>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1>وجهتك الأولى في عالم الإنشاءات والصيانة</h1>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-lg-7'>
                      <p>
                        ندرك في Deffix أن كل مشروع إنشائي عبارة عن قطعة فريدة طلب
                        تخطيطًا دقيقًا وحرفية ماهرة واهتمامًا لغاَ بأدق التفاصيل.
                        سواء كنت تبدأ مشروعًا سكنيًا أو تجاريًا أو صناعيًا، فإن
                        فريقنا من المحترفين هنا لتحويل رؤيتك إلى حقيقة
                      </p>
                    </div>
                  </div>

                  <div className={styles.headerItemCtaWrap}>
                    <a title='تحميل الملف الشخصي' href='#'>
                      <Button type='primary'>تحميل الملف الشخصي</Button>
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide> */}
      </Swiper>
    </header>
  );
};
