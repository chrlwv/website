import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="A multipurpose discord client written in javascript. Used to be a freelance start-up project but now it's a public client for all around the world users." />
        <meta name="theme-color" content="#00b9a0" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="chrlwv.tech" />
        <meta property="og:description" content="A multipurpose discord client written in javascript. Used to be a freelance start-up project but now it's a public client for all around the world users." />
      </Head>
      <body className="text-primary bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
