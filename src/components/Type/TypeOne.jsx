import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

const TypeOne = ({ typeOne }) => {
  return (
    <div>
      <li>
        {/* //<NavLink to={"/type/" + typeOne.id}> */}
        <NavLink to={`/type/${typeOne.id}?name=${typeOne.name}`}>
          {/* //  "/type/:id?name=${name}" */}
          <button>Update Type</button>
        </NavLink>
        ___{typeOne.id}: {typeOne.name}
      </li>
    </div>
  );
};

export default TypeOne;
