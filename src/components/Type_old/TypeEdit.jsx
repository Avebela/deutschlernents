import React, { useEffect } from "react";
import { createField } from "../Commen/FormControls/FormControls";
import { reduxForm } from "redux-form";
import s from "./Type.module.css";
import { insertType, getTypeOne } from "../../redux/type-reducer";
import { Input } from "../Commen/FormControls/FormControls";
import { connect } from "react-redux";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import withRouter from "../../WithRouter";
import { compose } from "redux";

const TypeEditForm = ({ handleSubmit, reset }) => {
  //const submit = (values) => console.log(values);  //{handleSubmit(submit)} // type="submit"
  return (
    <form onSubmit={handleSubmit}>
      <div>Update Type</div>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>
      <div>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div>
        <b>name</b>:{createField("name", "name", [], Input)}
        {/* <b>id</b>:
        {createField("id", "id", [], Input, {}, "не редактировать", "1111")} */}
      </div>
    </form>
  );
};

const TypeEditFormReduxForm = reduxForm({
  form: "typeEditForm",
  // имя формы в state (state.form.edittype)
})(TypeEditForm);

const TypeEdit = (props) => {
  console.log(useLocation());
  //let [mode, setMode] = useState(true);

  let { id } = useParams();
  //let typeId = props.type.id;
  // if (!typeId) {
  //   typeId = 10; //props.history.push("/type");
  //   //   //  userId = props.router.navigate("/login");
  // }
  console.log("typeId=" + id);
  useEffect(() => {
    console.log("typeId=" + id);

    // props.getTypeOne(typeId);
  }, [id]);

  const onSubmit = (formData) => {
    console.log(formData);
    // props.insertType(formData).then(() => {
    //  setMode(false);
    // });

    // props.updateType(formData).then(() => {
    //   setMode(false);

    // });
  };

  // if (mode) {
  //   return <Navigate to="/type" />;
  // }
  return (
    <div className={s.descriptionBlock}>
      <h1>Update</h1>
      ID типа = {id}
      {/* //  <TypeEditFormReduxForm onSubmit={onSubmit} /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  type: state.type.types,
});
export default compose(
  connect(mapStateToProps, { getTypeOne, insertType }),
  withRouter
)(TypeEdit);
