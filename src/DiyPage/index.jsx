import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/logoManoMano.png';
import SDiyPage from './style';

function DiyPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/items`).then(({ data }) => {
      console.log(data);
      setItems(data);
    });
  }, []);

  console.log(items);
  return (
    <SDiyPage>
      <img className="logo" src={logo} alt="logo" />
      <main>
        <div>
          <h1>Nos inspirations</h1>
        </div>
        {items.map((item) => {
          return (
            <article>
              <Link to="/details">
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
