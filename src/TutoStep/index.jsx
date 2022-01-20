import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import youtubeLogo from 'assets/youtubeLogo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import axios from 'axios';
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
          <a href={tutoInfos.video}>
            <img className="youtubeLogo" src={youtubeLogo} alt="" />
            Notre vidéo tuto ici !
          </a>
          <Swiper slidesPerView={1} spaceBetween={10} className="mySwiper">
            {stepInfos.map((info) => {
              return (
                <SwiperSlide key={info.numero} style={{ height: '280px' }}>
                  <div className="tutoWrapper">
                    <section className="infoTutos">
                      <span id="numero">Etape {info.numero}</span>
                      <p id="description">{info.description}</p>
                    </section>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </STutoAndStep>
      ) : (
        ''
      )}
    </>
  );
}

export default TutoStep;
