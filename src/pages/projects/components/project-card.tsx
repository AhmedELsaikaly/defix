import { MoreBtnLink } from '../../../components';
import styles from '../index.module.scss';
interface ProjectCardProps {
  title: string;
  desc: string;
  imgLink: string;
  id: string;
}
export const ProjectCard = ({ title, desc, imgLink, id }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImage}>
        <img
          className='img-full'
          loading='lazy'
          src={imgLink}
          alt={title}
          title={title}
        />
      </div>
      <div className={styles.projectCardContent}>
        <div>
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
        <MoreBtnLink text='عرض التفاصيل' />
      </div>
    </div>
  );
};
