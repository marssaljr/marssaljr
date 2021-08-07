import Typist from 'react-typist';
import styled from 'styled-components';
import './styles.css';

const Titles = styled.div`
  display: flex;
	justify-content:center;
  font-family: 'Roboto', sans-serif;

  .title-text {
    display: grid;
    grid-template-rows: 20% 50% 30%;
    justify-content:center;
    /*flex-direction: column;*/
    padding-bottom: 3rem;
    padding-top: 9rem;
    -webkit-box-pack: center;

    h1 {
      font-weight: black;
	    font-size: 64px;
    }
    .about, .text {
      font-weight: thin;
      color: var(--clr-gray);
      padding-left: 20px;
      font-size: 28px;
    }
    strong {
      background-color:  var(--clr-primary);
      font-style: italic;
    }
  }
`;

function TextCenter() {
  return (
  <Titles>
    <div className="title-text">
      <p className="about">I Build what you <strong>Need</strong></p>
      <h1>Marçal Junior</h1>
      <Typist className="text"><p>Software Developer</p><Typist.Delay ms={500} />
      Click on the <strong>Blue</strong> to see Projects.
      </Typist>
    </div>
  </Titles>
  )
}

export default TextCenter;
