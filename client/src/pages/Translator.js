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
import { LinkForReadRequests } from "../hooks/LinkForReadRequests";


// function RequestTranslatorTasks() {
export const Translator = () => {


  const { loading, request, error, clearError } = useHttp();
  const { myID, family, name, fatherland, group, number_request, post_user } = useAuth();
  
  // if (post_user === 1) {
  // const FIO_translate = {
  //   surdo_family: family, surdo_name: name, surdo_fatherland: fatherland 
  // }
  // } } else {const FIO_translate = null}
  // console.log("family: ", FAMILY, ";", "name:", NAME, ";", "fatherland: ", FATHERLAND);
    
  // const [FIO, setFIO] = useState({
  //   family: "", name: "", fatherland: ""
  // });

  const [post, setPost] = useState([]);

const update_info_click = () => {
  console.log("click");
  const res = axios
    res
    // .post("/api/auth/getInfoFIO_translator", {...FIO_translate})
    .post("/api/auth/getInfoFIO_translator", 
    { surdo_family: family, surdo_name: name, surdo_fatherland: fatherland })
    .then((response) => {
        setPost(response.data);
        console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("res.data: ", res.data);
    return res.data
}

  return (
    <div>
        <title>Список запросов</title>
      <main>
        <header class = "button_update"> 
        <button class = "btn btn-primary" onClick = {update_info_click}>Обновить</button> 
        </header>
        <header> <h1> Всего заявления: {post.length}</h1></header>
        {post.map((p) => {
          return (
            <div class = "">
              <div class="row"> 
                {/* <div key={p.id}> */}
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="table">
                        <thead>
                          <tr>
                            <th scope="col"><h1>Номер запроса №{p._id}</h1></th>
                            {/* <th scope="col"><h1>Номер запроса №{p.id_request}</h1></th> */}
                          </tr>
                        </thead>
                        <div class="mb-3_tasks">
                          <tbody>
                            <tr>
                              <th scope="row">ФИО студента: </th>
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

                  <li class="list-group-item">
                  <div class="table">
                  <div class="mb-3_tasks">
                          {/* <tbody> */}
                            {/* <tr> */}
                              {/* <th scope="row">Заявление принято: ДА</th> */}
                              {/* <td> Сурдопереводчик: {p.surdo_family} {p.surdo_name} {p.surdo_fatherland}</td> */}
                            {/* </tr> */}
                          {/* </tbody> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
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

export default Translator;
