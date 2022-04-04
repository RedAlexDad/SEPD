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

export const Authorization = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();

  const [form, setForm] = useState({
    login: "",
    password: "",
    id: "",
    family: "",
    name: "",
    fatherland: "",
    group: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });

      auth.login(
        data.token,
        data.userId,
        data.family,
        data.name,
        data.fatherland,
        data.group
      );
      // alert(data.message);
    } catch (e) {
      alert(error.message);
    }
  };

  return (
    <div class="p-3 mb-2 bg-light">
      <head />
      <title>Авторизация</title>

      <header>
        <div class="LOGO2">
          <img src={logotip} alt={"logotip"} />
        </div>
      </header>
      <center>
        <h1>Авторизация</h1>

        <div class="parent">
          <form>
            <div class="col-md-4">
              <div class="form-group">
                <input
                  required
                  placeholder="Введите login"
                  id="login"
                  type="text"
                  name="login"
                  className="form-control"
                  value={form.login}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <input
                  required
                  placeholder="Введите пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={changeHandler}
                />
              </div>
            </div>
            {/*               
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Запомнить
                </label>
              </div> */}

            <div className="text-center">
              <div class="d-grid gap-2 col-3 mx-auto">
                <button
                  className="btn btn-warning"
                  style={{ marginRight: 0 }}
                  disabled={loading}
                  onClick={loginHandler}
                >
                  Войти
                </button>
              </div>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};
