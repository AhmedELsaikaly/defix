import { PropsWithChildren } from 'react';
import styles from './index.module.scss';

interface SectionsWrapperProps {
  className?: string;
}

const SectionsWrapper = ({
  className = '',
  children,
}: PropsWithChildren<SectionsWrapperProps>) => {
  return (
    <section className={`${className} ${styles.sectionWrapper}`}>
      {children}
    </section>
  );
};

export default SectionsWrapper;
