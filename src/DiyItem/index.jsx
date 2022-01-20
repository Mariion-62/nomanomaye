import Accordion from 'Accordion';
import ArticleListing from 'ArticleListing';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TutoStep from 'TutoStep';
import axios from 'axios';
import cart from 'assets/cart.png';
import logo from '../assets/logoManoMano.png';
import PicTest from './PicTest';
import Tips from './Tips';
import SDiyItem from './style';

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

        <Accordion title="Liste des articles" rowContent={<ArticleListing />} />

        <Accordion
          title="  Nos utilisateurs ont testé &#128525; &#33; "
          rowContent={<PicTest />}
        />

        <Accordion
          title=" Conseils de nos utilisateurs  &#128591; &#33;"
          columnContent={<Tips />}
        />
      </article>
    </SDiyItem>
  );
}
export default DiyItem;
