//class consturctor
class Geolocatoin {

  constructor(lat, lon) {
    this.api = "bb43e0a95a98e8a10e25ede654ad7f5c";
    this.lat = lat;
    this.lon = lon;
  }

  async getlocat() {
    const respond = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&APPID=${this.api}`);

    const data = respond.json();

    return data;
  }


}