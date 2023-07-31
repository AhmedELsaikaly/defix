import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DetailsModal, ProjectsSection, Services } from '../../components';
import PageWrapper from '../../components/page-wrapper';
import { ServicesHero } from './components';
import { getValueByLang, importImageByProcessEnv } from '../../utils';
import styles from './index.module.scss';
import { useCallApi, useModalState } from '../../hooks';
import { IServiceItem, IServiceDetails } from '../../models/services';

const Service = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalData, setModalData] = useState<IServiceItem>();
  const { data, isLoading } = useCallApi<IServiceDetails>('/service');
  const { isOpen, toggleModal, openModal } = useModalState();
  const [activeTab, setActiveTab] = useState<number>();

  const handleSelectTab = (tabId: number) => {
    setActiveTab(tabId);
    setSearchParams({ selectedTab: String(tabId) });
  };

  const handleMoreBtnClick = (itemData: IServiceItem) => {
    setModalData(itemData);
    openModal();
  };

  return (
    <PageWrapper loading={isLoading}>
      <ServicesHero
        imgLink={importImageByProcessEnv('services-bg.png')}
        title='خدمات الإنشاءات'
        desc='خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور "ريتشارد ماك لينتوك" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي "consectetur"، وخلال تتبعه لهذه الكلمة في الأدب اللاتيني اكتشف المصدر الغير قابل للشك. فلقد اتضح أن كلمات نص لوريم إيبسوم تأتي من الأقسام 1.10.32 و 1.10.33 من كتاب "حول أقاصي الخير والشر" (de Finibus Bonorum et Malorum) للمفكر شيشيرون (Cicero) والذي كتبه في عام 45 قبل الميلاد. هذا الكتاب هو بمثابة مقالة علمية مطولة في نظرية الأخلاق، وكان له شعبية كبيرة في عصر النهضة. السطر الأول من لوريم إيبسوم "Lorem ipsum dolor sit amet.." يأتي من سطر في القسم 1.20.32 من هذا الكتاب.

للمهتمين قمنا بوضع نص لوريم إبسوم القياسي والمُستخدم منذ القرن الخامس عشر في الأسفل. وتم أيضاً توفير الأقسام 1.10.32 و 1.10.33 من "حول أقاصي الخير والشر" (de Finibus Bonorum et Malorum) لمؤلفه شيشيرون (Cicero) بصيغها الأصلية، مرفقة بالنسخ الإنكليزية لها والتي قام بترجمتها هـ.راكهام (H. Rackham) في عام 1914.'
      />

      <Services
        withDetailsBtn
        serviceData={{
          services: data?.business,
          TitleOurServicesAr: data?.titleOurServicesAr,
          TitleOurServicesEn: data?.titleOurServicesEn,
          descriptionOurServicesAr: data?.descriptionOurServicesAr,
          descriptionOurServicesEn: data?.descriptionOurServicesEn,
        }}
        setSelectedTab={tabId => handleSelectTab(tabId)}
        withMoreBtn={false}
        selectedTab={activeTab}
        onDetailsBtnClick={handleMoreBtnClick}
      />
      <>
        <h2
          data-aos='fade-up'
          data-aos-delay='150'
          className={styles.projectTitle}
        >
          الإطلاع على مشاريعنا
        </h2>

        <ProjectsSection className={styles.projectsSectionWrap} />
      </>

      <DetailsModal
        onClosed={() => setModalData(undefined)}
        withIcon
        data={{
          title: getValueByLang(modalData?.title_ar, modalData?.title_en),
          desc: getValueByLang(
            modalData?.description_inside_details_ar,
            modalData?.description_inside_details_en
          ),
          imgLink: modalData?.image,
          iconLink: modalData?.icon,
        }}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
    </PageWrapper>
  );
};

export default Service;
