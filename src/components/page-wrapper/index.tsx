import { ReactNode } from 'react';
import SuspenseLoader from '../suspense-loader';

interface PageWrapperProps {
  children: ReactNode | ReactNode[];
  loading: boolean;
}

const PageWrapper = ({ children, loading }: PageWrapperProps) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {loading ? <SuspenseLoader /> : children}
    </div>
  );
};

export default PageWrapper;
