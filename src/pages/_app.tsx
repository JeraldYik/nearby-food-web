import 'assets/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

import ParamsProvider from 'stores/ParamsStore';
import ResultsProvider from 'stores/ResultsStore';

function MyApp({ Component, pageProps }) {
  return (
    <ParamsProvider>
      <ResultsProvider>
        <Component {...pageProps} />
      </ResultsProvider>
    </ParamsProvider>
  );
}

export default MyApp;
