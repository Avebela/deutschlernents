import React from "react";
import { createField } from "../../Commen/FormControls/FormControls";
import { reduxForm, Field } from "redux-form";
import s from "./ProfileInfo.module.css";
import sf from "../../Commen/FormControls/FormControls.module.css";
import { Input, Textarea } from "../../Commen/FormControls/FormControls";
const ProfileDataForm = ({ handleSubmit, userProfile, error }) => {
  // , userProfile
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => {}}>save</button>
        {error && <div className={sf.formSummeryError}>{error}</div>}
      </div>

      <div>
        <b>Full name</b>:{createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills </b>:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me</b>:{createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(userProfile.contacts).map((key) => {
          return (
            <div className={s.contact} key={key}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
