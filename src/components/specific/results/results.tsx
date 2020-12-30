import { useContext, useState, useEffect } from 'react';
import { ResultsContext, IResultsState, IResult } from 'stores/ResultsStore';
import Result from 'components/specific/results/result';

const Results = (): JSX.Element => {
  // TODO: to resolve
  const [state, _] = useContext<IResultsState>(ResultsContext);
  const containerClassName: string = 'results-container';
  const individualClassName: string = 'result';

  return Object.keys(state.results).length > 0 ? (
    <div className={containerClassName}>
      {state.results.map((s: IResult, idx: number) => (
        <Result
          className={`${individualClassName}-${idx + 1}`}
          name={s.name}
          rating={s.rating}
          priceLevel={s.priceLevel}
          vicinity={s.vicinity}
          url={s.url}
        />
      ))}
    </div>
  ) : (
    <h5>No Results</h5>
  );
};

export default Results;
