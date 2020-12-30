import Head from 'next/head';
import { Grid, Segment } from 'semantic-ui-react';

// import GoogleMaps from 'components/specific/googleMaps';
import AddressField from 'components/specific/addressField';
import EateryType from 'components/specific/eateryType';
import Rating from 'components/specific/rating';
import DollarSign from 'components/specific/dollarSign';
import RadiusField from 'components/specific/radiusField';

const LandingPage = (): JSX.Element => {
  return (
    <Grid id='landing-page' stackable columns={2}>
      <Grid.Column>
        <Segment>
          <h1>Map</h1>
          {/* <GoogleMaps /> */}
          <h3>Input field for address. Submit Button. Get my current address</h3>
          <AddressField />
          <h3>Type of Eatery (Restaurant/Café) button</h3>
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
