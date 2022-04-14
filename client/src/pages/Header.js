import React, { useState, useEffect, useContext } from "react";
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

// import { Nav } from "react-bootstrap";

export const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const message = useMessage();

  const { myID, family, name, fatherland, group } = useAuth();
  console.log("myID: ", myID, "family: ", family, "name: ", name, "fatherland", fatherland, "group: ", group);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };



  return (
    <div2>
      <center>
        <div class="navbar navbar-expand-lg">
          <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
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
                    <Link to="/request_tasks">Посмотреть все записи</Link>
                  </a>
                </li>
                <li>
                  <a class="nav-link active" aria-current="page" href>
                    <Link to="/contact_personal">Контакты</Link>
                  </a>
                </li>
                <li>
                  <a class="nav-link active" aria-current="page" href>
                    <Link to="/regist">Регистрация </Link>
                  </a>
                </li>
                <li>
                  <a class="nav-link active" aria-current="page" href="/" onClick={logoutHandler}>
                    Выйти
                  </a>
                </li>
                <li class="FIO_man_pos">
                  <p class="fw-bold">
                    {family} {name} {fatherland} {group}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </center>
    </div2>
  );
};
