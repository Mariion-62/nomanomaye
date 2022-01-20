import { Routes, Route } from 'react-router-dom';
import Homepage from 'Homepage';
import DiyItem from 'DiyItem';
import DiyPage from './DiyPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nosInspirations" element={<DiyPage />} />
        <Route path="/details" element={<DiyItem />} />
      </Routes>
    </>
  );
}

export default App;
