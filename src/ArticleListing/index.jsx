import axios from 'axios';
import { useState, useEffect } from 'react';
import SArticleListing from './style';

function ArticleListing() {
  const [articles, setArticles] = useState([]);
  const id = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}/articles`)
      .then(({ data }) => {
        setArticles(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SArticleListing>
      {console.log(articles)}
      <section className="container">
        {articles.map((article) => (
          <div className="imgFlex">
            <div className="try">
              <div className="infoArticle">
                <p className="priceArticle">{article.price}€</p>
                <p className="nameArticle">{article.name}</p>
              </div>
              <img src={article.image} alt="" className="imgArticle" />
            </div>
          </div>
        ))}
        <button type="submit" className="btnArticle">
          Voir ce panier
        </button>
      </section>
    </SArticleListing>
  );
}

export default ArticleListing;
