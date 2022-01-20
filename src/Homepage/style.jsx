import styled from 'styled-components';

const SHome = styled.header`
  font-family: 'system-ui';

  .headHomepage {
    display: flex;
    margin: 10px;
    justify-content: space-between;
  }

  .logo {
    height: 30px;
  }

  .identifyCart {
    display: flex;
  }

  .identify {
    font-size: 15px;
    padding: 5px;
    justify-content: center;
    color: #505971;
    font-weight: 450;
  }

  .cart {
    height: 20px;
    margin: 5px;
  }

  .menuSearch {
    display: flex;
    margin: 10px;
  }
  .menuBurger {
    height: 20px;
    padding: 10px;
  }

  .wrap {
    position: relative;
    width: 60%;
  }

  .loupe {
    width: 4vw;
    position: absolute;
    background-color: transparent;
    top: 50%;
    left: 37vh;
    transform: translate(-50%, -50%);
  }

  .searchBar {
    width: 75vw;
    height: 5vh;
    border: 1px solid lightgrey;
    font-size: 13px;
    border-radius: 20px;
    color: #fff;
    padding-left: 4vh;
  }

  .navBar {
    display: flex;
    justify-content: space-around;
    margin-left: 5px;
    margin-right: 5px;
  }

  h3 {
    font-size: 12px;
    padding: 5px;
    color: #1e3c87;
  }

  h3:hover {
    color: black;
    font-weight: bolder;
    text-decoration: underline;
  }

  .inspiration {
    width: 100%;
    padding-top: 5px;
  }

  .selectionHome {
    justify-content: center;
    width: 50%;
  }

  .headSelect {
    display: flex;
  }

  .arrow {
    height: 5vh;
    padding: 15px;
    padding-left: 50px;
  }

  .selectSection {
    background-color: #f5f5f5;
  }

  h2 {
    padding: 10px;
    font-size: 20px;
    color: #0c193a;
    font-weight: bolder;
  }

  p {
    padding: 10px;
    font-size: 14px;
    color: #505971;
  }
`;

export default SHome;
