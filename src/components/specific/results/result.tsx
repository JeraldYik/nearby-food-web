import { IResult } from 'stores/ResultsStore';
import { Container } from 'semantic-ui-react';

interface IExtra {
  className: string;
}

export interface IProps extends IResult, IExtra {}

const Result = (props: IProps): JSX.Element => {
  return (
    <Container className={props.className}>
      <p>Name: {props.name}</p>
      <p>Rating: {props.rating}</p>
      <p>Price Level: {props.priceLevel}</p>
      <p>Vicinity: {props.vicinity}</p>
      <p>URL: {props.url}</p>
    </Container>
  );
};

export default Result;
