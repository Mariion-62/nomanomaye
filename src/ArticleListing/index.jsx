import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SArticleListing from './style';

function ArticleListing() {
  const [articles, setArticles] = useState([]);
  const { id } = useParams();

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
            <a href={`${article.link}`} target="_blank" rel="noreferrer">
              <div className="try">
                <img src={article.image} alt="" className="imgArticle" />
                <div className="infoArticle">
                  <p className="nameArticle">{article.name}</p>
                  <p className="priceArticle">{article.price}€</p>
                </div>
              </div>
            </a>
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
