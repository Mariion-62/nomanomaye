import { Routes, Route } from 'react-router-dom';
import Homepage from 'Homepage';
import DiyItem from 'DiyItem';
import DiyPage from './DiyPage';

function App() {
  return (
    <>
      <Homepage />
      <Routes>
        <Route path="/" element="" />
        <Route path="/nosInspirations" element={<DiyPage />} />
        <Route path="/details" element={<DiyItem />} />
      </Routes>
    </>
  );
}

export default App;
