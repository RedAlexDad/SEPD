import React from 'react';

const FormSelect = (props) => {

  const { classBlock, classHeader, header, name, classSelect, defaultValue, options, value, onChange } = props

  return (
    <div className={classBlock}>
      <label className={classHeader} >{header}</label>
      <select value={value} name={name} className={classSelect} onChange={onChange} >
        <option value={value} disabled selected>{defaultValue}</option>
        {options.map((option, index) =>
          <option key={index} value={option.value}>{option.text}</option>
        )}
      </select>

    </div>

  )

}

export default FormSelect
