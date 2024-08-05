import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];
   
    // Смысл кода, что и вверху - деструктулизация
    let [editMode, setEditMode ] = useState(false);
    let [status, setStatus ] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

const activateEditMode = () => {
    setEditMode(true);
}

const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
}

const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
}

return (
    <div>
{ !editMode &&
    <div>
        <span onDoubleClick= { activateEditMode }>{props.status || "-----"}</span>
    </div>
}
{ editMode &&
<div>
    <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode }
    value = {status} />
    </div>
    }
    </div>
)
}
   
   
//     activateEditMode = ()=> { 
//         this.setState( {
//             editMode: true
//         })
//        }
//        deactivateEditMode = () => { 
//         this.setState( {
//             editMode: false
//         });
//         this.props.updateStatus(this.state.status);
//        }

//        onStatusChange = (e) => {
//        this.setState({
//         status: e.currentTarget.value
//        })
//        }

//        componentDidUpdate(prevProps, prevState) {
//        if (prevProps.status !== this.props.status) {
//         this.setState ({
//             status:this.props.status
//         });
//        }

// console.log("componentDidUpdate")
//        }

//  render() {
//     console.log("render")
//     return (
//         <div>
//             {!this.state.editMode &&
//             <div>
//                 <span onDoubleClick={ this.activateEditMode }>{this.props.status || "------"}</span>
//             </div>
// }
// {this.state.editMode &&
//             <div>
//                 <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} 
//                 value={this.state.status} />
//             </div>
// }
//         </div>
//     )
// }
// }

export default ProfileStatusWithHooks