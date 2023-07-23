import styles from './index.module.scss';

interface SectionsTitleProps {
  text: string;
}

const SectionsTitle = ({ text }: SectionsTitleProps) => {
  return (
    <h2 className={styles.sectionTitle} data-aos='fade-up' data-aos-delay='150'>
      <span>{text}</span>
    </h2>
  );
};

export default SectionsTitle;
