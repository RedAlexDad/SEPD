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

let $token = null;
let $ready = null;
let $userId = null;
let $family = null;
let $name = null;
let $fatherland = null;
let $group = null;

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

  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);
  const [family, setFamily] = useState(null);
  const [name, setName] = useState(null);
  const [fatherland, setFatherland] = useState(null);
  const [group, setGroup] = useState(null);

  // const [id, setId] = useState(Date.now());

  // const [Man, setMan] = useState({
  //   id: "",
  //   family: "",
  //   name: "",
  //   fatherland: "",
  //   group: "",
  // });

  // console.log(id);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    // setMan({ ...Man, [event.target.name]: event.target });
  };

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  // useEffect(() => {
  //   const res = axios
  //   .then((response) => {
  //   setForm(response.data);
  //   console.log(response.data)
  //   })
  //   .catch(function (error) {
  //     message(error);
  //     clearError();
  //   });
  //   return res.data;
  // }, [error, message, clearError]);

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
      const res = axios
        .post(`http://localhost:4000/${data.userId}`, { ...form })
        .then((response) => {
          setForm(response.data);
          setToken(response.data.token);
          setUserId(response.data.id);
          setFamily(response.data.family);
          setName(response.data.name);
          setFatherland(response.data.fatherland);
          setGroup(response.data.group);
          console.log(response.data);
        });
      console.log("data.userId", data);
      console.log(name);

      form.id("");
      form.family("");
      form.name("");
      form.fatherland("");
      form.group("");
      $token = token;
      $userId = userId;
      $family = family;
      $name = name;
      $fatherland = fatherland;
      $group = group;
      return res.data;

      // const res = axios
      //   .post("http://localhost:4000/main", { ...Man })
      //   .then((response) => {
      //     setMan(response.data);
      //     console.log(response.data);
      //   });
      // Man.family("");
      // Man.name("");
      // Man.fatherland("");
      // Man.group("");
      // return res.data;
    } catch (e) {
      alert(error.message);
    }
  };
  console.log($name);

  // useEffect(() => {
  // const res = axios
  //   .get("http://localhost:5000/main")
  //   .then((response) => {
  //     setMan(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // return res.data;
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const article = {
  //     id: Date.now(),
  //     Man,
  //     family,
  //     name,
  //     group,
  //   };

  //   const res = axios
  //     .post("http://localhost:4000/main", article)
  //     .then((response) => {
  //       setMan(response.data);
  //       console.log(response.data);
  //     });
  //     setFamily("");
  //     setName("");
  //     setFatherland("");
  //     setGroup("");
  //   return res.data;
  // };

  // console.log(Man);

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
            {/* 
              <div class="form-group">
                <button class="btn btn-outline-dark">
                  <Link to="/regist">Регистрация</Link>
                </button>
              </div>
               */}
          </form>
        </div>
      </center>
    </div>
  );
};

export { $token, $ready, $userId, $family, $name, $fatherland, $group };
