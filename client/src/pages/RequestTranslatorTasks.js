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
    .post("http://localhost:5000/api/request", article)
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

  useEffect(() => {
    const res = axios.get("http://localhost:5000/api/request").then((response) => {
      setPost(response.data);
    });
    return res.data;
  }, []);
  console.log(post);

  return (
    <body>
      <title>Просмотры запросов</title>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="styles.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.1/moment.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.7.14/js/bootstrap-datetimepicker.min.js"></script>

      <h1>Список запросов</h1>

      <header>
        <div class="LOGO2">
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
              value={discipline}
              onChange={(e) => setSchedule(e.target.value)}
            />
          </div>

          <div className="text-center">
            <input
              type="button "
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
            <div>
              <DisplayCheck
                header={"студентов"}
                building={p.building}
                auditorium={p.auditorium}
                discipline={p.discipline}
                schedule={p.schedule}
              />
            </div>
          );
        })}
      </div>
    </div>

      <div className="flex flex-col w-full max-w-md p-4 mt-4 mb-4 bg-white rounded-md shadow-md">
        {post.map((p) => {
          return (
            <div>
              <DisplayCheck
                header={"студентов"}
                firstName={p.firstName}
                lastName={p.lastName}
              />
            </div>
          );
        })}
      </div>
    </body>
  );
};


export default RequestTranslatorTasks;