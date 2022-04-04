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
 
export const Header = () => {

  const history = useHistory();
  const auth = useContext(AuthContext);
  const message = useMessage();

  const { family, name, fatherland, group} = useAuth();

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <div>
      <header>
        <div class="LOGO2">
          <img src={logotip} alt={"logotip"} />
        </div>
        <div>
          <h1>
          <div>
              <div>{family}</div>
              <div>{name}</div>
              <div>{fatherland}</div>
              <div>{group}</div>
              </div>
          </h1>
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
              <a class="color-menu" href>
                <Link to="/regist">Регистрация </Link>
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
    </div>
  );
};
