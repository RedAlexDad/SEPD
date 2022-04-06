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
  const [post, setPost] = useState([]);
  const [id_request, setIdRequest] = useState("");
  const [building, setBuilding] = useState("");
  const [auditorium, setAuditorium] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [schedule, setSchedule] = useState("");
  const [DataTime, setDataTime] = useState("");

  const { family, name, fatherland, group } = useAuth();

  useEffect(() => {
    const res = axios
      .get("http://localhost:4000/request_tasks")
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    return res.data;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      id: Date.now(),
      family,
      name,
      fatherland,
      group,
      id_request,
      building,
      auditorium,
      discipline,
      schedule,
      DataTime,
    };

    const res = axios
      .post("http://localhost:4000/request_tasks", article)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
    setIdRequest(+id_request + 1);
    setBuilding("");
    setAuditorium("");
    setDiscipline("");
    setSchedule("");
    setDataTime("");
    return res.data;
  };

  // console.log(post);

  const [form, setForm] = useState({
    id: "",
    family: "",
    name: "",
    fatherland: "",
    group: "",
    id_request: "",
    building: "",
    auditorium: "",
    discipline: "",
    schedule: "",
    DataTime: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <title>Оформление заявок</title>

      <div class="p-3 mb-2 bg-light">
        <h1>Оформить заявление</h1>
        <form action="" required>
          <div class="d-grid gap-2 col-2 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Здание
              </label>

              {/* <select class="form-select" aria-label="Default select example">
                <option selected>Выберите здания</option>
                <option value="Главное здание">Главное здание</option>
                <option value="Учебно-лабораторный корпус">Учебно-лабораторный корпус</option>
                <option value="Спортивный комплекс">Спортивный комплекс</option>
                onChange={(e) => setBuilding(e.target.value)}
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
              </select> */}

              <FormSelect
                value={building}
                classBlock={"block mt-4"}
                classSelect={"form-select"}
                classLabel={"form-select mb-3"}
                type={"text"}
                classInput={"form-control select-input placeholder-active active"}
                placeholder={"Главное здание"}
                defaultValue={"Выберите здание"}
                onChange={(e) => setBuilding(e.target.value)}
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
            </div>
          </div>

          <div class="d-grid gap-2 col-2 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Аудитория
              </label>
              <FormInput
                classBlock={"block mt-1"}
                classLabel={"form_caption"}
                type={"text"}
                classInput={"form-control"}
                placeholder={"219"}
                value={auditorium}
                onChange={(e) => setAuditorium(e.target.value)}
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-2 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Дисциплина
              </label>
              <FormInput
                classBlock={"block mt-1"}
                classLabel={"form_caption"}
                type={"text"}
                classInput={"form-control"}
                placeholder={"УПСП"}
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-2 mx-auto">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Расписание
              </label>
              <FormSelect
                classBlock={"block mt-4"}
                classLabel={"form-select"}
                classSelect={"form-select"}
                type={"text"}
                classInput={"form-control--text"}
                placeholder={"10:15 - 12:00"}
                value={schedule}
                defaultValue={"Выберите время расписании"}
                onChange={(e) => setSchedule(e.target.value)}
                options={[
                  { value: "8:30 - 10:05", text: "8:30 - 10:05" },
                  { value: "10:15 - 11:50", text: "10:15 - 11:50" },
                  { value: "12:00 - 13:35", text: "12:00 - 13:35" },
                  { value: "13:50 - 15:25", text: "13:50 - 15:25" },
                  { value: "15:40 - 17:15", text: "15:40 - 17:15" },
                  { value: "17:25 - 19:00", text: "17:25 - 19:00" },
                ]}
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-2 mx-auto">
            <div class="mb-3">
              <form>
                <div class="form-group">
                  <label for="inputDate">Введите дату:</label>
                  <FormInput
                    classBlock={"block mt-1"}
                    classLabel={"form-label"}
                    type={"date"}
                    classInput={"form-control form-icon-trailing"}
                    value={DataTime}
                    onChange={(e) => setDataTime(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="text-center">
            <div class="d-grid gap-2 col-3 mx-auto">
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
