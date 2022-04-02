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

export const Registration = () => {
  return (
    <div>
      <head>
        <title>Регистрация</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="styles.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        />
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
      </head>

      <body>
        <header>
          <div class="LOGO2">
            <img src={logotip} alt={"logotip"} />
          </div>
        </header>

        <main>
          <h1>Регистрация</h1>
          <div class="form">
            <form class="row g-3">
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label">
                  Логин
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="validationDefault01"
                  required
                  placeholder="@"
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault02" class="form-label">
                  Пароль
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="validationDefault02"
                  required
                  placeholder="******"
                />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck2">
                    Примите условия и соглашения
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn btn-success" type="submit">
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </main>
      </body>
    </div>
  );
};
