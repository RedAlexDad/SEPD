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

import db from "mongoose";

// function RequestTranslatorTasks() {
export const RequestTranslatorTasks = () => {
  const { loading, request, error, clearError } = useHttp();
  const { myID, family, name, fatherland, group, number_request, post_user, surdo_family, surdo_name, surdo_fatherland} =
    useAuth();

  // console.log("family: ", FAMILY, ";", "name:", NAME, ";", "fatherland: ", FATHERLAND);

  // const [FIO, setFIO] = useState({
  //   family: "", name: "", fatherland: ""
  // });

  const [post, setPost] = useState([]);
  const [id_req, setId_req] = useState();
  const [num_req, setNum_req] = useState(null);
  const [DB_for_surdo, setDB_for_surdo] = useState(null);

  // console.log("test: ", id_req);

  // let test = JSON.parse(post[1]);
  // let test = JSON.stringify(post[1]);
  // let test = JSON.parse(JSON.stringify(post[1]));

  const update_info_click = () => {
    const res = axios;
    res
    .get("/api/auth/getInfoAll")
    .then((response) => {
      setPost(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    // console.log("res.data: ", res.data());
    return res.data;
  };

  // if(post_user === 0) {
  const accept_request = async (DB) => {
    console.log("DB: ", DB._id);
    
    DB.surdo_family = family;
    DB.surdo_name = name;
    DB.surdo_fatherland = fatherland;
    DB.status_request = "Принято";

    // Занесение в общую БД
    await axios.put("/api/auth/request/" + DB._id, 
    {_id: DB._id, surdo_family: family, surdo_name: name, surdo_fatherland: fatherland, 
     status_request: "Принято"})
    .then(res => console.log("UPDATE", res))
    .catch(error => console.log("ERROR: ", error))

    const postsClone = [...post];
    const index = postsClone.indexOf(DB);
    postsClone[index] = { ...DB };
    setPost(postsClone);
  };

  const no_accept_request = async (DB) => {
    console.log("DB: ", DB._id);

    DB.surdo_family = family;
    DB.surdo_name = name;
    DB.surdo_fatherland = fatherland;
    DB.status_request = "Отклонено";

    // Занесение в общую БД
    await axios.put("/api/auth/request/" + DB._id, 
    {_id: DB._id, surdo_family: family, surdo_name: name, surdo_fatherland: fatherland, 
      status_request: "Отклонено"})
    .then(res => console.log("UPDATE", res))
    .catch(error => console.log("ERROR: ", error))

    const postsClone = [...post];
    const index = postsClone.indexOf(DB);
    postsClone[index] = { ...DB };
    setPost(postsClone);
  };

  const delete_request = async (ID) => {
    console.log("DB._id: ", ID);

    // Удаление определенный ID с БД
    await axios.delete("/api/auth/request/" + ID, {_id: ID})
    .then(res => console.log("DELETE", res))
    .catch(error => console.log("ERROR: ", error))

    // setPost(post.filter((p)=>p.id !== DB._id));

    // const postsClone = [...post]; 
    // const index = postsClone.indexOf(DB);
    // postsClone[index] = { ...DB };

    // setPost(postsClone);
  };
  
  // }

  // Не обновляется при заходе
  // useEffect(() => {
  //   const res = axios
  //     // .get("http://localhost:4000/request_tasks")
  //     // .get("/api/auth/getInfoAll")
  //     .post("/api/auth/getInfoFIO", {family, name, fatherland})
  //     .then((response) => {
  //       setPost(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   console.log("res.data: ", res.data);
  //   return res.data
  // }, []);

  // };

  // getInfoDB();

  return (
    <div>
      <title>Список запросов</title>
      <main>
        <header class="button_update">
          <button class="btn btn-primary" onClick={update_info_click}>
            Обновить
          </button>
        </header>
        <header> <h1> Всего заявления: {post.length}</h1></header>
        {post.map((p) => {
          return (
            <div class="">
              <div class="row">
                <div key={p._id}>
                  <div class="card">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div class="table">
                          <thead>
                            <tr>
                              <th scope="col">
                                <h1>Номер запроса №{p._id}</h1>
                              </th>
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

                      <li class="list-group-item">
                        <div class="table">
                          <div class="mb-3_tasks">
                            <tbody>
                              <tr>
                                <th scope="row">Статус заявления: {p.status_request}</th>
                                <td> Сурдопереводчик: {p.surdo_family} {p.surdo_name} {p.surdo_fatherland}</td>
                              </tr>
                            </tbody>
                          </div>
                        </div>
                      </li>

                      <li class="list-group-item">
                        <center> 
                            <button class = "btn btn-success"
                              onClick={() => accept_request(p)}> 
                              Принять 
                            </button>
                          {" "}
                          <button class = "btn btn-warning"
                              onClick={() => no_accept_request(p)}> 
                              Отклонить 
                            </button>
                          {" "}
                            {/* <button class = "btn btn-danger"
                              onClick={() => delete_request(p._id)}> 
                              Удалить 
                            </button> */}
                        </center>
                      </li>

                    </ul>
                  </div>
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

export default RequestTranslatorTasks;
