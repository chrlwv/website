/** @format */

import React from 'react';
import { ThemeProvider, Button, Container } from 'theme-ui';
import theme from 'theme';
import SEO from '@americanexpress/react-seo';
import Layout from 'components/layout';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function IndexPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO
            title='chrlwv.tech - a great Discord bot.'
            description="A multipurpose discord client written in javascript. Used to be a freelance start-up project but now it's a public client for all around the world users."
            siteUrl='http://chrlwv.tech'
            image={{
              src: 'https://i.imgur.com/O3TKDDx.png',
            }}
          />
          <Container sx={styles.container}>
            <img sx={styles.avatar} src={session.user.image} /> Signed in as{' '}
            {session.user.email}
            <Button onClick={() => signOut()}>Sign out</Button>
          </Container>
        </Layout>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title='chrlwv.tech - a great Discord bot.'
          description="A multipurpose discord client written in javascript. Used to be a freelance start-up project but now it's a public client for all around the world users."
          siteUrl='http://chrlwv.tech'
          image={{
            src: 'https://i.imgur.com/O3TKDDx.png',
          }}
        />
        <Container sx={styles.container}>
          <Button onClick={() => signIn()}>Sign in</Button>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    maxWidth: [null, null, null, '80%', 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    mt: [6, null, null, null, 0],
    alignItems: 'center',
    '&:hover': {
      filter: 'blur(1px) brightness(80%)',
    },
  },
};
