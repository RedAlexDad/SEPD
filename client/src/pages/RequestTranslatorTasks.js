import React, { useEffect, useState, useContext } from "react";

import FormCheck from "../UI/FormCheck";
import FormInput from "../UI/FormInput";
import FormSelect from "../UI/FormSelect";

import axios from "axios";
import DisplayCheck from "../UI/RequsestTranslatorTasksStudent";

// Подключаем картинку
import logotip from "../image/logotip.png";
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
// import teacerandtranslater from "../image/teacerandtranslater.jpeg";
// import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";

// Для переключения других веб страниц
import { useLocation, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// function RequestTranslatorTasks() {
export const RequestTranslatorTasks = () => {
  const [post, setPost] = useState([]);

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

  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

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

      <main>
        {post.map((p) => {
          return (
            <div class="row">
              {/* <div key={p.id}> */}

              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="table">
                      <thead>
                        <tr>
                          <th scope="col"><h1>Номер запроса №{p.id_request}</h1></th>
                        </tr>
                      </thead>
                      <div class="mb-3">
                        <tbody>
                          <tr>
                            <th scope="row">ФИО: </th>
                            <td> Фамилия: {p.family}</td>
                            <td> Имя: {p.name}</td>
                            <td> Отечество: {p.fatherland} </td>
                            <td> Группа: {p.group}</td>
                          </tr>
                        </tbody>
                      </div>
                    </div>
                  </li>
                </ul>

                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                <div class="table">
                <div class="mb-3">
                        <tbody>
                          <tr>
                            <th scope="row">Данные: </th>
                            <td> Здание: {p.building}</td>
                            <td> Аудитория: {p.auditorium} </td>
                            <td> Дисциплина: {p.discipline} </td>
                            <td> Расписание: {p.schedule} </td>
                            <td> Дата: {p.DataTime} </td>
                          </tr>
                        </tbody>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
        {/* 
        <div className="text-center">
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-warning" type="button">
              <Link to="/main">Назад</Link>
            </button>
          </div>
        </div> */}
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
      </main>
    </div>
  );
};

export default RequestTranslatorTasks;
