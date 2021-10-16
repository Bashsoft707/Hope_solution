import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import CoursePage from './Pages/CoursePage/CoursePage';
import Main from './Pages/Main/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route exact path='/' component={Main} />
          <Route exact path='course' component={CoursePage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;