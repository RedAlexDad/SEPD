import React from 'react';

const FormTextArea = (props) => {

  const { classBlock, classHeader, header, classTextarea, name, cols, rows, placeholder, value, onChange } = props;

  return (
    <div className={classBlock}>
      <label className={classHeader}>{header}</label>
      <textarea className={classTextarea} name={name} cols={cols} rows={rows} placeholder={placeholder} value={value} onChange={onChange} required></textarea>
    </div>





  )

}

export default FormTextArea
