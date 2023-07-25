import styles from './index.module.scss';
import { NavLinksList } from './nav-links-list';

interface SideMenuProps {
  opened: boolean;
}
export const SideMenu = ({ opened }: SideMenuProps) => {
  return (
    <aside className={`${styles.sideMenu} ${opened ? styles.opened : ''}`}>
      <NavLinksList isSideMenu />
    </aside>
  );
};
