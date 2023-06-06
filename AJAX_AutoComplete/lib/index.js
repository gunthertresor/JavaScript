// TODO: Autocomplete the input with AJAX calls.

// Select the input element
const input = document.querySelector("input");
const displaySuggestions = document.getElementById("results");

// Add event listener to the input element for keyup event
input.addEventListener('keyup', (event) => {
  displaySuggestions.innerText = '';
  event.preventDefault();
  // Get the value of the input box
  const inputBox = document.getElementById("search").value;
  // Construct the URL for the autocomplete API request
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${inputBox}`;
  // Make the HTTP request to the autocomplete API
  fetch(url) // Make the HTTP request
    .then(response => response.json()) // Wait for the response and parse it as JSON
    .then((data) => {
      // Extract the suggestions from the response data
      const suggestions = data.words;
      // Iterate over the suggestions and create elements for each suggestion
      suggestions.forEach((suggestion) => {
        const suggestionElement = document.createElement("li");
        suggestionElement.textContent = suggestion;
        suggestionElement.classList.add("suggestion");
        // Append the suggestion element to the container
        displaySuggestions.appendChild(suggestionElement);
      });
    });
});
