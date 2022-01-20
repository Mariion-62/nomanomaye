import styled from 'styled-components';

const SAccordion = styled.div`
  .cubeTitle {
    letter-spacing: 2px;
    overflow: hidden;
  }

  .content {
    color: #14685b;
    visibility: hidden;
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 1rem;
    transition: all 0.1s ease-in;
  }

  .active .content {
    visibility: visible;
    height: auto;
    overflow: visible;
    padding: 1rem;
    opacity: 1;
    font-size: 22px;
    transition: all 0.4s ease-in;
    font-weight: 500;
  }

  .content2 {
    visibility: hidden;
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 1rem;
    transition: all 0.4s ease-in;
  }

  .active .content2 {
    visibility: visible;
    height: auto;
    overflow: visible;
    padding: 1rem;
    opacity: 1;
    font-family: 'Quicksand', sans-serif;
    font-size: 25px;
    transition: all 0.4s ease-in;
    font-weight: 500;
  }

  //Stylish the arrow later
  .cubeTitle:before {
    content: '';
    position: absolute;
  }

  .active .cubeTitle::before {
    top: 80%;
    left: -40%;
  }
`;

export default SAccordion;
