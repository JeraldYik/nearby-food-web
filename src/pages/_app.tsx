import 'assets/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

import { ParamsProvider } from 'stores/ParamsStore';
import { ResultsProvider } from 'stores/ResultsStore';
import { ClickedProvider } from 'stores/ClickedStore';

function MyApp({ Component, pageProps }) {
  return (
    <ClickedProvider>
      <ParamsProvider>
        <ResultsProvider>
          <Component {...pageProps} />
        </ResultsProvider>
      </ParamsProvider>
    </ClickedProvider>
  );
}

export default MyApp;
