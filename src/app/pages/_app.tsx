import 'app/assets/styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

import GlobalProvider from 'app/stores';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
