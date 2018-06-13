//add event listener to the window loaded
document.addEventListener("DOMContentLoaded", getGeolocation);


//getgeolocatin function

function getGeolocation() {
  //check the browser have the option
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((postion) => {
      const lat = Math.floor(postion.coords.latitude);
      const lon = Math.floor(postion.coords.longitude);
      const geo = new Geolocatoin(lat, lon);
      const ui = new UI();
      geo.getlocat()
        .then((resolve) => {
          ui.showweather(resolve);
        });
    });
  } else {
    alert("Your Browser Support Geolocation")
  }
}