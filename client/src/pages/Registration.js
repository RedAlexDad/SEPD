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
import axios from "axios";

// Для регистрации

export const Registration = () => {
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();

  const [form, setForm] = useState({
    id: Date.now(),
    login: "",
    password: "",
    family: "",
    name: "",
    fatherland: "",
    group: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/regist", "POST", { ...form });
      // Сообщение о успешной регистрации
      // message(data.message);
      console.log("Data regist: ", data);
      alert(data.message);

      // Сформирование ДБ и отправляет в локальную ДБ
      const res = axios
        .post(`http://localhost:4000/Man`, { ...form })
        .then((response) => {
          setForm(response.data);
          console.log(response.data);
        });
      form.family("");
      form.name("");
      form.fatherland("");
      form.group("");
      
      return res.data;
    } catch (e) {
      alert(error.message);
    }
  };

  return (
    <div>
      <title>Регистрация</title>

      <main>
        <h1>Регистрация</h1>
        <div class="form">
          <div class="row_g-35">
            <form class="row g-3">
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">
                  Фамилия
                </label>
                <input
                  required
                  placeholder="Ваша фамилия"
                  id="family"
                  type="text"
                  name="family"
                  class="form-control"
                  value={form.family}
                  onChange={changeHandler}
                />
              </div>

              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">
                  Имя
                </label>
                <input
                  required
                  placeholder="Ваше имя"
                  id="name"
                  type="text"
                  name="name"
                  class="form-control"
                  value={form.name}
                  onChange={changeHandler}
                />
              </div>

              <div class="col-md-4">
                <label for="validationDefault03" class="form-label">
                  Отечество
                </label>
                <input
                  required
                  placeholder="Ваше отечество"
                  id="fatherland"
                  type="text"
                  name="fatherland"
                  class="form-control"
                  value={form.fatherland}
                  onChange={changeHandler}
                />
              </div>

              <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">
                  Логин
                </label>
                <div class="input-group">
                  <input
                    required
                    placeholder="Введите логин"
                    id="login"
                    type="text"
                    name="login"
                    class="form-control"
                    value={form.login}
                    onChange={changeHandler}
                  />
                </div>
              </div>

              {/* 
              <div class="col-md-4">
                <label for="validationDefault05" class="form-label">
                  Телефон
                </label>
                <input type="phone" class="form-control" id="validationDefault05" required placeholder="+7 (XXX) XXX XXXX"/>
              </div>
               */}

              <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">
                  Пароль
                </label>
                <div class="input-group">
                  <input
                    required
                    placeholder="Введите пароль"
                    id="password"
                    type="password"
                    name="password"
                    class="form-control"
                    value={form.password}
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">
                  Группа
                </label>
                <div class="input-group">
                  <input
                    required
                    placeholder="Ваша группа"
                    id="group"
                    type="text"
                    name="group"
                    class="form-control"
                    value={form.group}
                    onChange={changeHandler}
                  />
                </div>
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

              <button
                class="btn btn-secondary"
                onClick={registerHandler}
                disabled={loading}
              >
                Зарегистрироваться
              </button>
              <div class="col-12"></div>
            </form>
          </div>
        </div>
      </main>

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
    </div>
  );
};
