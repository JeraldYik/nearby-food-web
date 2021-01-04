import { IResult } from 'stores/ResultsStore';
import { Card } from 'semantic-ui-react';
import { STAR_EMOJI } from 'assets/constants';

interface IExtra {
  className: string;
}

export interface IProps extends IResult, IExtra {}

const Result = (props: IProps): JSX.Element => {
  // find api to get company logo
  return (
    <Card href={props.url} target='_blank' fluid>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='rating'>
            ({props.rating} {STAR_EMOJI})
          </span>
          <span className='price-level'>({'$'.repeat(props.priceLevel)})</span>
        </Card.Meta>
        <Card.Description>{props.vicinity}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Result;
