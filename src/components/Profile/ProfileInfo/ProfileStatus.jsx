import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    // title: "Yo",
    status: this.props.status,
    //statusInputRef: React.createRef(),
  };
  activateEditMode = () => {
    //console.log(this.state.editMode);
    this.setState({ editMode: true });
    //console.log(this.state.editMode);
    // в консоль логе всегда одно и тоже значение false, т.к. фунция setState работает асинхронно,
    // сетстейт только получает задачу перерисовать стейт, потом, после окончания работы здесь, в этом методе
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    //this.props.updateStatus(this.statusInputRef.current.value);
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  // activateEditMode() {
  //   this.setState({ editMode: true });
  //   this.state.editMode = true;
  // this.forceUpdate();
  // }
  componentDidUpdate(prevProps, prevState) {
    // let a = this.state;
    // let b = this.props;
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span
              //   onDoubleClick={() => {

              //      this.activateEditMode.bind(this);
              //   }}
              // onDoubleClick={this.activateEditMode}
              onDoubleClick={this.activateEditMode}
            >
              {this.props.status || "--------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <div>СТАТУС</div>
            <input
              onChange={this.onStatusChange}
              //ref={this.statusInputRef}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              // onBlur={() => {

              //   // this.deactivateEditMode.bind(this);
              // }}
              //value={this.props.status}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

// const ProfileStatus = (props) => {
//   return (
//     <div>
//       <div>
//         <span>{props.status}</span>
//       </div>

//       <div>
//         <input value={props.status} />
//       </div>
//     </div>
//   );
// };
