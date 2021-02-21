import './App.css';
import SignIn from './auth/signin/signin'
import SignUp from './auth/signup/signup'
import Dashboard from './components/dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path='/' exact render={() => (<SignIn />)} />
      <Route path='/signup' component={SignUp} />
      <Route path='/home' component={Dashboard} />
    </Router>
  );
}

export default App;
