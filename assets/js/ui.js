class UI {
  constructor() {
    this.city = document.querySelector(".city");
    this.state = document.querySelector(".state");
    this.location = document.querySelector(".location");
    this.icon = document.querySelector(".icon");
    this.temp = document.querySelector(".temp")
    this.desc = document.querySelector(".desc");
    this.humidtiy = document.querySelector(".humidity");
    this.wind = document.querySelector(".wind");
    this.cloud = document.querySelector(".cloud");

  }

  showweather(data) {
    this.city.textContent = data.name + ",  ";
    this.state.textContent = data.sys.country;
    let img = data.weather.map((a) => a.icon);
    this.icon.setAttribute("src", `http://openweathermap.org/img/w/${img}.png`);
    this.temp.textContent = Math.floor(data.main.temp)
    this.desc.textContent = data.weather.map((a) => a.description);
    this.humidtiy.textContent = data.main.humidity;
    this.wind.textContent = data.wind.speed;
    this.cloud.textContent = data.clouds.all;
  }
}