import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions';
import SmurfForm from  '../../components/SmurfForm';

const AddSmurf = (props) => {
  const performAddSmurf = (event, values) => {
    event.preventDefault();
    values.age = parseInt(values.age, 10);
    if (values.name !== "" && values.age && values.height !=="") {
      props.addSmurf(values)
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
