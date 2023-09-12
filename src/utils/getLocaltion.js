export async function getLocation() {
  try {
    if ('geolocation' in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // console.log(position);

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_CITY_API_KEY}`
      );

      const city = await res.json();

      //   console.log(city.name);

      //   console.log('Latitude: ' + latitude);
      //   console.log('Longitude: ' + longitude);

      return { longitude, latitude, city: city.name };
    } else {
      throw new Error('Geolocation is not supported in your browser');
    }
  } catch (error) {
    console.error('Error getting location: ' + error.message);
  }
}
