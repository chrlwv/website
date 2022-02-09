/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Grid,
  Container,
  Button,
  Heading,
  Text,
} from 'theme-ui';
import { rgba } from 'polished';
import Image from 'components/image';
import NextLink from 'next/link';
import illustration from 'assets/images/chrlwv.jpg';

const Banner = () => {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <div sx={styles.newsUpdate}>
              <span>NEWS</span>
              chrlwv.tech got a rebranding update; client works fine
            </div>
            <Heading as="h1">
             chrlwv.tech
            </Heading>
            <Text as="p">
              A multipurpose discord client written in javascript. Used to be a freelance start-up project but now it's a public client for all around the world users.
            </Text>
            <div sx={styles.buttonGroup}>
            <NextLink href="https://discord.com/oauth2/authorize?client_id=902937010103275581&permissions=1916267615&scope=bot"><Button variant="primary">Invite</Button></NextLink>
            <NextLink href="https://discord.gg/RPRfpnM6MZ"><Button variant="white" className="white">
                Support
              </Button></NextLink>
            </div>
          </Box>
          <Flex as="figure" sx={styles.illustration}>
           <Image src={illustration} alt="chrlwv.tech" />
          </Flex>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    background: `#0b0e17`,
    pt: [8, null, null, null, 10, 0],
    pb: [8, null, null, null, 10, 0],
  },
  container: {
    px: [3, null, null, 6],
  },
  grid: {
    alignItems: ['center'],
    gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
    minHeight: [null, null, null, null, '45vh', '100vh'],
    pt: [15, null, null, 17, 12],
  },
  content: {
    textAlign: ['center', null, null, null, 'left'],
    h1: {
      color: 'textSecondary',
      fontWeight: 'bold',
      fontSize: [9, null, null, null, 12, 14, 15],
      lineHeight: [1.33, null, null, null, 1.36],
      letterSpacing: 'heading',
    },
    p: {
      color: 'textSecondary',
      fontSize: [1, null, null, 2],
      lineHeight: 1.62,
      maxWidth: 480,
      mx: [null, null, null, 'auto', 'unset'],
      marginTop: [1, null, null, 3],
    },
  },
  newsUpdate: {
    backgroundColor: '#141926',
    boxShadow: '0px 2px 8px rgba(67, 99, 136, 0.07)',
    borderRadius: 50,
    padding: '4px 15px 4px 5px',
    display: 'inline-flex',
    alignItems: 'center',
    color: rgba('white', 0.9),
    fontSize: ['12px', null, null, 1],
    mb: 4,
    textAlign: 'left',
    span: {
      backgroundColor: 'primary',
      color: 'white',
      fontSize: ['10px', null, null, '13px'],
      fontWeight: 700,
      display: 'inline-flex',
      minHeight: 24,
      alignItems: 'center',
      px: '11px',
      borderRadius: 50,
      mr: '12px',
    },
  },
  buttonGroup: {
    mt: [6, null, null, null, 10],
    button: {
      minHeight: 45,
      px: ['17px', 4],
    },
    '.white': {
      boxShadow: '0px 4px 6px rgba(125, 128, 170, 0.08)',
      borderRadius: 5,
      fontWeight: 500,
      ml: 3,
      '&:hover': {
        backgroundColor: '#b5b5b5',
      },
    },
  },
  illustration: {
    maxWidth: [null, null, null, '80%', 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    mt: [6, null, null, null, 0],
    alignItems: 'center',
    '&:hover': {
      filter: 'blur(1px) brightness(80%)',
    },
  },
};
