import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, editSmurf } from '../../actions';
import SmurfForm from '../../components/SmurfForm';

const EditSmurf = ({smurfs, ...props}) => {
  const id = parseInt(props.match.params.id, 10);
  const smurf = smurfs.find(s => s.id === id);
  const performEditSmurf = (event, values) => {
    event.preventDefault();
    values.age = parseInt(values.age, 10);
    if (id && values.name !== "" && values.age && values.height !=="") {
      props.editSmurf({...values, id: id})
        .then(() => props.history.push("/"));
    }
  };
  return (
    <div>
      <h1>Edit Smurf</h1>
      <SmurfForm onSubmit={performEditSmurf} initialValues={smurf} buttonText="Edit Smurf"/>
    </div>
  );
};

const mapStateToProps = ({smurfs}) => ({smurfs});

export default connect(mapStateToProps, { getSmurfs, editSmurf })(EditSmurf);
