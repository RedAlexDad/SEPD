import React from "react";
// Подключаем картинку
import logotip from "../image/logotip.png";
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
import teacerandtranslater from "../image/teacerandtranslater.jpeg";
import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";

// Для переключения других веб страниц
import { Link } from "react-router-dom";

export const Authorization = () => {
  return (
    <div>
      <head />
      <title>Авторизация</title>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="styles.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />

      <body>
        <header>
          <div class="LOGO2">
            <img src={logotip} alt={"logotip"} />
          </div>
        </header>
        <center>
          <h1>Авторизация</h1>
          <div class="parent">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Логин</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputPhone1"
                  placeholder="@"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Пароль</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="******"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Запомнить
                </label>
              </div>
              <button type="submit" class="btn btn-outline-warning">
                Войти
              </button>
              <div class="form-group">
                <button class="btn btn-outline-dark">
                  <Link to="/registration">Регистрация</Link>
                </button>
              </div>
            </form>
          </div>
        </center>

        <main></main>
      </body>
    </div>
  );
};
