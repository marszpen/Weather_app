import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {
  const handleCityChange = useCallback(city => {
    console.log(city);
  });
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${handleCityChange}&appid=7a9cee65673e9f0fb7b6ebccf43d7980
&units=metric`)
   .then(res => res.json())
   .then(data => {
     console.log(data);
   });

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;