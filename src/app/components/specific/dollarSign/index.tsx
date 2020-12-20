import SliderComponent from 'app/components/generic/slider';

const DollarSign = (): JSX.Element => {
  return <SliderComponent className={'dollar-sign'} start={[1, 2]} min={1} max={5} step={1} discrete={true} />;
};

export default DollarSign;
