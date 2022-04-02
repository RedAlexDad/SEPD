import React, { useEffect, useState } from "react";

import FormCheck from "../UI/FormCheck";
import FormInput from "../UI/FormInput";
import FormSelect from "../UI/FormSelect";

import axios from "axios";
import DisplayCheck from "../UI/RequsestTranslatorTasksStudent";

// Подключаем картинку
import logotip from "../image/logotip.png";
// import BMSTU from "../image/BMSTU.png";
// import symbol from "../image/symbol.png";
// import teacerandtranslater from "../image/teacerandtranslater.jpeg";
// import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";

// Для переключения других веб страниц
import { useLocation, Link } from "react-router-dom";

// function RequestTranslatorTasks() {
export const RequestTranslatorTasks = () => {
  const [post, setPost] = useState([]);

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

  return (
    <div>
      <head>
        <title>Список запросов</title>
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
        {post.map((p) => {
          return (
            <div class="row">
              {/* <div key={p.id}> */}
              <div class="center">
                <h1>Номер запроса №{p.id_request}</h1>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Имя: 
                  </label>
                  <a> {p.name}</a>
                </div>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Фамилия:
                  </label>
                  <a> {p.family}</a>
                </div>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Отечество: 
                  </label>
                  <a> {p.fatherland} </a>
                </div>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Группа: 
                  </label>
                  <a> {p.group}</a>
                </div>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Здание: 
                  </label>
                  <a> {p.building}</a>
                </div>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Аудитория: 
                  </label>
                  <a> {p.auditorium}</a>
                </div>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Дисциплина:
                  </label>
                  <a> {p.discipline} </a>
                </div>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Расписание:
                  </label>
                  <a> {p.schedule}</a>
                </div>
              </div>
              <p>
                <label>
                  ======================================================================================================
                </label>
              </p>
            </div>
          );
        })}

        <div className="text-center">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-warning" type="button">
              <Link to="/main">Назад</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestTranslatorTasks;
