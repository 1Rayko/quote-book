
function generateQuote() {
  fetch('https://quotes.rest/quote/random.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote').innerHTML = `"${data.contents.quote}" - ${data.contents.author}`;
    })
    .catch(error => {
      console.log(error);
    });
}
