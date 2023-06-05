import React from 'react';
import '../ProfileInfo/ProfileInfo.css';

class ProfileStatus extends React.Component  {
    state = {
        editMode: false
    }

    activateEditMode() {
   this.setState({
    editMode: true
   });
    }
    deactivateEditMode() {
        this.setState({
         editMode: false
        });
         }

    render() {
    return (
        <div className='profile-status'>
        {!this.state.editMode &&
            <span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
        }
        {this.state.editMode &&
            <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode.bind(this)}/>
        }
        </div>
        
    );
}
}

export default ProfileStatus;