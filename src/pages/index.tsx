import { Grid, Segment } from 'semantic-ui-react';

// import GoogleMaps from 'components/specific/googleMaps';
import AddressField from 'components/specific/addressField';
import EateryType from 'components/specific/eateryType';
import Rating from 'components/specific/rating';
import DollarSign from 'components/specific/dollarSign';
import RadiusField from 'components/specific/radiusField';
import Results from 'components/specific/results';

const backgroundColor = {
  background: 'radial-gradient(circle, rgba(255, 222, 233,0.4) 0%, rgba(181, 255, 252,0.4) 100%)'
};

const backgroundTransparent = {
  backgroundColor: 'transparent'
};

const LandingPage = (): JSX.Element => {
  return (
    <Grid id='landing-page__content' style={backgroundColor} stackable columns={2}>
      <Grid.Column>
        <Segment style={backgroundTransparent}>
          <h1>Adjust the filters and fields as desired and hit Submit!</h1>
          {/* <h1>Map</h1> */}
          {/* <GoogleMaps /> */}
          <h3>Enter the location of search (Postal Code/Street Name/Building Name etc.)</h3>
          <AddressField />
          <h3>Type of Eatery (Restaurant/Café) button</h3>
          <EateryType />
          <br />
          <small>Please refresh the page if the sliders are displayed incorrectly.</small>
          <h3>Rating Above Slider</h3>
          <Rating />
          <h3>Dollar Sign Slider</h3>
          <DollarSign />
          <h3>Radius input</h3>
          <RadiusField />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment style={backgroundTransparent}>
          <h3>Results Segment</h3>
          <Results />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default LandingPage;
