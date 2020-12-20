import InputField from 'app/components/generic/inputField';

const AddressField = (): JSX.Element => {
  return <InputField className='address-field' placeholder='Enter an address to query (full address/postal code/building name etc...)' />;
};

export default AddressField;
