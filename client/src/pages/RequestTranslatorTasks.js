import React, { useEffect, useState } from "react";

import FormCheck from "../UI/FormCheck";
import FormInput from "../UI/FormInput";
import FormSelect from "../UI/FormSelect";

import axios from "axios";
import DisplayCheck from "../UI/FormCheck";

// Подключаем картинку
import logotip from "../image/logotip.png";
// import BMSTU from "../image/BMSTU.png";
// import symbol from "../image/symbol.png";
// import teacerandtranslater from "../image/teacerandtranslater.jpeg";
// import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";

// Для переключения других веб страниц
import { useLocation } from "react-router-dom";


// function RequestTranslatorTasks() {
export const RequestTranslatorTasks = () => {

  const [post, setPost] = useState([]);
  const [building, setBuilding] = useState("");
  const [auditorium, setAuditorium] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [schedule, setSchedule] = useState("");
  
  useEffect(() => {
    const res = axios.get("http://localhost:5000/request_tasks").then((response) => {
      setPost(response.data);
    }).catch(function (error) {
      console.log(error);
    });
    return res.data;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      id: Date.now(),
      building,
      auditorium,
      discipline,
      schedule,
    };



    const res = axios
    .post("http://localhost:5000/request_tasks", article)
    .then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
    setBuilding("");
    setAuditorium("");
    setDiscipline("");
    setSchedule("");
    return res.data;
  };

  console.log(post);

  return (
   <div>
      <h1>Список запросов</h1>

      <header>
        <div className="LOGO2">
          <img src={logotip} alt={"logotip"} />
        </div>
      </header>
      <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-md p-4 mt-4 mb-4 mr-4 bg-white rounded-md shadow-md">
        <h1 className="my-4 text-2xl font-bold text-center ">
          Оформление заявки
        </h1>
        <form action="" required>
          <div className="">
            <FormInput
              value={building}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Имя"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"Главное здание"}
              onChange={(e) => setBuilding(e.target.value)}
            />

            <FormInput
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Аудитория"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"219"}
              value={auditorium}
              onChange={(e) => setAuditorium(e.target.value)}
            />

            <FormInput
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Дисциплина"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"УПСП"}
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
            />

              <FormInput
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Расписание"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"10:15 - 12:00"}
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
            />
          </div>

          <div className="text-center">
            <input
              type="button"
              className="mt-4 text-center cursor-pointer btn"
              value="Опубликовать"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      

      <div className="flex flex-col w-full max-w-md p-4 mt-4 mb-4 bg-white rounded-md shadow-md">
        {post.map((p) => {  
          return (
            <div key={p.id}>
            <p>{p.building}</p>
            <p>{p.auditorium}</p>
            <p>{p.discipline}</p>
            <p>{p.schedule}</p>
            </div>
            // <DisplayCheck>
            //   building={building}
            //   auditorium={auditorium}
            //   discipline={discipline}
            //   schedule={schedule}
            // </DisplayCheck>
          );
        })}
      </div>
    </div>
</div>
      
  );
};


export default RequestTranslatorTasks;