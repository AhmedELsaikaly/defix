import { useEffect } from 'react';
import NProgress from 'nprogress';
import styles from './index.module.scss'
import { Spinner } from 'reactstrap';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div
    className={styles.suspenseWrapper}
    
    >
      <Spinner />
    </div>
  );
}

export default SuspenseLoader;