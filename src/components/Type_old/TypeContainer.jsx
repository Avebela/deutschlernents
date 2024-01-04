import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Type from "./Type";
import withRouter from "../../WithRouter";

import { useParams } from "react-router-dom";
import { getType, insertType, updateType } from "../../redux/type-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function TypeContainer(props) {
  useEffect(() => {
    props.getType();
  }, []);

  return (
    <div>
      <Type
        {...props}
        type={props.type}
        insertType={props.insertType}
        updateType={props.updateType}
      />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    type: state.type.types,
    //name: "Nika",
    //type: getType(state),
  };
};

export default compose(
  connect(mapStateToProps, { getType, insertType, updateType }),
  withRouter,
  withAuthRedirect
)(TypeContainer);
