/** @format */

import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import { SessionProvider } from 'next-auth/react';

export default function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
