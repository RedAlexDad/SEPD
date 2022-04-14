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
    <div>
      <center>
        <div class="menu">
          <ul>
            <li>
              <a class="menu ul li a" href>
                <Link to="/main">Главная</Link>
              </a>
            </li>
            <li>
              <a class="menu ul li a" href>
                <Link to="/request">Оформить заявку</Link>
              </a>
            </li>
            <li>
              <a class="menu ul li a" href>
                <Link to="/request_tasks">Посмотреть все записи</Link>
              </a>
            </li>
            <li>
              <a class="menu ul li a" href>
                <Link to="/contact_personal">Сурдопереводчики</Link>
              </a>
            </li>
            <li>
              <a class="menu ul li a" href>
                <Link to="/regist">Регистрация </Link>
              </a>
            </li>
            <li>
              <a class="menu ul li a" href="/" onClick={logoutHandler}>
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
      </center>
    </div>
  );
};
