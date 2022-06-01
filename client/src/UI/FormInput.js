import React from "react";

const FormInput = (props) => {
  const {
    classBlock,
    classLabel,
    name,
    value,
    type,
    classInput,
    placeholder,
    onChange,
  } = props;

  return (
    <div className={classBlock}>
      <label className={classLabel}>
        {name}
        <input
          value={value}
          type={type}
          className={classInput}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
};

export default FormInput;
