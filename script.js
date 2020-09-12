function getWeather(city) {
  let key = `07acf366373b5306fda10948bd17840e`;
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  );
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      let temperature = data.main.temp;
      let description = data.weather[0].description;
      let country = data.sys.country;
      let city = data.name;
      let icon = data.weather[0].icon;
      let iconUrl = `icons/${icon}.png`;
      weatherImage.src = iconUrl;
      console.log(iconUrl);
      temp.innerHTML = temperature;
      disc.innerHTML = description;
      place.innerHTML = `${city}, ${country}`;
    } else {
      console.log(`error ${request.status}`);
    }
  };
}
