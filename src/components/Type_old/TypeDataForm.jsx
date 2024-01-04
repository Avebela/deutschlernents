import React from "react";
import { createField } from "../Commen/FormControls/FormControls";
import { reduxForm } from "redux-form";

import sf from "../Commen/FormControls/FormControls.module.css";
import { Input } from "../Commen/FormControls/FormControls";
const TypeDataForm = ({ handleSubmit, error, reset }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => {}}>save</button>
        {error && <div className={sf.formSummeryError}>{error}</div>}
      </div>
      <div>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div>
        <b>name</b>:{createField("name", "name", [], Input)}
        {/* <b>id</b>:{createField("id", "id", [], Input)} */}
      </div>
    </form>
  );
};

const TypeDataFormReduxForm = reduxForm({ form: "typeDataForm" })(TypeDataForm);
export default TypeDataFormReduxForm;
