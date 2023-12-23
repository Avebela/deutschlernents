import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
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
            <b>Status</b>: {props.status || "--------"}
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
