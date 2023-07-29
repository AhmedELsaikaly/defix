import { useSearchParams } from 'react-router-dom';
import { Services } from '../../components';
import PageWrapper from '../../components/page-wrapper';

const Service = () => {
  const [searchParams] = useSearchParams();
  return (
    <PageWrapper>
      <Services
        withMoreBtn={false}
        selectedTab={searchParams.get('selected')}
      />
    </PageWrapper>
  );
};

export default Service;
