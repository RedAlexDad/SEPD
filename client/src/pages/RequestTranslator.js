import React, { useEffect, useState, useContext } from "react";
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
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
import teacerandtranslater from "../image/teacerandtranslater.jpeg";
import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";
// Для переключения других веб страниц
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequestTranslator = () => {
  const [post, setPost] = useState([]);
  const [id_request, setIdRequest] = useState("");
  const [building, setBuilding] = useState("");
  const [auditorium, setAuditorium] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [schedule, setSchedule] = useState("");
  const [DataTime, setDataTime] = useState("");

  useEffect(() => {
    const res = axios
      .get("http://localhost:4000/request_tasks")
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
      DataTime,
    };

    const res = axios
      .post("http://localhost:4000/request_tasks", article)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
    setIdRequest(+id_request + 1);
    setBuilding("");
    setAuditorium("");
    setDiscipline("");
    setSchedule("");
    setDataTime("");
    return res.data;
  };

  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  console.log(post);

  return (
    <div>
      <title>Оформление заявок</title>

      <header>
        <div class="LOGO2">
          <img src={logotip} alt={"logotip"} />
        </div>
      </header>

      <center>
        <div class="menu">
          <ul>
            <li>
              <a class="color-menu" href>
                <Link to="/main">Главная</Link>
              </a>
            </li>
            <li>
              <a class="color-menu" href>
                <Link to="/request">Оформить заявку</Link>
              </a>
            </li>
            <li>
              <a class="color-menu" href>
                <Link to="/request_tasks">Посмотреть все записи</Link>
              </a>
            </li>
            <li>
              <a class="color-menu" href>
                <Link to="/contact_personal">Контакты</Link>
              </a>
            </li>
            <li>
              <a class="color-menu" href="/" onClick={logoutHandler}>
                Выйти
              </a>
            </li>
          </ul>
        </div>
      </center>

      <div class="p-3 mb-2 bg-light">
        <h1>Оформить заявление</h1>
        <form action="" required>
          <div class="d-grid gap-2 col-2 mx-auto">
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
                  {
                    value: "Учебно-лабораторный корпус",
                    text: "Учебно-лабораторный корпус",
                  },
                  {
                    value: "Спортивный комплекс",
                    text: "Спортивный комплекс",
                  },
                ]}
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-2 mx-auto">
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

          <div class="d-grid gap-2 col-2 mx-auto">
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

          <div class="d-grid gap-2 col-2 mx-auto">
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

          <div class="d-grid gap-2 col-2 mx-auto">
            <div class="mb-3">
              <form>
                <div class="form-group">
                  <label for="inputDate">Введите дату:</label>
                  <FormInput
                    classBlock={"block mt-1"}
                    classLabel={"form_caption"}
                    type={"date"}
                    classInput={"form_input--text"}
                    value={DataTime}
                    onChange={(e) => setDataTime(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="text-center">
            <div class="d-grid gap-2 col-3 mx-auto">
              <button
                class="btn btn-warning"
                // Отправка запроса
                onClick={handleSubmit}
              >
                Отправить{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer>
        <div class="blok4">
          <div class="primer0">
            <img src={symbol} alt={"symbol"} />
          </div>
          <div class="primer1">
            <p>105005, Москва, 2-я Бауманкая ул., д. 5, стр. 1</p>
          </div>
          <div class="primer2">
            <p>8 (499)-263-63-91</p>
          </div>
          <div class="primer3">
            <p>bauman@bmstu.ru</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
