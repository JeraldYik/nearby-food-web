import Head from 'next/head';

import 'assets/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

import { ParamsProvider } from 'stores/ParamsStore';
import { ResultsProvider } from 'stores/ResultsStore';
import { ClickedProvider } from 'stores/ClickedStore';
import { ErrorHandlerProvider } from 'hooks/useErrorHandler';

function MyApp({ Component, pageProps }) {
  return (
    <ClickedProvider>
      <ParamsProvider>
        <ResultsProvider>
          <ErrorHandlerProvider>
            <Head>
              <title>Nearby Food Web</title>
              <meta content='Nearby Food Web' property='og:title' />
              <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
              <meta name='viewport' content='width=device-width, initial-scale=1' />
              {/* TODO: to fix favicon */}
              <link rel='shortcut icon' type='image/x-icon' sizes='32x32' href='/favicon.ico' />
              <link rel='shortcut icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
              <link rel='shortcut icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
            </Head>
            <Component {...pageProps} />
          </ErrorHandlerProvider>
        </ResultsProvider>
      </ParamsProvider>
    </ClickedProvider>
  );
}

export default MyApp;
