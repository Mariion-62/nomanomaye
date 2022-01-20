import Footer from 'Footer';
import logoManoMano from 'assets/logoManoMano.png';
import cart from 'assets/cart.png';
import burgerMenu from 'assets/burgerMenu.png';
import loupe from 'assets/loupe.png';
import inspiration from 'assets/inspiration.png';
import chair from 'assets/chair.png';
import bed from 'assets/bed.png';
import arrow from 'assets/arrow.png';
import matelas from 'assets/matelas.png';
import tabouret from 'assets/tabouret.png';

import SHome from './style';

function Homepage() {
  return (
    <>
      <SHome>
        <header className="headHomepage">
          <img className="logo" src={logoManoMano} alt="ManoMano" />
          <div className="identifyCart">
            <h2 className="identify">Identifiez-vous</h2>
            <img className="cart" src={cart} alt="panier" />
          </div>
        </header>
        <div className="menuSearch">
          <img className="menuBurger" src={burgerMenu} alt="menu burger" />
          <div className="wrap">
            <form>
              <input
                className="searchBar"
                type="text"
                placeholder="Rechercher un produit, une marque..."
              />
              <img className="loupe" src={loupe} alt="loupe" />
            </form>
          </div>
        </div>
        <section className="navBar">
          <h3>Soldes</h3>
          <h3>Bons plans</h3>
          <h3>Meilleures ventes</h3>
          <h3>Perceuses, visseuse...</h3>
        </section>
        <img className="inspiration" src={inspiration} alt="Nos inspirations" />
        <section className="selectSection">
          <div className="headSelect">
            <div className="text">
              <h2>Notre sélection maison</h2>
              <p>Plein de produits pour vous réunis ici</p>
            </div>
            <img className="arrow" src={arrow} alt="flèche" />
          </div>
          <div className="selectImg">
            <img className="selectionHome" src={chair} alt="Chaises" />
            <img className="selectionHome" src={bed} alt="Lit" />
          </div>
          <div className="headSelect">
            <div className="text">
              <h2>Nos top ventes</h2>
              <p>Oui, ces produits sont vraiment top</p>
            </div>
            <img className="arrow" src={arrow} alt="flèche" />
          </div>
          <div className="selectImg">
            <img className="selectionHome" src={matelas} alt="Matelas" />
            <img className="selectionHome" src={tabouret} alt="Tabouret" />
          </div>
        </section>
      </SHome>
      <Footer />
    </>
  );
}

export default Homepage;
