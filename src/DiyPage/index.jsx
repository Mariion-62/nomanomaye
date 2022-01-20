import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import cart from 'assets/cart.png';
import logo from '../assets/logoManoMano.png';
import splash from '../assets/splash.jpeg';
import SDiyPage from './style';

function DiyPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/items`).then(({ data }) => {
      setItems(data);
    });
  }, []);

  return (
    <SDiyPage>
      <header className="headHomepage">
        <Link to="/">
          <img className="logo" src={logo} alt="ManoMano" />
        </Link>
        <div className="identifyCart">
          <h2 className="identify">Mon compte</h2>
          <img className="cart" src={cart} alt="panier" />
        </div>
      </header>
      <main>
        <div>
          <div className="titleWrapper">
            <h1>Nos inspirations</h1>
            <img src={splash} alt="splash" />
          </div>
        </div>
        {items.map((item) => {
          return (
            <article>
              <Link to={`/${item.id}`}>
                <section>
                  <img className="imgResults" src={item.picture} alt="" />
                  <p>
                    {item.name}
                    <span> 🪚 Cliquez ici pour un tuto détaillé! 🪛</span>
                  </p>
                </section>
              </Link>
            </article>
          );
        })}
      </main>
    </SDiyPage>
  );
}

export default DiyPage;
