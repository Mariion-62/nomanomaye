import { Link } from 'react-router-dom';
import buffet from '../buffetDeco.jpg';
import logo from '../assets/logoManoMano.png';
import SDiyPage from './style';

function DiyPage() {
  return (
    <SDiyPage>
      <img className="logo" src={logo} alt="logo" />
      <h1>Nos inspirations</h1>
      <Link to="/details">
        <div>
          <img src={buffet} alt="" />
        </div>
      </Link>
    </SDiyPage>
  );
}

export default DiyPage;
