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

export const Footer = () => {
  return (
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
  );
};
