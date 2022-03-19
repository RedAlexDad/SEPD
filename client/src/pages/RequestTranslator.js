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
      <h1>
        Заявление сурдопереводчиков
      </h1>
      <div class="vibor">
        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="input-group-append">
            <label class="input-text" for="inputGroupSelect02">Здание</label>
          </div>
          <select class="custom-select" id="inputGroupSelect02">
            <option selected>Выбор места</option>
            <option value="1">ГУК</option>
            <option value="2">УЛК</option>
            <option value="3">СМ</option>
            <option value="4">Э</option>
          </select>
        </div>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <div class="input-group-append">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Аудитория</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите аудиторию"/>
          </div>
        </div>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <div class="input-group-append">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Дисциплина</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите дисциплину"/>
          </div>
        </div>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <form>
          <div class="form-group">
            <label for="inputDate">Введите дату:</label>
            <input type="date" class="form-control"/>
          </div>
        </form>
      </div>

      <div class="vibor">
        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="input-group-append">
            <label class="input-text" for="inputGroupSelect02">Расписание</label>
          </div>
          <select class="custom-select" id="inputGroupSelect02">
            <option selected>Время выбора</option>
            <option value="1">8:30 - 10:05</option>
            <option value="2">10:15 - 11:50</option>
            <option value="3">12:00 - 13:35</option>
            <option value="4">13:50 - 15:25</option>
            <option value="5">15:40 - 17:15</option>
            <option value="6">17:25 - 19:00</option>
          </select>
        </div>
      </div>



      <div class="butt">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-warning" type="button">Показать все запросы</button>
          <button class="btn btn-warning" type="button">Отправить</button>
          <button class="btn btn-warning" type="button">Назад</button>
        </div>
      </div>
    </body>
  );
};
