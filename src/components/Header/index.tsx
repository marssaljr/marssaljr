import styled from 'styled-components';

const Head = styled.header`
  margin: 0;
  padding: 0;
  top: 0;
  box-sizing: border-box;
  background: var(--clr-dark);
  color: var(--clr-white);
  box-shadow: rgb(53 57 65) 1px 1px 9px 1px;
  width: 100%;
  height: 5em;

  nav {
    padding: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  strong {
    display: none;
  }

  li {
    margin: 5px;
  }

  #profile-icon {
    background:var(--clr-background);
    border: solid var(--clr-background) 2px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: .5;
    width: 4em;
    height: 4em;
  }
  .icons {
    margin: 5px;
  }

  .social-icons {
    display: flex;
    gap: 10px;
    margin: 20px;
    list-style: none;
  }
  .social-icon {
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    color: var(--clr-white);
    padding: 0;
    font-weight: bold;
  }
  .social-icon:hover {
    color: var(--clr-primary);
  }
  @media (orientation: landscape) {
    width: 100%;
    #profile-icon {
      width: 3em;
      height: 3em;
      margin: .5em;
    }
  }
`;

function Header() {
  return (
    <Head>
      <nav>
          <div className="icons">
            <a href="/">
              <img id="profile-icon" src="https://github.com/marssaljr.png" alt="MJ"/>
            </a>
          </div>
          <div className="icons">
            <ul className="social-icons">
              <li><a className="devicon-github-original social-icon" href="https://github.com/marssaljr" target="_blank" rel="noreferrer"><strong>.</strong></a></li>
              <li><a className="ri-discord-fill social-icon" href="https://discords.com/bio/p/marssal" target="_blank" rel="noreferrer"><strong>.</strong></a></li>
              <li><a className="devicon-twitter-original social-icon" href="https://twitter.com/marssaljr" target="_blank" rel="noreferrer"><strong>.</strong></a></li>
              <li><a className="devicon-linkedin-plain social-icon" href="https://linkedin.com/in/marssaljr" target="_blank" rel="noreferrer"><strong>.</strong></a></li>
              <li></li>
            </ul>
          </div>
      </nav>
    </Head>
  );
}

export default Header;
