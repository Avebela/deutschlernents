import React, { useState, useEffect } from "react";
import s from "./Type.module.css";
import TypeOne from "./TypeOne";

const TypeData = (props) => {
  return (
    <div>
      <div>
        <button onClick={props.goToInsertMode}>Insert Type</button>
      </div>

      <div>All Types</div>

      <div>
        {props.type.map((u) => (
          <TypeOne
            typeOne={u}
            id={u.id}
            name={u.name}
            key={u.id}
            //  onSubmit={onSubmit}
            goToInsertMode={props.goToInsertMode}
            updateType={props.updateType}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeData;
