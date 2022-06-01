import React, { useState, useEffect, useContext, useCallback } from "react";
// Подключаем картинку
import logotip from "../image/logotip.png";
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
import teacerandtranslater from "../image/teacerandtranslater.jpeg";
import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";
import axios from "axios";

// Для переключения других веб страниц
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";

import { useAuth } from "../hooks/auth.hook";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

import { LinkForReadRequests } from "../hooks/LinkForReadRequests";
// import { Nav } from "react-bootstrap";

export const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const message = useMessage();

  const { login, password, myID, family, name, fatherland, group, num_req, post_user } = useAuth();
  
  console.log("myID: ", myID, "family: ", family, "name: ", name, "fatherland", fatherland, "group: ", group, "num_req: ", num_req, "PostUser: ", post_user);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  const [post, setPost] = useState([]);

  const get_info_user = useCallback(async () => {
    const res = axios;
    res
    .post("/api/auth/getInfoFIO_student", { family: family, name: name, fatherland: fatherland })
    .then((response) => {
        setPost(response.data);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
    // console.log("res.data: ", res.data);
    return res.data
  })

  // const check = 1;

  useEffect(() => {
    const res = axios;
    res
    .post("/api/auth/getInfoFIO_student", { family: family, name: name, fatherland: fatherland })
    .then((response) => {
        setPost(response.data);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
    // console.log("res.data: ", res.data);
    return res.data
  }, []);



  function type_user_check(post_user) {
    // Студент или администратор
    if(post_user === 0) {
      return (
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href>
              <Link to="/main">Главная</Link>
            </a>
          </li>
          <li>
            <a class="nav-link active" aria-current="page" href>
              <Link to="/request">Оформить заявку</Link>
            </a>
          </li>
          <li>
          <a class="nav-link active" aria-current="page" href>
            <Link to="/student_tasks">Мои записи</Link>
          </a>
          </li>
          <li>
            <a class="nav-link active exit" aria-current="page" href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
          <li class="FIO_man_pos">
            <p class="fw-bold">
              {family} {name} {fatherland} {group}
            </p>
          </li>
        </ul>
      )
    }
    // Сурдопереводчик
    else if(post_user === 1) {
      return (
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href>
              <Link to="/main">Главная</Link>
            </a>
          </li>
          <li>
            <a class="nav-link active" aria-current="page" href>
              <Link to="/request_tasks">Посмотреть все записи</Link>
            </a>
          </li>
          <li>
          <a class="nav-link active" aria-current="page" href>
            <Link to="/translator_tasks">Мои записи</Link>
          </a>
          </li>
          <li>
            <a class="nav-link active exit" aria-current="page" href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
          <li class="FIO_man_pos">
            <p class="fw-bold">
              {family} {name} {fatherland} {group}
            </p>
          </li>
        </ul>
      )}
    // Администратор
    else if(post_user === 2) {
      return(
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href>
              <Link to="/main">Главная</Link>
            </a>
          </li>
          <li>
            <a class="nav-link active" aria-current="page" href>
              <Link to="/request_tasks">Посмотреть все записи</Link>
            </a>
          </li>
          <li>
            <a class="nav-link active" aria-current="page" href>
              <Link to="/regist">Регистрация </Link>
            </a>
          </li>
          <li>
            <a class="nav-link active exit" aria-current="page" href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
          <li class="FIO_man_pos">
            <p class="fw-bold">
              {family} {name} {fatherland} {group}
            </p>
          </li>
        </ul>
      )}
    }

  return (
    <div>
      <center>
       <div class="navbar">
        <div class="container">
         <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              {type_user_check(post_user)}
            </div>
          </div>
         </nav>
         </div>
        </div>
      </center>
    </div>
  );
};
