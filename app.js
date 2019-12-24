const API_KEY = '6d292dec07cd4134b0c9f7279039ebbe';
const newsContainer = document.querySelector('.news-container');
let search  = document.querySelector("#search");
let country = '';
search = country;


let articles = [];

const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

const req = new Request(url);

fetch(req).then(res => res.json()).then(data => {
  articles = data.articles;
}).then(() => viewArticles(articles));

function viewArticles(news) {
  const fragment = document.createDocumentFragment();

  news.forEach(newsItem => {
    const article = document.createElement('article');
    article.innerHTML = `
      <div class="headline">
        ${newsItem.title}
      </div>
      <div class="news-image">
        <img src='${newsItem.urlToImage}' alt='${newsItem.source.name}' />
      </div>
      <p>
        ${newsItem.description}
        <a href='${newsItem.url}' target='_blank'>read more</a>.
      </p>
    `;
    fragment.appendChild(article);
  })
  newsContainer.appendChild(fragment);
}

// https://restcountries.eu/rest/v2/name/iraq
// https://newsapi.org/