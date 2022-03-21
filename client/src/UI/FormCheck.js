import React from 'react';

const FormCheck = (props) => {

  const { classBlock, classHeader, header, classLabel, name, type, options, classInput, value, text, onChange
  } = props

  return (
    <div className={classBlock}>
      <p className={classHeader}>{header}</p>
      <div className="flex flex-col mt-1">
        {options.map((option, index) =>
          <label className={option.classLabel} key={index}>
            <input name={name} type={type} className={classInput} value={option.value} onChange={onChange} required />{option.text}</label>
        )}
      </div>


    </div >
  )

}

export default FormCheck
