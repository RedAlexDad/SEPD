import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";

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
      console.log('Data: ', data);
    } catch (error) {
      console.log("ERROR! Nothing is happening!");
    }
  };

  return (
    <body>
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

      <h1>Заявление сурдопереводчиков</h1>

      <header>
        <div class="LOGO2">
          <img src={logotip} alt={"logotip"} />
        </div>
      </header>

      <div class="vibor">
        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="input-group-append">
            {/* <label class="input-text" for="inputGroupSelect02">
              Здание
            </label> */}
            <input
              placeholder="Введите здание"
              id="building"
              type="text"
              name="building"
              // берет значение и отправляет в функцию changeHandler
              onChange={changeHandler}/>
            <label htmlFor="building"></label>
          </div>
          {/* <select class="custom-select" id="inputGroupSelect02">
            <option selected>Выбор места</option>
            <option id="building" type="text" name="Главное здание" onChange={changeHandler}>Главное здание</option>
            <option id="building" type="text" name="Учебный лабораторный корпус" onChange={changeHandler}>Учебный лабораторный корпус</option>
            <option id="building" type="text" name="Специальное машиностроение" onChange={changeHandler}>Специальное машиностроение</option>
            <option id="building" type="text" name="Электроэнергия" onChange={changeHandler}>Электроэнергия</option>
          </select> */}
        </div>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <div class="input-group-append">
          <div class="mb-3">
            {/* <label for="formGroupExampleInput" class="form-label">
              Аудитория
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Введите аудиторию"
            /> */}
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
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <div class="input-group-append">
          <div class="mb-3">
            {/* <label for="formGroupExampleInput" class="form-label">
              Дисциплина
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Введите дисциплину"
            /> */}
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
      </div>

      {/* <div class="d-grid gap-2 col-6 mx-auto">
        <form>
          <div class="form-group">
            <label for="inputDate">Введите дату:</label>
            <input type="date" class="form-control" />
          </div>
        </form>
      </div> */}

      <div class="vibor">
        <div class="d-grid gap-2 col-6 mx-auto">
          <div class="input-group-append">
            {/* <label class="input-text" for="inputGroupSelect02">
              Расписание
            </label> */}
            <input
              placeholder="Введите расписание"
              id="schedule"
              type="text"
              name="schedule"
              onChange={changeHandler}
            />
            <label htmlFor="schedule"></label>
          </div>
          {/* <select class="custom-select" id="inputGroupSelect02">
            <option selected>Время выбора</option>
            <option value="1">8:30 - 10:05</option>
            <option value="2">10:15 - 11:50</option>
            <option value="3">12:00 - 13:35</option>
            <option value="4">13:50 - 15:25</option>
            <option value="5">15:40 - 17:15</option>
            <option value="6">17:25 - 19:00</option>
          </select> */}
        </div>
      </div>

      <div class="butt">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-warning" type="button">
            <Link to="/request_tasks">Посмотреть все запросы</Link>
          </button>
          <button
            class="btn btn-warning"
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
    </body>
  );
};
