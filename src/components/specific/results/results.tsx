import { useContext, useState, useEffect } from 'react';
import { ResultsContext, IResultsState, IResult } from 'stores/ResultsStore';
import { IClickedState, ClickedContext } from 'stores/ClickedStore';
import Result from 'components/specific/results/result';

const Results = (): JSX.Element => {
  // TODO: to resolve
  const [resultsState] = useContext<IResultsState>(ResultsContext);
  const [clickedState] = useContext<IClickedState>(ClickedContext);
  const containerClassName: string = 'results-container';
  const individualClassName: string = 'result';

  const LoadingData = (): JSX.Element => <h5>Loading Data...</h5>;

  const ResultsSegment = (): JSX.Element => (
    <div className={containerClassName}>
      {resultsState.results.map((s: IResult, idx: number) => (
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

  const NoResults = (): JSX.Element => <h5>No Results</h5>;

  console.log(clickedState);

  return clickedState.clicked ? <LoadingData /> : Object.keys(resultsState.results).length > 0 ? <ResultsSegment /> : <NoResults />;
};

export default Results;
