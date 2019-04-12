import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../../actions';
import { Link } from 'react-router-dom';

const Smurfs = ({smurfs, ...props}) => {
  useEffect(() => {props.getSmurfs();}, []);
  return (
    <div>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {smurfs.map(smurf => (
        <div key={smurf.id}>{smurf.name}, {smurf.age}, {smurf.height}
          <Link to={"/edit/" + smurf.id}>Edit</Link>
          <span onClick={() => props.deleteSmurf(smurf.id)}>&times;</span></div>
      ))}
    </div>
  );
};

const mapStateToProps = ({smurfs}) => ({smurfs});

export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(Smurfs);
