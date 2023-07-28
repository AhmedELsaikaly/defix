import { useState, useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import { NavLinksList } from './nav-links-list';
import { SideMenu } from './side-menu';
import styles from './index.module.scss';
import { Overlay } from './overlay';

interface NavbarProps {
  isWhiteBg?: boolean;
}

const Navbar = ({ isWhiteBg = false }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [isSideMenuOpened, setIsSideMenuOpened] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const sticky = navRef.current.offsetTop;
    const handleScroll = () => {
      if (navRef.current) {
        setIsSticky(window.scrollY >= sticky);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${isSticky ? styles.sticky : ''} ${
          isWhiteBg ? styles.whiteNav : ''
        }`}
      >
        <Container>
          <NavLinksList
            isChangeLangPrimary={isWhiteBg}
            onMenuButtonClick={() => setIsSideMenuOpened(true)}
          />
        </Container>
      </nav>
      <SideMenu
        opened={isSideMenuOpened}
        setSideMenuOpen={(status: boolean) => setIsSideMenuOpened(status)}
      />
      {isSideMenuOpened && (
        <Overlay onClick={() => setIsSideMenuOpened(false)} />
      )}
    </div>
  );
};

export default Navbar;
