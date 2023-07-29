import { useState, ReactNode } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import styles from './index.module.scss';
import Button from '../button';

interface TabsProps {
  tabs: { name: string; content: ReactNode | ReactNode[] }[];
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: '0' | '1';
}

const Tabs = ({ tabs, setSelectedTab, activeTab }: TabsProps) => {
  return (
    <div>
      <div className={styles.btnsWrapper}>
        {tabs.map((item, index) => (
          <Button
            key={index}
            type={String(index) === activeTab ? 'primary' : 'outlined'}
            onClick={() => setSelectedTab(String(index))}
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
