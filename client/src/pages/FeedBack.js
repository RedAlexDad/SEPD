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

export const FeedBack = () => {
  return (
    <div>
      <header>
        <div class="LOGO2">
          <img src="image/2.png" />
        </div>
      </header>

      <main>
        <div class="row">
          <h1>Запрос №1</h1>
          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Здание
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Введите здание"
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Аудитория
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Введите аудиторию"
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Дисциплина
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Введите дисциплину"
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Расписание
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Введите расписание"
              />
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
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Введите здание"
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Аудитория
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Введите аудиторию"
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Дисциплина
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Введите дисциплину"
              />
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
    </div>
  );
};
