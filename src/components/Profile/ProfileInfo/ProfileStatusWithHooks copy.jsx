import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  // let stateWithSetState = useState(true);
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  // debugger;
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];
  const activateEditMode = () => {
    //this.setState({ editMode: true });
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    //   this.setState({ ed itMode: false });

    //   this.props.updateStatus(this.state.status);
    setEditMode(false);

    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            Status1 {props.status || "--------"} Hoho
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <div>СТАТУС</div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

// state = {
//   editMode: false,

//   status: this.props.status,
// };
// activateEditMode = () => {
//   this.setState({ editMode: true });
// };
// deactivateEditMode = () => {
//   this.setState({ editMode: false });

//   this.props.updateStatus(this.state.status);
// };

// onStatusChange = (e) => {
//   this.setState({
//     status: e.currentTarget.value,
//   });
// };

// componentDidUpdate(prevProps, prevState) {
//   if (prevProps.status !== this.props.status) {
//     this.setState({
//       status: this.props.status,
//     });
//   }
//   console.log("componentDidUpdate");
// }
