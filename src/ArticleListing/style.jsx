import styled from 'styled-components';

const SArticleListing = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    background-color: lightgray;
    border-radius: 8px;
    overflow: auto;
  }

  .imgFlex {
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
  }

  .try {
    width: 90vw;
    align-items: center;
    display: flex;
    justify-content: space-around;
  }

  .imgArticle {
    width: 100px;
    height: 100px;
    border-radius: 80px;
    background-color: white;
    margin: 17px 27px;
  }

  .infoArticle {
    display: flex;
    align-items: center;
    width: 60vw;
  }

  .nameArticle {
    width: 100vw;
    font-size: 13px;
    display: flex;
    flex-wrap: wrap;
    line-height: 15px;
  }

  .priceArticle {
    font-size: 15px;
    width: 70vw;
    margin-right: 0;
    font-weight: bold;
  }

  .btnArticle {
    width: 35vw;
    height: 4vh;
    font-size: 18px;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #00e8cb;
    color: black;
  }

  button:hover {
    color: white;
    background-color: #1e3c87;
  }
`;

export default SArticleListing;
