import styled from 'styled-components';

const SDiyItem = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  text-align: center;
  margin-bottom: 30px;
  overflow: hidden;

  //BALISES CSS

  article {
    /* border: solid 2px #a7a7a7;
    border-top-left-radius: 20% 15%;
    border-top-right-radius: 20% 15%;
    border-bottom-left-radius: 20% 15%;
    border-bottom-right-radius: 20% 15%; */
    color: #0c193a;
    width: 100vw;
    /* margin: 50px auto 0; */
    font-size: 17px;
    line-height: 28px;
    box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  h1 {
    width: 80vw;
    margin-left: 35px;
    padding: 10px 0 0 0;
    height: 70px;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    text-align: center;
    font-weight: 700;
  }
  h3 {
    background-color: #0c193a;
    color: white;
    font-family: 'Open Sans', sans-serif;
  }
  button {
    background-color: none;
    border: none;
    width: 100%;
  }

  //-----------------------------------------------------------------------------ClassName CSS
  .logo {
    height: 30px;
    margin-right: 220px;
  }
  .imgContainer {
    margin: 0 0 30px 0;
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

  //------------------------------------------------------------------------------ROLLER ANIMATION
  .load {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }

  /* Paint */

  .paint {
    width: 100%;
    position: absolute;
    overflow: hidden;
    animation: animate-paint 3s ease-in-out 1;
    background-color: #ff912a;
  }

  /* Roller */

  .roller {
    position: absolute;
    width: 361px;
    height: 161px;
    animation: animate-roller 2s ease-in-out 1;
    z-index: 3;
    top: 65%;
    left: -75%;
  }

  .roller-top {
    position: absolute;
    height: 60px;
    width: 60px;
    border-left: 5px solid #666666;
    border-bottom: 5px solid #666666;
    border-right: 5px solid #666666;
    top: 96px;
    left: 31px;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
  }

  .roller-top:before {
    position: absolute;
    content: '';
    background-color: #666666;
    width: 25px;
    height: 153px;
    border-radius: 5px;
    left: -14px;
    top: -96px;
  }

  .roller-top:after {
    content: '';
    position: absolute;
    height: 135px;
    width: 60px;
    background-color: #fcf4e9;
    border-radius: 10%;
    top: -92px;
    left: -36px;
    border: 5px solid #f1e7da;
  }

  .roller-handle {
    position: absolute;
    width: 60px;
    height: 40px;
    border-top: 5px solid #666666;
    border-left: 5px solid #666666;
    border-top-left-radius: 30px;
    top: 70px;
    left: 96px;
  }

  .roller-handle:before {
    position: absolute;
    content: '';
    width: 100px;
    height: 40px;
    background-color: #999999;
    border: 5px solid #666666;
    left: 50px;
    top: -27px;
    border-radius: 10%;
  }

  .roller-handle:after {
    position: absolute;
    content: '';
    width: 80px;
    height: 40px;
    background-color: sandybrown;
    border: 5px solid #a6593b;
    left: 60px;
    top: -27px;
    border-radius: 5%;
  }

  /* Animations */

  @keyframes animate-paint {
    0% {
      background-color: #ffa149;
      color: #1f3e8f;
      width: 100%;
    }
    100% {
      background-color: #ff912a;
      color: #0c193a;
      width: 100%;
    }
  }

  @keyframes animate-roller {
    0% {
      height: 90px;
      background-color: white;
      width: 3000px;
      left: -200px;
    }
    100% {
      height: 90px;
      left: 100%;
      background-color: white;
      width: 3000px;
    }
  }
  //------------------------------------------TAPE

  .tape {
    background-color: hsla(0, 0%, 100%, 0.2);
    box-shadow: inset 0 0 1em 0.5em hsla(0, 0%, 100%, 0.1);
    height: 3em;
    position: absolute;
    transform: rotate(-30deg);
    width: 9em;
    -webkit-filter: drop-shadow(0 1px 1px hsla(0, 0%, 0%, 0.3));
  }
  .tape:after,
  .tape:before {
    background-size: 0.4em 0.4em;
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: 0.2em;
  }
  .tape:after {
    background-image: linear-gradient(
        45deg,
        transparent 50%,
        hsla(0, 0%, 100%, 0.3) 50%
      ),
      linear-gradient(-45deg, transparent 50%, hsla(0, 0%, 100%, 0.3) 50%);
    background-position: 0 100%;
    left: -0.2em;
  }
  .tape:before {
    background-image: linear-gradient(
        135deg,
        transparent 50%,
        hsla(0, 0%, 100%, 0.3) 50%
      ),
      linear-gradient(-135deg, transparent 50%, hsla(0, 0%, 100%, 0.3) 50%);
    background-position: 100% 100%;
    right: -0.2em;
  }
`;

export default SDiyItem;
