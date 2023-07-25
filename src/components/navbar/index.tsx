import { useState } from 'react';
import { Container } from 'reactstrap';
import { NavLinksList } from './nav-links-list';
import { SideMenu } from './side-menu';
import styles from './index.module.scss';
import { Overlay } from './overlay';

const Navbar = () => {
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);
  return (
    <div>
      <nav className={styles.navbar}>
        <Container>
          <NavLinksList onMenuButtonClick={() => setIsSideMenuOpened(true)} />
        </Container>
      </nav>
      <SideMenu opened={isSideMenuOpened} />
      {isSideMenuOpened && (
        <Overlay onClick={() => setIsSideMenuOpened(false)} />
      )}
    </div>
  );
};

export default Navbar;
