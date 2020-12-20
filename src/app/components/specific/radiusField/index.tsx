import InputField from 'app/components/generic/inputField';

const RadiusField = (): JSX.Element => {
  return <InputField className='radius-field' label={'km'} labelPosition={'right'} placeholder='Enter the maximum radius of the search field' />;
};

export default RadiusField;
