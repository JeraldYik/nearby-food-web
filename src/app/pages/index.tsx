import Head from 'next/head';
import { Grid, Segment } from 'semantic-ui-react';
import { useReducer, useState } from 'react';

import AddressField from 'app/components/specific/addressField';
import EateryType from 'app/components/specific/eateryType';
import Rating from 'app/components/specific/rating';
import DollarSign from 'app/components/specific/dollarSign';
import RadiusField from 'app/components/specific/radiusField';

interface IState {
  address: string;
  type: 'restaurant' | 'cafe';
  rating: number;
  minPrice: number;
  maxPrice: number;
  radius: number;
}

interface IAction {
  type: string;
}

const initialState: IState = {
  address: '',
  type: 'restaurant',
  rating: 3.5,
  minPrice: 1,
  maxPrice: 2,
  radius: 2000
};

const reducer = (state: IState, action: IAction): any => {
  switch (action.type) {
    default:
      throw new Error('action.type not found');
  }
};

const LandingPage = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Grid id='landing-page' stackable columns={2}>
      <Grid.Column>
        <Segment>
          <h1>Map</h1>
          <h3>Input field for address. Submit Button. Get my current address</h3>
          <AddressField />
          <h3>Type of Eatery (Restaurant/Cafe) button</h3>
          <EateryType />
          <h3>Rating Above Slider</h3>
          <Rating />
          <h3>Dollar Sign Slider</h3>
          <DollarSign />
          <h3>Radius input</h3>
          <RadiusField />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Results place</Segment>
      </Grid.Column>
    </Grid>
  );
};

export default LandingPage;
