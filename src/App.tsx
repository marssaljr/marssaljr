import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Stack from './components/Stack';
import TextCenter from './components/TextCenter';
import Language from './routes/Languages';
import './styles.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <TextCenter/>
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

