import React, { useState } from "react";
import s from "./Type.module.css";
import TypeDataForm from "./TypeDataForm";
import TypeData from "./TypeData";

const Type = (props) => {
  let [mode, setMode] = useState(false);

  const onSubmit = (formData) => {
    console.log(formData);

    props.insertType(formData).then(() => {
      setMode(false);
    });

    // props.updateType(formData).then(() => {
    //   setMode(false);

    // });
  };

  return (
    <div className={s.descriptionBlock}>
      {mode ? (
        <TypeDataForm onSubmit={onSubmit} />
      ) : (
        <TypeData
          type={props.type}
          updateType={props.updateType}
          goToInsertMode={() => {
            setMode(true);
          }}
        />
      )}
    </div>
  );
};

export default Type;
