import React from "react";
import s from "./FormControls.module.css";
import { Field } from "redux-form";

export const FormControl = ({
  input,
  meta: { touched, error },

  children,
  //...props
}) => {
  //const hasError = meta.touched && meta.error;
  const hasError = touched && error;
  // = (props) нужно использовать рест оператор { input, meta, ...props }
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {/* // <div className={s.formControl + " " + s.error}> */}

      <div>{children}</div>
      {hasError && <span>{error}</span>}
      {/* {hasError && <span>{"some error"}</span>} */}
      {/* <span>{"some error"}</span> */}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
  //value = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      //  value={value}
      {...props}
    />
    {text}
  </div>
);
