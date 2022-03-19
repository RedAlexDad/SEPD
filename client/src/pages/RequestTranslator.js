import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

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

export const RequestTranslator = () => {
  const { loading, request } = useHttp();
  // Работа с запросами
  const [form, setForm] = useState({
    // Содержание структуры
    building: "",
    auditorium: "",
    discipline: "",
    schedule: "",
  });

  // Обработка данные
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/request", "POST", { ...form });
      // console.log('Data: ', data);
    } catch (error) {
      console.log("ERROR! Nothing is happening!");
    }
  };

  return (
    <body>
      <header>
        <div class="LOGO2">
          <img src={logotip} alt={"logotip"} />
        </div>
      </header>

      <main>
        <h1>Заявление сурдопереводчиков</h1>
        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="mb-3">
            <input
              placeholder="Введите здание"
              id="building"
              type="text"
              name="building"
              // берет значение и отправляет в функцию changeHandler
              onChange={changeHandler}
            />
            <label htmlFor="building"></label>
          </div>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="mb-3">
            <input
              placeholder="Введите аудиторию"
              id="auditorium"
              type="text"
              name="auditorium"
              onChange={changeHandler}
            />
            <label htmlFor="auditorium"></label>
          </div>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="mb-3">
            <input
              placeholder="Введите дисциплину"
              id="discipline"
              type="text"
              name="discipline"
              onChange={changeHandler}
            />
            <label htmlFor="discipline"></label>
          </div>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="mb-3">
            <input
              placeholder="Введите расписание"
              id="schedule"
              type="text"
              name="schedule"
              onChange={changeHandler}
            />
            <label htmlFor="schedule"></label>
          </div>
        </div>

        <div class="butt">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-warning" type="button">
              <Link to="/request_tasks">Показать все запросы</Link>
            </button>

            <button
              class="send request"
              // Отправка запроса
              onClick={registerHandler}
              // Если загружается
              disable={loading}>
              Отправить{" "}
            </button>

            <button class="btn btn-warning" type="button">
              <Link to="/main">Назад</Link>
            </button>
          </div>
        </div>
      </main>
    </body>
  );
};
