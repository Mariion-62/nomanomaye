import styled from 'styled-components';

const SDiyItem = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  text-align: center;
  margin-bottom: 30px;

  //BALISES CSS

  article {
    border: solid 2px #a7a7a7;
    border-top-left-radius: 20% 15%;
    border-top-right-radius: 20% 15%;
    border-bottom-left-radius: 20% 15%;
    border-bottom-right-radius: 20% 15%;
    color: #0c193a;
    width: 90vw;
    margin: 50px auto 0;
    font-size: 17px;
    line-height: 28px;
    box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  h1 {
    margin: 0;
    padding: 10px 0 0 0;
    height: 70px;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    font-size: 20px;
    text-align: center;
    font-weight: 700;
    background-color: #ff912a;
  }
  h3 {
    font-family: 'Open Sans', sans-serif;
  }
  button {
    border: none;
    width: 100%;
  }

  //ClassName CSS

  .logo {
    height: 30px;
    margin-right: 220px;
  }
  .imgContainer {
    margin: 0 0 0 0;
    width: 80vw;
    height: auto;
    aspect-ratio: 1/1;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .articles {
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
`;

export default SDiyItem;
