import { useState, ReactNode } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import styles from './index.module.scss';
import Button from '../button';

interface TabsProps {
  tabs: { name: string; content: ReactNode | ReactNode[] }[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('0');
  return (
    <div>
      <div className={styles.btnsWrapper}>
        {tabs.map((item, index) => (
          <Button
            key={index}
            type={String(index) === activeTab ? 'primary' : 'outlined'}
            onClick={() => setActiveTab(String(index))}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <TabContent activeTab={activeTab}>
        {tabs.map((item, index) => (
          <TabPane key={index} tabId={String(index)}>
            {item.content}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default Tabs;
