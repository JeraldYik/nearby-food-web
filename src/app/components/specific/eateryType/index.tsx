import ButtonGroup from 'app/components/generic/buttonGroup';

const EateryType = (): JSX.Element => {
  const types = ['Restaurants', 'Café'];
  return <ButtonGroup className='eatery-type' buttons={types} conditional={true} />;
};

export default EateryType;
