import styled from 'styled-components';

const SDiyPage = styled.section`
  background-color: #f5f6f7;
  font-family: 'Open Sans', sans-serif;
  article {
    width: 95vw;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    text-align: center;
    color: black;
    text-decoration: underline;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 30px;
    margin: 30px 0 30px 0;
    width: 100%;
    padding: 20px;
    animation: typing 2s, blink 0.5s infinite alternate;
    white-space: nowrap;
    overflow: hidden;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    height: 30px;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .imgResults {
    width: 100%;
  }
  section {
    box-shadow: rgba(80, 78, 77, 0.13) 0px 10px 36px 0px,
      rgba(240, 143, 17, 0.445) 0px 0px 0px 1px;
    margin: 20px 0 20px 20px;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #0c193a;
    height: 100px;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    background-color: white;
    font-size: 20px;
    text-align: center;
  }
  span {
    font-weight: 200;
    margin-top: 5px;
    font-size: 15px;
  }
`;

export default SDiyPage;
