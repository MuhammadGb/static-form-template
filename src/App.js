import './App.css';
import Signup from './components/Signup';
import Form_error from './components/Login';
import filledForm from './components/Filled_form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
                <Route exact path="/" component={Signup}/>
                <Route path="/form_error" component={Form_error}/>
                <Route path="/filled_form" component={filledForm}/>
            </Switch>
      </Router>
      </div>
  );
}

export default App;
