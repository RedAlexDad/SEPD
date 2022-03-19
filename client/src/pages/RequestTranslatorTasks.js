import React, { useEffect, useState } from 'react';
import { useHttp } from "../hooks/http.hook";
import axios from 'axios';

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

// Получение данные оттуда
// import user from '../../../models/user';

export const RequestTranslatorTasks = () => {
  const { loading, request } = useHttp();

  const [post, setPost] = useState([])

  useEffect(() => {
    const res = axios.get('http://localhost:3000/request')
      .then(response => {
        setPost(response.data)
        console.log(response.data)
      });
    return res.data
  }, [])

  // Работа с запросами
  const [form, setForm] = useState({
    // Содержание структуры
    building: "",
    auditorium: "",
    discipline: "",
    schedule: "",
  });

  return (
    <div v-else-if="contacts.length">
      <div class="card mb-3" v-for="contact in contacts">
        {form.map((p) => {
              return (
                <div>
                  <p>
                    {p.building}
                    {p.auditorium}
                    {p.discipline}
                    {p.schedule}
                  </p>
                </div>
              );
            })}
          {/* <button class="btn btn-primary">Отметить</button> */}
          {/* <button class="btn btn-danger">Удалить</button> */}
        </div>
      </div>
  );
};
