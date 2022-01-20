import styled from 'styled-components';

const SPicTest = styled.section`
  .swiper-container {
    width: 100%;
    height: 300px;
    background: #fcf0ce;
    padding: 10px;
  }
  .swiper-pagination {
    bottom: 0px;
  }
  .swiper-slide {
    height: 287px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    border-radius: 30px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        margin-bottom: 30px;
        font-size: 1rem;
        font-weight: 600;
        color: #424242;
      }
      img {
        display: block;
        width: 90%;
        height: 70%;
        object-fit: cover;
        border-radius: 25px;
        margin: 0 auto;
      }
    }
  }

  span {
    background: orange;
  }
`;

export default SPicTest;
