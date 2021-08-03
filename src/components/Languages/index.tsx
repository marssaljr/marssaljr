import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = styled.main`
  display: grid;
  grid-template-column: 10% 1fr 10%;
`;
const Grid = styled.div`
  box-sizing: border-box;
  :root {
    --clr-background: #353941;
    --clr-dark-light: #68686f;
    --clr-dark: #26282B;
    --clr-primary: #5F85DB;
    --clr-light: #90b8f8;
    --clr-white: #DEEEEA;
  }
  background: var(--clr-dark-light);
  border-radius: .3em;
  
  
  gap: 0;
  margin: 0 auto;
  padding: 1em;
  
  .grid {
    display: grid;
    grid-template-rows: 1fr;
  }
  .grid-item {
    max-width: 500px;
    color: var(--clr-white);
    background: var(--clr-background);
    border-radius: .3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    gap: 0;
    align-items: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
  }
  .grid-item:hover {
    box-shadow: 2px 2px 4px var(--clr-white);
  }
  .grid-item .title {
    font-weight: bold;
    padding: 10px;
    margin: 5px;
  }
  .grid-item .description {
    margin: 5px;
  }
  .grid-item .description a {
    font-size: 16px;
  }
  
  img {
    display: block;
    max-width: 200px;
    max-height: 200px;
    margin: 0 auto;
    border-radius: 0 0 .3em .3em;
  }
  .wrapper {
    display: grid;
    row-gap: 2px;
  }
  @media (min-width: 600px)
  {
  img
   {
    max-width: 400px;
   }
  p {
    font-size: 1.3em;
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
      <Grid className="content">
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
                    <img src={`${baseUrl}${repo["name"]}/main/.github/app.png`} alt={repo["name"]}/>
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
    </Grid>
    </Main>
  );
}

export default Language;
