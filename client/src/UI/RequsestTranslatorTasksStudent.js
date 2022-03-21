import React from 'react';
import FormInput from '../UI/FormInput';
// import FormTextArea from '../UI/FormTextArea';
// Для переключения других веб страниц
import { useLocation } from "react-router-dom";


const DisplayCheck = (props) => {
  const location = useLocation();
  const {
    // header, 
    building,
    auditorium,
    discipline,
    schedule
  } = props

  return (
    <div className="">
      <div className="">
        <form action=""   >
          {/* <h1 className="my-4 text-2xl font-bold text-center ">Проверка заявки {header} */}
          {/* </h1> */}
          <div className="">
            <FormInput
              value={building}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Здание"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />

            <FormInput
              value={auditorium}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Аудитория"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />

            <FormInput
              value={discipline}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Дисциплина"}
              type={"text"}
              classInput={"form_input--text"}
              onChange={e => e.target.value}
            />

            <FormInput
              value={schedule}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Расписание"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />

          </div>
        </form >
      </div>
    </div>
  );
};


export default DisplayCheck