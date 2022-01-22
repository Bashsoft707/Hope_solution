import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import CoursePage from './Pages/CoursePage/CoursePage';
import Main from './Pages/Main/Main';
import Notes from './Pages/Notes/Notes'
import News from './Pages/News/News';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Route exact path='/' component={Main} />
          <Route exact path='/coursePage' component={CoursePage} />
          <Route exact path='/notes' component={Notes} />
          <Route exact path='/news' component={News} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;