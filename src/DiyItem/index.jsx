import PicTest from './PicTest';
import Tips from './Tips';
import SDiyItem from './style';
import buffet from '../buffetDeco.jpg';
import logo from '../assets/logoManoMano.png';

function DiyItem() {
  return (
    <SDiyItem>
      <img className="logo" src={logo} alt="logo" />
      <h1>Buffet de salle à manger scandinave</h1>
      <div className="imgContainer">
        <img src={buffet} alt="buffet" />
      </div>
      <section>
        <h3>Tutoriels et étapes</h3>
      </section>
      <section>
        <h3>Liste articles</h3>
      </section>
      <PicTest />
      <Tips />
    </SDiyItem>
  );
}

export default DiyItem;
