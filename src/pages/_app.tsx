import 'assets/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

import GlobalProvider from 'stores';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
