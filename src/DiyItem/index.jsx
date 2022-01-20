import Accordion from 'Accordion';
import PicTest from './PicTest';
import Tips from './Tips';
import SDiyItem from './style';
import buffet from '../buffetDeco.jpg';
import wood from '../assets/wood.jpeg';

function DiyItem() {
  return (
    <SDiyItem>
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

        <Accordion title="Listes des articles" rowContent="TEST 2" />

        <Accordion
          title="Nos utilisateurs ont testé ! &#128525; "
          rowContent={<PicTest />}
        />

        <Accordion
          title="Conseils de nos utilisateurs ! &#128591;"
          columnContent={<Tips />}
        />
      </article>
    </SDiyItem>
  );
}
export default DiyItem;
