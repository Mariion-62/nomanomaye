import Accordion from 'Accordion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TutoStep from 'TutoStep';
import cart from 'assets/cart.png';
import SDiyItem from './style';
import logo from '../assets/logoManoMano.png';

function DiyItem() {
  const [itemInfo, setItemInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`).then(({ data }) => {
      setItemInfo(data[0]);
    });
  }, []);

  return (
    <SDiyItem>
      <header className="headHomepage">
        <Link to="/">
          <img className="logo" src={logo} alt="ManoMano" />
        </Link>
        <div className="identifyCart">
          <h2 className="identify">Mon compte</h2>
          <img className="cart" src={cart} alt="panier" />
        </div>
      </header>
      <article>
        <div className="imgContainer">
          <div className="tape" />
          <img src={itemInfo.picture} alt="buffet" />
        </div>
        <div className="load">
          <div className="paint">
            <h1>{itemInfo.name}</h1>
          </div>
          <div className="rollerContain">
            <div className="roller">
              <div className="roller-top" />
              <div className="roller-handle" />
            </div>
          </div>
        </div>

        <Accordion title="Tutoriel et étapes" columnContent={<TutoStep />} />

        <Accordion title="Listes des articles" rowContent="TEST 2" />

        <Accordion title="Ils ont testé" rowContent="TEST 3" />
        <Accordion
          title="Conseils de nos utilisateurs"
          columnContent="TEST 4"
        />
      </article>
    </SDiyItem>
  );
}
export default DiyItem;
