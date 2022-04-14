import React from "react";
// Подключаем картинку
import logotip from "../image/logotip.png";
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
import teacerandtranslater from "../image/teacerandtranslater.jpeg";
import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";
import "../css/styles_mobile.css";

// Для переключения других веб страниц
import { Link } from "react-router-dom";

export const TestRole = () => {
  return (
    <div class="glavnoescreen">
      <div class="overlap-group">
        <img class="image-4" src="image-4.png" />
        <h1 class="text-2">Запись к переводчику</h1>
        <div class="text-3inter-light-black-18px">Логин</div>
        <img class="line-1" src="line-15.svg" />
        <div class="text-1inter-light-black-18px">Пароль</div>
        <img class="line-1" src="line-15.svg" />
        <div class="button-primary">
          <div class="sign-upinter-semi-bold-royal-blue-16px">
                <Link to="/main">Войти</Link></div>
        </div>
        <div class="button-primary-1">
          <div class="sign-up-1inter-semi-bold-royal-blue-16px">
            Забыли ли пароль?
          </div>
        </div>
      </div>
    </div>
  );
};
