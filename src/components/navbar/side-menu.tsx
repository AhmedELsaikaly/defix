import styles from './index.module.scss';
import { NavLinksList } from './nav-links-list';

interface SideMenuProps {
  opened: boolean;
  setSideMenuOpen?: (opened: boolean) => void;
}
export const SideMenu = ({ opened, setSideMenuOpen }: SideMenuProps) => {
  return (
    <aside className={`${styles.sideMenu} ${opened ? styles.opened : ''}`}>
      <NavLinksList isSideMenu setSideMenuOpen={setSideMenuOpen} />
    </aside>
  );
};
