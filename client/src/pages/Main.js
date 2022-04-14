import React, { useContext } from "react";
// Подключаем картинку
import logotip from "../image/logotip.png";
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
import teacerandtranslater from "../image/teacerandtranslater.jpeg";
import translater from "../image/translater.jpg";
// Подключаем css для визуала
// import "../css/styles.css";

// Для переключения других веб страниц
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";
import { Footer } from "./Footer";

export const Main = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <div>
      <title>Главная</title>

      <div class="position-relative photo-text">
        <center>
          <div class="photo">
            <img src={BMSTU} alt={"BMSTU"} />
            <div class="position-absolute top-50 start-50 translate-middle">
              <p>Запись к переводчику в МГТУ им. Н. Э. Баумана</p>
            </div>
          </div>
        </center>
      </div>

      <main>
        <center>
          <div>
            <div class="textandphoto">
              <div class="photo1">
                <img src={teacerandtranslater} alt={"teacerandtranslater"} />
              </div>
              <div class="text0">
                <h1>
                  Сурдопереводчикисопровождают преподавателей во время ведения
                  пар. В штате факультета сейчас 13 переводчиков. Это самая
                  многочисленная команда среди всех вузов, где обучаются
                  студенты с нарушением слуха. За долгие годы работы в МГТУ
                  переводчиками даже была разработана технологическая база
                  жестов инженерных терминов. Например, термин «дифракция» может
                  быть понятен любому студенту факультета благодаря языку
                  жестов.
                </h1>
              </div>
              <div class="photo2">
                <img src={translater} alt={"translater"} />
              </div>
            </div>
          </div>
        </center>
      </main>
      <Footer></Footer>
    </div>
  );
};
