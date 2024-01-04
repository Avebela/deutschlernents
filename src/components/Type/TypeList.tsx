import React from "react";
import TypeItem from "./TypeItem";
import { useAppSelector } from "../../hooks/hook";

const TypeList: React.FC = () => {
  const types = useAppSelector((state) => state.types.list);
  return (
    <ul>
      {types.map((type) => (
        <TypeItem key={type.id} {...type} />
      ))}
    </ul>
  );
};

export default TypeList;
