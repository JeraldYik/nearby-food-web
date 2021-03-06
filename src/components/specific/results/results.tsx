import { useContext, useState } from 'react';
import { ResultsContext, IResult } from 'stores/ResultsStore';
import { ClickedContext } from 'stores/ClickedStore';
import Result from 'components/specific/results/result';
import { Pagination } from 'semantic-ui-react';

/** DOCUMENT FOR PAGINATION
 * https://react.semantic-ui.com/addons/pagination/
 * https://www.codementor.io/@maseh87/paginating-a-react-app-with-semantic-ui-x1g4a0t79
 */

const Results = (): JSX.Element => {
  const { state: resultsState } = useContext(ResultsContext);
  const { state: clickedState } = useContext(ClickedContext);
  const [activePage, setActivePage] = useState<number>(1);
  const containerClassName: string = 'results-container';
  const individualClassName: string = 'result';
  // TODO: to change to take ref (height of params segment)
  const numResultsPerPage: number = 6;

  const onPageChange = (e, pageInfo): void => {
    setActivePage(pageInfo.activePage);
  };

  const LoadingData = (): JSX.Element => <h5>Loading Data...</h5>;

  const ResultsSegment = (): JSX.Element => (
    <div className={containerClassName}>
      <p>(Click on a card to view its location on Google Maps)</p>
      <Pagination
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={Math.ceil(Object.keys(resultsState.results).length / numResultsPerPage)}
        ellipsisItem={null}
      />
      {resultsState.results.slice(numResultsPerPage * (activePage - 1), numResultsPerPage * activePage).map((s: IResult, idx: number) => (
        <Result
          className={`${individualClassName}-${idx + 1}`}
          name={s.name}
          rating={s.rating}
          priceLevel={s.priceLevel}
          vicinity={s.vicinity}
          url={s.url}
          key={`result-${idx}`}
        />
      ))}
    </div>
  );

  const NotSubmitted = (): JSX.Element => <h5>Not Submitted</h5>;

  const NoResultsFound = (): JSX.Element => <h5>No Results found. Please try again with different inputs</h5>;

  return clickedState.clicked ? (
    <LoadingData />
  ) : Object.keys(resultsState.results).length > 0 ? (
    resultsState.results[0].name === 'ZERO_RESULTS' ? (
      <NoResultsFound />
    ) : (
      <ResultsSegment />
    )
  ) : (
    <NotSubmitted />
  );
};

export default Results;
