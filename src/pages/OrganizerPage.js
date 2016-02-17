import React, {Component, PropTypes} from 'react';
import OrganizerContainer from '../containers/OrganizerContainer';

class OrganizerPage extends Component {
  render() {

    const {id} = this.props.params;

    return(
      <div className="row">
        <OrganizerContainer id={id}/>
      </div>
    )
  }
}

export default OrganizerPage;
