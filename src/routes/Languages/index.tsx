import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = styled.div`
  :root {
    --clr-background: #353941;
    --clr-dark-light: #68686f;
    --clr-dark: #26282B;
    --clr-primary: #5F85DB;
    --clr-light: #90b8f8;
    --clr-white: #DEEEEA;
  }
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-rows: auto;
  justify-content: center;
  box-sizing: border-box;
  border-radius: .3em;
  .grid {
    margin: 10px;
  }
  .grid-item {
    max-width: 500px;
    color: var(--clr-white);
    background: var(--clr-background);
    border-radius: .3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
    transition: 200ms all ease-in-out;
  }
  .grid-item:hover {
    box-shadow: #1f1f1f 8px 8px 8px;
  }
  .grid-item .title {
    font-weight: bold;
  }
  .grid-item .description {
    margin: 5px;
  }
  .grid-item .description a {
    text-decoration: none;
    color: var(--clr-light);
    font-size: 16px;
  }
  
  #banner {
    display: block;
    max-width: 200px;
    max-height: 200px;
    margin: 0 auto;
    border-radius:.3em;
    transition: 1s;
  }
  #banner:hover {
    transform: scale(1.5);
    border-radius: .3em;
  }
  .content {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  @media (min-width: 600px)
  {
  #banner {
    max-width: 400px;
  }
}
`;

interface Props {
  lang: string;
}

function Language(props: Props) {
  const language = props.lang || null;
  const uri = "https://api.github.com/users/marssaljr/repos";
  //const ext = 'png' || 'jpg' || 'svg';
  const [repos, setRepos] = useState([]);
  const baseUrl = 'https://raw.githubusercontent.com/marssaljr/'
  
  const fetchData = async () => {
    const { data } = await axios.get(`${uri}`);
    setRepos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Main>
      {repos.length > 0 ? (
        <div className="wrapper">
          {repos.map((repo) => (
            <div className="grid">
              {repo["language"] === language ? (
                <div className="grid-item">
                  <div className="title">
                  {repo["name"]}
                  </div>
                  <div className="banner">
                    <img id="banner" src={`${baseUrl}${repo["name"]}/main/.github/app.png`} alt={repo["name"]}/>
                  </div>
                  <div className="description">
                    <a href={`${repo["html_url"]}`}>{repo["description"]}</a>
                  </div>
                </div>

                ):
                  <p className="loading" style={{ display: 'none' }}>... </p>
                }
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">... </p>
      )}
    </Main>
  );
}

export default Language;
