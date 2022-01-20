import Accordion from 'Accordion';
import ArticleListing from 'ArticleListing';
import SDiyItem from './style';
import buffet from '../buffetDeco.jpg';
import logo from '../assets/logoManoMano.png';

function DiyItem() {
  return (
    <SDiyItem>
      <img className="logo" src={logo} alt="logo" />
      <article>
        <div className="imgContainer">
          <img src={buffet} alt="buffet" />
        </div>
        <h1>Buffet de salle à manger scandinave</h1>

        <Accordion title="Tutoriel et étapes" columnContent="TEST 1" />

        <Accordion
          title="Listes des articles"
          rowContent={<ArticleListing />}
        />

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
