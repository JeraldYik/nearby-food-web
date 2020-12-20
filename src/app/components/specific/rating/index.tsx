import SliderComponent from 'app/components/generic/slider';

const Rating = (): JSX.Element => {
  return <SliderComponent className={'rating-above'} start={3.5} min={0} max={5} step={0.1} discrete={false} />;
};

export default Rating;
