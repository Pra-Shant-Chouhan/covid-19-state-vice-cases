import Header from './component/Header';
import Statecase from './component/Statecase';

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import GithubUsers from './component/GithubUsers';

function App() {
  return (
    <> <Router>
    <Header  />

    <Switch>
      <Route exact path="/" render={() => {
        return(
          <Statecase />)
      }}>
        
      </Route>
      <Route exact path="/githubusers">
        <GithubUsers/>
      </Route>

    </Switch>




  </Router>
      
    </>
  );
}

export default App;
