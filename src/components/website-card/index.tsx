import MoreBtnLink from '../more-btn-link';
import { IBusinessItem } from '../../models/services';
import styles from './index.module.scss';

interface WebsiteCardProps {
  title: string;
  text: string;
  iconLink: string;
  iconHaveBg?: boolean;
  hovered?: boolean;
  moreBtnLink?: string;
  onMoreBtnClick?: () => void;
}

const WebsiteCard = ({
  title,
  text,
  iconLink,
  iconHaveBg,
  hovered,
  moreBtnLink,
  onMoreBtnClick,
}: WebsiteCardProps) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='150'
      className={`${styles.websiteCard} ${hovered ? styles.hovered : ''}`}
    >
      <div className={styles.cardIconTitleWrap}>
        <div className={`${styles.icon} ${iconHaveBg ? styles.withBg : ''}`}>
          <img
            loading='lazy'
            className='img-full img-bg'
            src={iconLink}
            title={title}
            alt={title}
          />
        </div>
        <h5>{title}</h5>
      </div>
      <p>{text}</p>
      {moreBtnLink && <MoreBtnLink link={moreBtnLink} text='عرض التفاصيل' />}
      {onMoreBtnClick && (
        <MoreBtnLink onClick={onMoreBtnClick} text='عرض التفاصيل' />
      )}
    </div>
  );
};

export default WebsiteCard;
