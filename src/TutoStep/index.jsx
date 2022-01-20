import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import STutoAndStep from './style';

function TutoStep() {
  const { id } = useParams();
  const [idTuto, setIdTuto] = useState(0);
  const [tutoInfos, setTutoInfos] = useState([]);
  const [stepInfos, setStepInfos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/items/${id}`).then(({ data }) => {
      setIdTuto(data[0].tutoId);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/tutos/${idTuto}`).then(({ data }) => {
      setTutoInfos(data[0]);
    });
  }, [idTuto]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tutos/${idTuto}/steps`)
      .then(({ data }) => {
        setStepInfos(data);
      });
  }, [idTuto]);

  return (
    <>
      {tutoInfos && stepInfos ? (
        <STutoAndStep>
          <a href={tutoInfos.video}>Cliquez sur notre vidéo tuto</a>
          {stepInfos.map((info) => {
            return (
              <section className="infoTutos">
                <span>{info.numero}</span>
                <p>{info.description}</p>
              </section>
            );
          })}
        </STutoAndStep>
      ) : (
        ''
      )}
    </>
  );
}

export default TutoStep;
