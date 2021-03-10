import logo from './logo.svg';
import MainContainer from './Containers/MainContainer'
import LogInComponent from './Components/LogInComponent'
import SignUpComponent from './Components/SignUpComponent'
import GroupContainer from './Containers/GroupContainer'
import NavComponent from './Components/NavComponent'

//React Router
import {Route,Switch} from 'react-router-dom'
import './App.css';



function App() {
  return (
    <div className="App">
      <NavComponent />
      <Switch>
            <Route path="/" exact component={MainContainer} />
            <Route path="/login" component={LogInComponent}/>
            <Route path="/signup" component={SignUpComponent}/>
            <Route path="/groups" exact component={GroupContainer}/>
        </Switch>
    </div>
  );
}

export default App;
