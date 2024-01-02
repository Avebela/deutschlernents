import { useState } from "react";
export default function useInput(InitialValue) {
  const [value, setValue] = useState(InitialValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
}
