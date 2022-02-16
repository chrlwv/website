/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Button } from 'theme-ui';
import { useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Image from 'components/image';
import { NavLink } from 'components/link';

import NextLink from 'next/link';

import illustration from 'assets/images/logo.png';
import menuItems from './header.data';

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass='is-sticky'
        innerZ={100}
        onStateChange={handleStateChange}>
        <header
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}>
          <Container sx={styles.container}>
            <Image src={illustration} alt='chrlwv.tech' />
            <nav as='nav' sx={styles.navbar} className={'navbar'}>
              {menuItems.map(({ path, label }, i) => (
                <NavLink key={i} path={path} label={label} />
              ))}
            </nav>
            <Button variant='primary' type='button' disabled sx={styles.button}>
              Login
            </Button>
            <NavbarDrawer />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    backgroundColor: 'transparent',
    position: 'fixed',
    left: 0,
    right: 0,
    py: [5],
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: '#05060a',
      boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
      py: [3],
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    a: {
      cursor: 'pointer',
      display: ['flex'],
      fontWeight: 400,
      padding: 0,
      transition: 'all 0.3s ease-in-out 0s',
      '+ a': {
        ml: [null, null, null, null, 4, 7],
      },
    },
    '.active': {
      color: 'primary',
    },
  },
  button: {
    display: ['none', null, null, null, 'inline-flex'],
    minHeight: 45,
    px: '18px',
  },
};
