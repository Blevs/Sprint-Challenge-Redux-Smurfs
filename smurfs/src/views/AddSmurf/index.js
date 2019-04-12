import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';
import SmurfForm from  '../../components/SmurfForm';

const AddSmurf = (props) => {
  const performAddSmurf = (event) => {
    event.persist();
    event.preventDefault();
    const name = event.target.name.value.trim();
    const age = parseInt(event.target.age.value, 10);
    const height = event.target.height.value.trim();
    if (name !== "" && age && height !=="") {
      props.addSmurf({name, age, height})
        .then(() => props.history.push("/"));
    }
  };
  return (
    <div>
      <h1>Add Smurf</h1>
      <SmurfForm onSubmit={performAddSmurf} buttonText="Add Smurf"/>
    </div>
  );
};

const mapStateToProps = ({addingSmurf}) => ({addingSmurf});

export default connect(mapStateToProps, { addSmurf })(AddSmurf);
