import ErrorPage from 'next/error';
// import { getReasonPhrase } from 'http-status-codes';

const Error404 = (): JSX.Element => {
  return <ErrorPage statusCode={404} title={'Page not found. For the time being, this is a single-paged application.'} />;
  // return <ErrorPage statusCode={404} title={getReasonPhrase(404)} />;
};

export default Error404;
