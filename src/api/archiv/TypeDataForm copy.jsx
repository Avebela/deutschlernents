import React from "react";
import { createField } from "../Commen/FormControls/FormControls";
import { reduxForm, Field } from "redux-form";
import s from "./Type.module.css";
import sf from "../Commen/FormControls/FormControls.module.css";
import { Input } from "../Commen/FormControls/FormControls";
const TypeDataForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => {}}>save</button>
        {/* // {error && <div className={sf.formSummeryError}>{error}</div>} */}
      </div>

      <div>
        <b>name</b>:{createField("name", "name", [], Input)}
      </div>
    </form>
  );
};

const TypeDataFormReduxForm = reduxForm({ form: "edit-type" })(TypeDataForm);
export default TypeDataFormReduxForm;
