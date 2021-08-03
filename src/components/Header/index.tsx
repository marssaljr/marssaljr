import './style.css'
import styled from 'styled-components';

const Head = styled.header`
  box-sizing: border-box;
  background: var(--clr-dark);
  color: var(--clr-white);
  box-shadow: 0px .5px 0px 0px #353941;
  -webkit-box-shadow: 0px .5px 0px 0px #353941;
  -moz-box-shadow: 0px .5px 0px 0px #353941;
  width: 100%;
  height: 4.5em;

  nav {
    padding: 0 auto;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  i {
  font-weight: bold;
  }

  li {
    margin: 5px;
  }

  img {
    background:var(--clr-background);
    border: solid var(--clr-background) 2px;
    border-radius: 10px;
    font-size: 16px;
    margin: 0em;
    width: 4em;
    height: 4em;
  }

  ul {
    display: flex;
    gap: 10px;
    margin: 20px;
    list-style: none;
  }

  a {
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    color: var(--clr-white);
    padding: 0;
  }
  a:hover {
    color: var(--clr-primary);
  }
  @media (orientation: landscape) {
	img {
		width: 3em;
    height: 3em;
    margin: .5em;
	}
  a {
    font-size: 16px;
  }
`;

function Header() {
  return (
    <Head>
      <nav>
        <div>
          <a href="/">
            <img src="https://github.com/marssaljr.png" alt="MJ"/>
          </a>
        </div>
        <div>
          <ul>
            <li><i><a className="devicon-github-original" href="https://github.com/marssaljr" target="_blank" rel="noreferrer"/></i></li>
            <li><i><a className="ri-discord-fill" href="https://discords.com/bio/p/marssal" target="_blank" rel="noreferrer"/></i></li>
            <li><i><a className="devicon-twitter-original" href="https://twitter.com/marssaljr" target="_blank" rel="noreferrer"/></i></li>
            <li><i><a className="devicon-linkedin-plain" href="https://linkedin.com/in/marssaljr" target="_blank" rel="noreferrer"/></i></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </Head>
  );
}

export default Header;
