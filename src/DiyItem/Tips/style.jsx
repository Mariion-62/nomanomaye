import styled from 'styled-components';

const STips = styled.section`
  p {
    background: #fcf0ce;
    padding: 10px;
    margin: 10px 30px;
    border-radius: 15px;
  }
  button {
    background: inherit;
    border: none;
    font-family: 'Open Sans', sans-serif;
    background-color: #c0640e;
    color: white;
    padding: 5px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    cursot: pointer;
  }
  form {
    margin-top: 35px;
    textarea {
      border: 2px solid grey;
      border-radius: 10px;
      padding: 5px;
      width: 67vw;
      outline: none;
    }
    input#tip {
      height: 200px;
      width: 70vw;
      border: none;
      background: #d8d8d8;
      margin: 20px;
      font-size: 1rem;
      font-family: 'Open Sans', sans-serif;
    }
    input.submit {
      background: inherit;
      border: none;
      font-family: 'Open Sans', sans-serif;
      background-color: #c0640e;
      color: white;
      padding: 5px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 10px;
    }
  }
`;

export default STips;
