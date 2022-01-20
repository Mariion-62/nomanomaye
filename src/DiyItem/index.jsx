import Accordion from 'Accordion';
import ArticleListing from 'ArticleListing';
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

        <Accordion title="Liste des articles" rowContent={<ArticleListing />} />

        <Accordion
          title=" &#33; &#128525; Nos utilisateurs ont testé "
          rowContent={<PicTest />}
        />

        <Accordion
          title="&#33; &#128591; Conseils de nos utilisateurs "
          columnContent={<Tips />}
        />
      </article>
    </SDiyItem>
  );
}
export default DiyItem;
