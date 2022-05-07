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
import { useHttp } from "../hooks/http.hook.js";
import { useAuth } from "../hooks/auth.hook.js";

import db from "mongoose";

// function RequestTranslatorTasks() {
export const RequestTranslatorTasks = () => {
  const [post, setPost] = useState([]);

  const { loading, request, error, clearError } = useHttp();
  const { myID, family, name, fatherland, group, number_request } = useAuth();


  useEffect(() => {
    const res = axios
      // .get("http://localhost:4000/request_tasks")
      .get("/api/auth/getInfoAll")
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("res.data: ", res.data);
    return res.data;
  }, []);

  
  // getInfoDB();

  return (
    <div>
        <title>Список запросов</title>
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
                      <div class="mb-3_tasks">
                        <tbody>
                          <tr>
                            <th scope="row">ФИО: </th>
                            {/* <td> Фамилия: {USER}</td> */}
                            <td> Фамилия: {p.family}</td>
                            <td> Имя: {p.name}</td>
                            <td> Отчество: {p.fatherland} </td>
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
                <div class="mb-3_tasks">
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
