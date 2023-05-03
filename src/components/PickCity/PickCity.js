import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';

import { useState } from 'react';

const PickCity = () => {
  const [city, setCity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    action(city);
    setCity('');
  };

  return (
    <form className={styles.pickCityForm} onSubmit={handleSubmit}> 
      <label>
        <TextInput placeholder="Enter city name...." value={city} onChange={e => setCity(e.target.value)} />
      </label>
      <Button onSubmit={handleSubmit}>Search</Button>
    </form>
  );
};

export default PickCity;