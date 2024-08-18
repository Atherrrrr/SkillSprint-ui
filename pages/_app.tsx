// _app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "jotai";
import { EmotionCache } from "@emotion/react";
import Layout from "../layout";
import React, { FC } from "react";
import PageProvider from "@/components/layout/PageProvider";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Head from "next/head";

Amplify.configure({ ...awsconfig }, { ssr: true });

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <StoreProvider>
    <PageProvider emotionCache={emotionCache}>
      <Head>
        <title>SkillSprint</title>
        <link rel="icon" href="/app-title-icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PageProvider>
  </StoreProvider>
);

export default withAuthenticator(App);
