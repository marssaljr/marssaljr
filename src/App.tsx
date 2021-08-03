import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Typist from 'react-typist';
import Header from './components/Header';
import Language from './routes/Languages';
import './styles.css';

const Stack = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: center;


  .active {
    color: var(--clr-primary);
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  @media (min-width: 1024px)
  {
		font-size: 1.5em;
	}
}
  
`;

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <div className="titles">
            <div className="title-text">
              <p className="about">I Build what you <strong>Need</strong></p>
              <h1>Marçal Junior</h1>
              <Typist className="text"><p>FullStack Web Developer</p><Typist.Delay ms={500} />
              Click on the <strong>Blue</strong> to see Projects.
              </Typist>
            </div>
          </div>
            <Stack>
              <ul>
                <li><Link className="devicon-javascript-plain active" to='/js'/></li>
                <li><Link className="devicon-typescript-plain active" to='/ts'/></li>
                <li><Link className="devicon-python-plain active" to='/py'/></li>
                <li><Link className="devicon-react-plain" to="/"/></li>
                <li><Link className="devicon-vuejs-plain active" to='/vue'/></li>
                <li><Link className="devicon-nodejs-plain active" to="/js"/></li>
                <li><Link className="devicon-go-plain active" to='/go'/></li>
                <li><Link className="devicon-html5-plain active" to='/html'/></li>
                <li><Link className="devicon-bash-plain active" to='/bash'/></li>
                <li><Link className="devicon-git-plain active" to='/others'/></li>
                <li><Link className="devicon-postgresql-plain" to='/'/></li>
                <li><Link className="devicon-docker-plain" to='/'/></li>
              </ul>
            </Stack>
          
          <div className='container'>
            <Switch>              
              <Route exact path='/js' render={(props) => <Language {...props} lang={'JavaScript'} />} /> 
              <Route exact path='/ts' render={(props) => <Language {...props} lang={'TypeScript'} />} /> 
              <Route exact path='/py' render={(props) => <Language {...props} lang={'Python'} />} /> 
              <Route exact path='/go' render={(props) => <Language {...props} lang={'Go'} />} /> 
              <Route exact path='/vue' render={(props) => <Language {...props} lang={'Vue'} />} /> 
              <Route exact path='/html' render={(props) => <Language {...props} lang={'HTML'} />} /> 
              <Route exact path='/bash' render={(props) => <Language {...props} lang={'Shell'} />} />
              <Route exact path='/others' render={(props) => <Language {...props} lang={''} />} />
            </Switch>
         </div>
        </div>
      </Router>
    </>
  );
}

export default App;

