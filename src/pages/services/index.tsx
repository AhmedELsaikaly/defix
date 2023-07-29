import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Services } from '../../components';
import PageWrapper from '../../components/page-wrapper';

const Service = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(
    searchParams.get('selected') || 'construction'
  );

  return (
    <PageWrapper>
      <Services
        setSelectedTab={tabId => setActiveTab(tabId)}
        withMoreBtn={false}
        selectedTab={activeTab}
      />
    </PageWrapper>
  );
};

export default Service;
