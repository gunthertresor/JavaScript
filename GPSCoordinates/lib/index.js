const locationMap = (longitude, latitude) => {
  mapboxgl.accessToken = "pk.eyJ1IjoibnZlZ2FyIiwiYSI6ImNsaWltYjB0dDBtZjczZnBpanBjcXhqbGoifQ.WLpuCftycWgMf7CpMzq0vg";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [longitude, latitude],
    zoom: 12
  });

  new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
};


const geoMap = () => {
  const inputAddress = document.querySelector('.form-control');
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputAddress.value}.json?access_token=pk.eyJ1IjoibnZlZ2FyIiwiYSI6ImNsaWltYjB0dDBtZjczZnBpanBjcXhqbGoifQ.WLpuCftycWgMf7CpMzq0vg`;
  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.features[0].center);
      const longitude = data.features[0].center[0];
      const latitude = data.features[0].center[1];
      const coordinates = document.querySelector('.lead');
      coordinates.innerText = `The Logitude is: ${longitude} and the Latitude is: ${latitude}`;
      locationMap(longitude, latitude);
    });
};

const buttonForm = document.querySelector('form');
buttonForm.addEventListener('submit', (event) => {
  // const inputAddress = document.querySelector('.form-control');
  // console.log(inputAddress.value);
  geoMap();
  event.preventDefault();
});
