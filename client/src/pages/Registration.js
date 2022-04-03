import React, { useContext, useEffect, useState } from "react";

import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

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

// Для регистрации

export const Registration = () => {
  
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  // useEffect(() => {
    // window.M.updateTextFields();
  // }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/regist', 'POST', { ...form });
      // message(data.message);
      console.log('Data: ', data)
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

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
{/*               
              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">
                  Имя
                </label>
                <input type="text" class="form-control" id="validationDefault01" required placeholder="Ваше имя"/>
              </div>

              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">
                  Фамилия
                </label>
                <input type="text" class="form-control" id="validationDefault02" required placeholder="Ваша фамилия"/>
              </div> */}

              <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">
                  Login
                </label>
                <div class="input-group">
                <input
                  placeholder="Введите login"
                  id="login"
                  type="text"
                  name="login"
                  className="yellow-input"
                  value={form.login}
                  onChange={changeHandler}
                />
                <label htmlFor="Login">Login</label></div>
              </div>
{/* 
              <div class="col-md-4">
                <label for="validationDefault03" class="form-label">
                  Отечество
                </label>
                <input type="text" class="form-control" id="validationDefault03" required placeholder="Ваше отечество"/>
              </div>

              <div class="col-md-4">
                <label for="validationDefault05" class="form-label">
                  Телефон
                </label>
                <input type="phone" class="form-control" id="validationDefault05" required placeholder="+7 (XXX) XXX XXXX"/>
              </div>
               */}
              <div class="col-md-4">
                <input
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="Login">Пароль</label>
                </div>
{/* 
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                  <label class="form-check-label" for="invalidCheck2">
                    Примите условия и соглашения
                  </label>
                </div>
              </div> */}

              <div class="col-12">
              <button
                  className="btn yellow darken-4"
                  style={{ marginRight: 10 }}
                  disabled={loading}
                  onClick={loginHandler}
                >
                  Войти
                </button>
                <button
                  className="btn grey lighten-1 black-text"
                  onClick={registerHandler}
                  disabled={loading}
                >
                  Регистрация
                </button>
              </div>
            </form>
          </div>
        </main>
      </body>
    </div>
  );
};
