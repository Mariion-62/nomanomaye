import styled from 'styled-components';

const STutoAndStep = styled.section`
  .tutoWrapper {
    display: flex;
    justify-content: center;
  }
  .infoTutos {
    height: 280px;
    width: 80%;
    border-radius: 40px;
    background-color: #fcf0ce;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px 0 10px;
  }
  span {
    font-size: 20px;
  }
  p {
    margin: 20px 10px 20px 0;
    font-size: 20px;
    font-weight: 300;
    text-align: start;
  }
  #description {
    font-size: 22px;
  }
  .youtubeLogo {
    width: 80px;
  }
  a {
    color: #0c193a;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-bottom: 20px;
  }
`;

export default STutoAndStep;
