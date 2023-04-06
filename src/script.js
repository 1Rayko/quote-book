

$(document).ready(function() {
  // Загрузка ключа API 
 const API_KEY = "M4kIaCbhZNehvv7g1m6wBDEFaw2HLQjesC985Nj2";

  // Функция для получения цитаты из API
  function getQuote() {
    // URL-адрес API для получения случайной цитаты
    const apiUrl = `https://api.theysaidso.com/qod.json?category=inspire&api_key=${API_KEY}`;

    // Отправка запроса на получение цитаты
    $.getJSON(apiUrl, function(data) {
      // Извлечение текста цитаты из ответа API
      const quote = data.contents.quotes[0].quote;
      
      // Обновление текста цитаты на странице
      $("#quote").text(quote);
    });
  }

  // Обновление цитаты при загрузке страницы
  getQuote();

  // Обновление цитаты при клике на кнопку "New Quote"
  $("#new-quote").click(function() {
    getQuote();
  });
});
