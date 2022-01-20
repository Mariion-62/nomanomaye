import Accordion from 'Accordion';
import ArticleListing from 'ArticleListing';
import SDiyItem from './style';
import buffet from '../buffetDeco.jpg';
import logo from '../assets/logoManoMano.png';
import wood from '../assets/wood.jpeg';

function DiyItem() {
  return (
    <SDiyItem>
      <img className="logo" src={logo} alt="logo" />
      <article>
        <div className="imgContainer">
          <div className="tape" />
          <img src={buffet} alt="buffet" />
        </div>
        <div className="load">
          <div className="paint">
            <h1>Buffet de salle à manger scandinave</h1>
          </div>
          <div className="rollerContain">
            <div className="roller">
              <div className="roller-top" />
              <div className="roller-handle" />
            </div>
          </div>
        </div>

        <Accordion
          title="Tutoriel et étapes"
          columnContent="TEST 1"
          backImg={wood}
        />

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
