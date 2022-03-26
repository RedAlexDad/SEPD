import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";

import FormCheck from "../UI/FormCheck";
import FormInput from "../UI/FormInput";
import FormSelect from "../UI/FormSelect";
import RequsestTranslatorTasksStudent from "../UI/RequsestTranslatorTasksStudent";

import axios from "axios";
import DisplayCheck from "../UI/FormCheck";
import { useLocation } from "react-router-dom";

// Подключаем картинку
import logotip from "../image/logotip.png";
// import BMSTU from "../image/BMSTU.png";
// import symbol from "../image/symbol.png";
// import teacerandtranslater from "../image/teacerandtranslater.jpeg";
// import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";
// Для переключения других веб страниц
import { Link } from "react-router-dom";

export const RequestTranslator = () => {
  const [post, setPost] = useState([]);
  const [id_request, setIdRequest] = useState();
  const [building, setBuilding] = useState("");
  const [auditorium, setAuditorium] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [schedule, setSchedule] = useState("");

  useEffect(() => {
    const res = axios
      .get("http://localhost:5000/request_tasks")
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    return res.data;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      id: Date.now(),
      id_request,
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
    setIdRequest(+id_request + 1);
    setBuilding("");
    setAuditorium("");
    setDiscipline("");
    setSchedule("");
    return res.data;
  };

  

  console.log(post);

  return (
    <body>
      <head>
        <title>Оформление заявление</title>
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
      </head>

      <header>
        <div class="LOGO2">
          <img src={logotip} alt={"logotip"} />
        </div>
      </header>

      <main>
        <h1>Оформление заявление</h1>
        <form action="" required>
          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Здание
              </label>
              <FormSelect
                value={building}
                classBlock={"block mt-1"}
                classLabel={"form_caption"}
                type={"text"}
                classInput={"form_input--text"}
                placeholder={"Главное здание"}
                defaultValue={"Выберите здание"}
                onChange={(e) => setBuilding(e.target.value)}
                options={[
                  { value: "Главное здание", text: "Главное здание" },
                  { value: "Учебно-лабораторный корпус", text: "Учебно-лабораторный корпус"},
                  { value: "Спортивный комплекс", text: "Спортивный комплекс" },
                ]}
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Аудитория
              </label>
              <FormInput
                classBlock={"block mt-1"}
                classLabel={"form_caption"}
                type={"text"}
                classInput={"form_input--text"}
                placeholder={"219"}
                value={auditorium}
                onChange={(e) => setAuditorium(e.target.value)}
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Дисциплина
              </label>
              <FormInput
                classBlock={"block mt-1"}
                classLabel={"form_caption"}
                type={"text"}
                classInput={"form_input--text"}
                placeholder={"УПСП"}
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Расписание
              </label>
              <FormSelect
                classBlock={"block mt-1"}
                classLabel={"form_caption"}
                type={"text"}
                classInput={"form_input--text"}
                placeholder={"10:15 - 12:00"}
                value={schedule}
                defaultValue={"Выберите время расписании"}
                onChange={(e) => setSchedule(e.target.value)}
                options={[
                  { value: "8:30 - 10:05", text: "8:30 - 10:05" },
                  { value: "10:15 - 11:50", text: "10:15 - 11:50" },
                  { value: "12:00 - 13:35", text: "12:00 - 13:35" },
                  { value: "13:50 - 15:25", text: "13:50 - 15:25" },
                  { value: "15:40 - 17:15", text: "15:40 - 17:15" },
                  { value: "17:25 - 19:00", text: "17:25 - 19:00" },
                ]}
              />
            </div>
          </div>

          <div className="text-center">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-warning" type="button">
                <Link to="/request_tasks">Посмотреть все запросы</Link>
              </button>
              <button
                class="btn btn-warning"
                // Отправка запроса
                onClick={handleSubmit}
              >
                Отправить{" "}
              </button>
              <button class="btn btn-warning" type="button">
                <Link to="/main">Назад</Link>
              </button>
            </div>
          </div>
        </form>            
      </main>
    </body>
  );
};
