/** @format */
import Image from 'components/image';
import NextLink from 'next/link';
import { Container } from 'theme-ui';

import illustration from 'assets/images/github.svg';

const Github = () => {
  return (
    <section id='github' sx={styles.section}>
      <Container>
        <NextLink href='https://github.com/chrlwv'>
          <Image
            sx={styles.illustration}
            src={illustration}
            alt='chrlwv.tech github'
          />
        </NextLink>
      </Container>
    </section>
  );
};

export default Github;

const styles = {
  section: {
    background: `#0b0e17`,
    pt: [8, null, null, null, 10, 0],
    pb: [8, null, null, null, 10, 0],
  },
  illustration: {
    position: 'relative',
    left: '25%',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
};
