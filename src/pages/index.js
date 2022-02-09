import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "@americanexpress/react-seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="chrlwv.tech - a great Discord bot."
          description="A multipurpose discord client written in javascript. Used to be a freelance start-up project but now it's a public client for all around the world users."
          siteUrl="http://chrlwv.tech"
          image={{
            src: "https://i.imgur.com/O3TKDDx.png",
          }}
        />
        <Banner />
        <Services />
      </Layout>
    </ThemeProvider>
  );
}
