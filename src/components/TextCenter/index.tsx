import Typist from 'react-typist';
import styled from 'styled-components';

const Titles = styled.div`
  display: flex;
	justify-content:center;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;

  .title-text {
    display: flex;
    justify-content:center;
    flex-direction: column;
    padding-bottom: 3rem;
    padding-top: 9rem;

    h1 {
	    font-size: 64px;
    }
    .about, .text {
      color: var(--clr-gray);
      padding-left: 20px;
      font-size: 28px;
    }
    strong {
      background-color:  var(--clr-primary);
      font-style: italic;
    }
  }
  @media (max-width: 600px)
  {
    h1
    {
      font-size: 50px;
    }
    .about .text {
      font-size: 1.3em;
    }
  }

  @media (max-width: 400px)
  {
    h1
    {
      font-size: 30px;
    }
    .about .text {
      font-size: 1em;
    }
    .stack {
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-gap: 5px;
    }
  }
  @media (max-width: 300px)
  {
    h1
    {
      padding-left: 20px;
      font-size: 1.3em;
    }
  }

  @media (min-width: 1024px)
  {
    h1
    {
      font-size: 5em;
    }
    .about .text {
      font-size: 2.5em;
    }
  }
  @media (max-width: 1024px) and (orientation: landscape) {
    .title-text {
      padding: 1em;
    }
    .about .text {
      font-size: 20px;
    }
    h1
    {
      padding-left: 20px;
      font-size: 1.6em;
    }
  }
`;

function TextCenter() {
  return (
  <Titles>
    <div className="title-text">
      <p className="about">I Build what you <strong>Need</strong></p>
      <h1>Marçal Junior</h1>
      <Typist className="text"><p>FullStack Web Developer</p><Typist.Delay ms={500} />
      Click on the <strong>Blue</strong> to see Projects.
      </Typist>
    </div>
  </Titles>
  )
}

export default TextCenter;