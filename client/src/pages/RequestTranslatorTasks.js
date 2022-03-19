import React from "react";
// Подключаем картинку
import logotip from "../image/logotip.png";
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
import teacerandtranslater from "../image/teacerandtranslater.jpeg";
import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";

// Для переключения других веб страниц
import { Link } from "react-router-dom";

export const RequestTranslatorTasks = () => {
  return (
    <div>
    <title>Авторизация</title>
    {/* <meta charset="UTF-8">  */}
    {/* <link rel="stylesheet" href="styles.css"> */}
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> */}
    {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
    {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">   */}
    {/* <style> body {font-family: 'Montserrat', sans-serif; } </style> */}

    <body>
      <header>
          
        <div class="LOGO2"><img src={logotip} alt={"logotip"}/></div>
      </header>

      <main>
        <div class="row">
          <h1>Запрос №1</h1>
          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Здание
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите здание"> */}
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Аудитория
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите аудиторию"> */}
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Дисциплина
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите дисциплину"> */}
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Расписание
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите расписание"> */}
            </div>
          </div>

          <div class="butt">
            <div class="d-grid gap-2 col-5 mx-auto">
              <button class="btn btn-warning" type="button">
                Показать все запросы
              </button>
              <button class="btn btn-warning" type="button">
                Отправить
              </button>
              <button class="btn btn-warning" type="button">
                Назад
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <h1>Запрос №2</h1>
          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Здание
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите здание"> */}
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Аудитория
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите аудиторию"> */}
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Дисциплина
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите дисциплину"> */}
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Расписание
              </label>
              {/* <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите расписание"> */}
            </div>
          </div>

          <div class="butt">
            <div class="d-grid gap-2 col-5 mx-auto">
              <button class="btn btn-warning" type="button">
                Показать все запросы
              </button>
              <button class="btn btn-warning" type="button">
                Отправить
              </button>
              <button class="btn btn-warning" type="button">
                Назад
              </button>
            </div>
          </div>
        </div>
      </main>
    </body>
  </div>
)};
