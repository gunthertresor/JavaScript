const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a

const form = document.getElementById("search-movies");
const displayMovie = document.getElementById('movie-cards');

form.addEventListener('submit', (event) => {
  // Clear previous search results
  displayMovie.innerHTML = '';
  event.preventDefault();

  const inputMovie = document.getElementById('movie-name').value;
  const searchTerm = inputMovie.value;

  // url for api request
  const url = `http://www.omdbapi.com/?s=${inputMovie}&apiKey=${apiKey}`;
  fetch(url) // Make the HTTP request
    .then(response => response.json()) // Wait for the response and parse it as JSON
    .then((data) => {
      // iterating through the array to get every movie title 1 by 1
      for (let index = 0; index < data.Search.length; index += 1) {
        console.log(data.Search[index].Title);
        const html = `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card mb-2">
          <img src="${data.Search[index].Poster}">
            <span class="badge bg-primary mb-2">2009</span>
            <h5 class="card-title">${data.Search[index].Title}</h5>
          </div>
        </div>
      </div>`;
        displayMovie.insertAdjacentHTML('beforeend', html);
      }
    });
});
