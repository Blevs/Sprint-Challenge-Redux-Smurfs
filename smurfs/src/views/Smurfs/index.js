import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../../actions';

const Smurfs = ({smurfs, ...props}) => {
  useEffect(() => {props.getSmurfs();}, []);
  return (
    <div>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {smurfs.map(smurf => (
        <div key={smurf.id}>{smurf.name}, {smurf.age}, {smurf.height}</div>
      ))}
    </div>
  );
};

const mapStateToProps = ({smurfs}) => ({smurfs});

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
