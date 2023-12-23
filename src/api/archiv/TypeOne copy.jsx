import React, { useState, useEffect } from "react";

const TypeOne = ({ typeOne, id, goToInsertMode, updateType }) => {
  let [editMode, setEditMode] = useState(false);
  let [newType, setType] = useState(typeOne);
  useEffect(() => {
    setType(typeOne);
  }, [typeOne]);

  const activateEditMode = () => {
    setEditMode(true);
    console.log(typeOne.id);
  };
  // const deactivateEditMode = () => {
  //   setEditMode(false);
  //   console.log(newType, typeOne.id);
  //   // updateType(newName, type.id);
  // };

  // const onTypeChange = (e) => {
  //   setType(e.currentTarget.value);
  // };

  const onSubmit = (formData) => {
    console.log(formData);
    // setEditMode(false);
    updateType(formData).then(() => {
      setEditMode(false);
    });
  };
  const goToEditMode = () => {
    setEditMode(true);

    // document.addEventListener("click", (e) => console.log(e.target.value));
  };

  return (
    <div>
      {!editMode && (
        <div>
          <button onClick={goToEditMode}>
            Type {typeOne.id}: {typeOne.name}
          </button>
        </div>
      )}
      {editMode && (
        <div>
          (if )
          <TypeEdit
            // typeOne={typeOne}
            // name={typeOne.name}
            id={typeOne.id}
            onSubmit={onSubmit}

            //  updateType={props.updateType}
          />
        </div>
      )}
    </div>
  );
};

export default TypeOne;
