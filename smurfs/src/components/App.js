import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  addSmurf = (event) => {
    event.persist();
    event.preventDefault();
    const name = event.target.name.value.trim();
    const age = parseInt(event.target.age.value, 10);
    const height = event.target.height.value.trim();
    if (name !== "" && age && height !=="") {
      this.props.addSmurf({name, age, height});
    }
  };
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => <div key={smurf.id}>{smurf.name}</div>)}
        <form onSubmit={this.addSmurf}>
          <input type="text" name="name" placeholder="name" />
          <input type="number" name="age" placeholder="age" />
          <input type="text" name="height" placeholder="height" />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({gettingSmurfs, smurfs}) => ({ gettingSmurfs, smurfs });

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
