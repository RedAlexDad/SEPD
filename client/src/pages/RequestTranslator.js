import React, { useEffect, useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useAuth } from "../hooks/auth.hook";

import FormCheck from "../UI/FormCheck";
import FormInput from "../UI/FormInput";
import FormSelect from "../UI/FormSelect";
import RequsestTranslatorTasksStudent from "../UI/RequsestTranslatorTasksStudent";

import axios from "axios";
import DisplayCheck from "../UI/FormCheck";
import { useLocation } from "react-router-dom";

// Подключаем картинку
import logotip from "../image/logotip.png";
import BMSTU from "../image/BMSTU.png";
import symbol from "../image/symbol.png";
import teacerandtranslater from "../image/teacerandtranslater.jpeg";
import translater from "../image/translater.jpg";
// Подключаем css для визуала
import "../css/styles.css";
// Для переключения других веб страниц
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequestTranslator = () => {

  const auth = useContext(AuthContext);

  const [post, setPost] = useState([]);

  const { myID, family, name, fatherland, group, num_req } = useAuth();
  const { loading, request, error, clearError } = useHttp();

  // const [num_req_web, setNumReqWeb] = useState(Number);

  const [building, setBuilding] = useState("");
  const [auditorium, setAuditorium] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [schedule, setSchedule] = useState("");
  const [DataTime, setDataTime] = useState("");
  
  const [form, setForm] = useState({
    name: "",
    family: "",
    fatherland: "",
    group: "",
    id_request: "",
    number_request: "",
    building: "",
    auditorium: "",
    discipline: "",
    schedule: "",
    DataTime: "",
  });

  const handleSubmit = async () => {
    try {

      let number_request = +num_req  + 1;
      // num_req = number_request;

      // const data = await request("/api/auth/request", "PUT", number_request);
      // alert(data);
      // console.log("data (await): ", data);

      const article = {
        // Идентификатор пользователя
        // ID_user: myID,

        // ФИО и группа пользователя
        family,
        name,
        fatherland,
        group,

        // Идентификатор заявления
        id_request: Date.now(),
        // Номер заявления
        number_request,

        // Данные заявления
        building,
        auditorium,
        discipline,
        schedule,
        DataTime,
      };

      setForm({...form, article});

      const res = axios 
        // .post(`http://localhost:4000/request_tasks`, article)
        // .post(`http://localhost:4000/request_tasks_${myID}`, article)
        // .request("/api/auth/login", "POST", article)
        .post("/api/auth/request", article)
        .get("/api/auth/accounts", number_request)
        .put("/api/auth/accounts", number_request)
        .then((response) => {
          setForm(response.data);
          console.log(response.data);
          // alert(response.data);
        });
        return res.data;
    } catch (error) {
      error.preventDefault();
      alert(error.message);
      console.log(error.message);
    }
  };

  // console.log(post);

  return (
    <div>
      <title>Оформление заявок</title>

      <center>
        <div class="p-3 mb-6 bg-light">
          <h1>Оформить заявление</h1>

          <div class="bd-example">
            <form action="" required>
              <div class="form-group">
                {/* <div class="d-grid gap-2 col-4 mx-auto"> */}
                {/* <div class="mb-3"> */}
                <label for="formGroupExampleInput" class="form-label">
                  Здание
                </label>
                <FormSelect
                  value={building}
                  // value={form.building}
                  classBlock={"block mt-4"}
                  classSelect={"custom-select my-1 mr-sm-2"}
                  classLabel={"mr-sm-2"}
                  classInput={"custom-select my-1 mr-sm-2"}
                  type={"text"}
                  placeholder={"Главное здание"}
                  defaultValue={"Выберите здание"}
                  onChange={(e) => setBuilding(e.target.value)}
                  // onChange={(e) => {changeHandler(e.target.value)}}
                  options={[
                    { value: "Главное здание", text: "Главное здание" },
                    {
                      value: "Учебно-лабораторный корпус",
                      text: "Учебно-лабораторный корпус",
                    },
                    {
                      value: "Спортивный комплекс",
                      text: "Спортивный комплекс",
                    },
                  ]}
                />
                {/* </div> */}
              </div>

              <div class="form-group">
                {/* <div class="d-grid gap-2 col-4 mx-auto"> */}
                {/* <div class="mb-3"> */}
                <label for="formGroupExampleInput" class="form-label">
                  Аудитория
                </label>
                <FormInput
                  // classBlock={"mt-4"}
                  classLabel={"mt-4"}
                  type={"text"}
                  classInput={"form-control"}
                  placeholder={"219"}
                  value={auditorium}
                  // value={form.auditorium}
                  onChange={(e) => setAuditorium(e.target.value)}
                  // onChange={(e) => changeHandler(e.target.value)}
                />
                {/* </div> */}
              </div>

              <div class="form-group">
                {/* <div class="d-grid gap-2 col-4 mx-auto"> */}
                {/* <div class="mb-3"> */}
                <label for="formGroupExampleInput" class="form-label">
                  Дисциплина
                </label>
                <FormInput
                  // classBlock={"block mt-1"}
                  classLabel={"mt-4"}
                  type={"text"}
                  classInput={"form-control"}
                  placeholder={"УПСП"}
                  value={discipline}
                  // value={form.discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  // onChange={(e) => changeHandler(e.target.value)}
                />
                {/* </div> */}
              </div>

              <div class="form-group">
                {/* <div class="d-grid gap-2 col-4 mx-auto"> */}
                {/* <div class="mb-3"> */}
                <label for="col-auto my-1" class="form-label">
                  Расписание
                </label>
                <FormSelect
                  classBlock={"block mt-4"}
                  classSelect={"custom-select my-1 mr-sm-2"}
                  classLabel={"mr-sm-2"}
                  classInput={"custom-select my-1 mr-sm-2"}
                  type={"text"}
                  placeholder={"10:15 - 12:00"}
                  value={schedule}
                  // value={form.schedule}
                  defaultValue={"Выберите время расписании"}
                  onChange={(e) => setSchedule(e.target.value)}
                  // onChange={(e) => changeHandler(e.target.value)}
                  options={[
                    { value: "8:30 - 10:05", text: "8:30 - 10:05" },
                    { value: "10:15 - 11:50", text: "10:15 - 11:50" },
                    { value: "12:00 - 13:35", text: "12:00 - 13:35" },
                    { value: "13:50 - 15:25", text: "13:50 - 15:25" },
                    { value: "15:40 - 17:15", text: "15:40 - 17:15" },
                    { value: "17:25 - 19:00", text: "17:25 - 19:00" },
                  ]}
                />
                {/* </div> */}
              </div>

              <div class="form-group">
                {/* <div class="d-grid gap-2 col-4 mx-auto"> */}
                {/* <div class="mb-3"> */}
                {/* <div class="formGroupExampleInput"> */}
                  <label for="inputDate" class="form-label">Введите дату:</label>
                  <FormInput
                    classSelect={"custom-select my-1 mr-sm-2"}
                    classLabel={"mt-4"}
                    classInput={"custom-select my-1 mr-sm-2"}
                    type={"date"}
                    value={DataTime}
                    // value={form.DataTime}
                    onChange={(e) => setDataTime(e.target.value)}
                    // onChange={(e) => changeHandler(e.target.value)}
                  />
                {/* </div> */}
                {/* </div> */}
              </div>

              <div class="form-group">
                <div className="text-center">
                  {/* <div class="d-grid gap-2 col-4 mx-auto"> */}
                  <button
                    class="btn btn-warning"
                    // Отправка запроса
                    onClick={handleSubmit}
                  >
                    Отправить{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </center>
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
