import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'yo'
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        }) 
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        }) 
    }

    render () {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactiveEditMode} value={this.props.status}></input>
                    </div>
                }
            </div>
          )
      }
    }
  
export default ProfileStatus