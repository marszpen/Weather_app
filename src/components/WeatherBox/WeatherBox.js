import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';

const WeatherBox = props => {
  const [weather, setWeather] = useState('');
  const [load, setLoading] = useState(false);

  const handleCityChange = useCallback(city => {
    setLoading(true);
    console.log(city);
  
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a9cee65673e9f0fb7b6ebccf43d7980&units=metric`)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      const weatherData = {
        city: data.name,
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].main
      };
      setLoading(false)
      setWeather(weatherData)
      console.log(weatherData);
    });
});

  return (
    <section>
      <PickCity action={handleCityChange} />
      {weather && !load && <WeatherSummary {...weather} />}
			{load && <Loader />}
      <Loader />
    </section>
  )
};

export default WeatherBox;