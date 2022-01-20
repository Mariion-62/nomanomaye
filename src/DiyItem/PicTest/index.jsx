import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper';
import SPicTest from './style';

SwiperCore.use([Pagination]);

export default function PicTest() {
  const [pictures, setPictures] = useState([]);
  const id = 1;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}/pictures`)
      .then(({ data }) => {
        console.log(data);
        setPictures(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <SPicTest>
      <h3>Nos utilisateurs ont testé ! &#128525; </h3>
      {console.log(pictures)}
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {pictures.map((picture) => (
          <div className="mainContainer">
            <SwiperSlide key={picture.id}>
              <div>
                <img src={picture.picture} alt="Réalisation d'un utilisateur" />
                <p>{picture.username}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </SPicTest>
  );
}
