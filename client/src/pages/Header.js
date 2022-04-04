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
import { $token, $ready, $userId, $family, $name, $fatherland, $group } from './../pages/Authorization'

// Для переключения других веб страниц
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";

import { useAuth, $dataDB } from "../hooks/auth.hook";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
 
export const Header = () => {

  console.log($dataDB)

  const history = useHistory();
  const auth = useContext(AuthContext);
  const message = useMessage();

  const {token, userId, family, name, fatherland, group} = useAuth();
  console.log("token:", token);
  console.log("userId:", userId);
  console.log("family:", family);
  console.log("name:", name);
  console.log("fatherland:", fatherland);
  console.log("group:", group);

  // const [$dataDB] = useState();
  
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };

  const [Man, setMan] = useState();

  // const [ form, setForm] = useState([]);
   // useEffect(() => {
  //   message(error);
  //   clearError();
  // }, [error, message, clearError]);
  
  // const loginHandler = async () => {
  //   try {

  //   } catch (e) {
  //     alert(error.message);
  //   }
  // };

  // const [Man, setMan] = useState({
  //   family: "",
  //   name: "",
  //   fatherland: "",
  //   group: "",
  // });
  
  // const { family, name, fatherland, group, userID } = useAuth();
  // const { family, name, fatherland, group } = useState();

  
  // const [userID, setuserID] = useAuth();
  // const [family, setFamily] = useAuth();
    

  // useEffect(() => {
  //   const res = axios
  //     .get(`http://localhost:4000/Man/`)
  //     // .get("http://localhost:5000/api/auth/login", {...form})
  //     .then((response) => {
  //       setMan(response.data);
  //       // setForm(response.data);
  //       console.log(response.data)
  //       // const data = ("/api/auth/login", "GET", { ...form });
  //       // auth.login(data.token, data.userId, data.family, data.name, data.fatherland, data.group);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   return res.data;
  // }, []);

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
           <h1>
            {/* {Man.map((p) => {
              return(
              <div key={p.id}>
              <div>{p.family}</div>
              <div>{p.name}</div>
              <div>{p.fatherland}</div>
              <div>{p.group}</div>
              </div>
            )
            })
            } */}
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
