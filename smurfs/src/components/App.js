import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Smurfs from '../views/Smurfs';
import AddSmurf from '../views/AddSmurf';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = (props) => {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">Village</NavLink>
        <NavLink to="/add">Add Smurf</NavLink>
      </nav>
      <Route exact path="/" component={Smurfs} />
      <Route path="/add" component={AddSmurf} />
    </div>
  );
};

export default App;
