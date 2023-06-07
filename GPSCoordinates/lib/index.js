const locationMap = (longitude, latitude) => {
  // Set Mapbox access token
  mapboxgl.accessToken = "pk.eyJ1IjoibnZlZ2FyIiwiYSI6ImNsaWltYjB0dDBtZjczZnBpanBjcXhqbGoifQ.WLpuCftycWgMf7CpMzq0vg";
  
  // Create a new Mapbox map instance
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: [longitude, latitude],
    zoom: 12
  });
// Add a marker to the map at the specified coordinates
  new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
};
const geoMap = () => {
   // Get the input address element
  const inputAddress = document.querySelector('.form-control');
  // Construct the URL for geocoding API using the input address value
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputAddress.value}.json?access_token=pk.eyJ1IjoibnZlZ2FyIiwiYSI6ImNsaWltYjB0dDBtZjczZnBpanBjcXhqbGoifQ.WLpuCftycWgMf7CpMzq0vg`;
  console.log(url);
  // Fetch geocoding data from the API
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.features[0].center);
    // Retrieve the longitude and latitude from the response
      const longitude = data.features[0].center[0];
      const latitude = data.features[0].center[1];
     // Display the coordinates on the page
      const coordinates = document.querySelector('.lead');
      coordinates.innerText = `The Logitude is: ${longitude} and the Latitude is: ${latitude}`;
    // Call the locationMap function with the obtained coordinates
      locationMap(longitude, latitude);
    });
};

const buttonForm = document.querySelector('form');
buttonForm.addEventListener('submit', (event) => {
  // Trigger the geoMap function when the form is submitted
  geoMap();
  event.preventDefault();
});
