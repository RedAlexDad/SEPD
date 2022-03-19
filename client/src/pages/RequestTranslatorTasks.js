import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';
// import user from '../../../models/user.js';

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
  const {loading, request} = useHttp()
  // Работа с запросами
  const [form, setForm] = useState({
      // Содержание структуры
      building: '', auditorium: '', discipline: '', schedule: '',
  })

  // Обработка данные
  const hander_building = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
}
  const registerHandler = async () => {
    try {
        const data = await request('/api/request', 'POST', {...form});
        // const data = await response('/api/request', 'POST', {...form});
        // console.log('Data: ', data);
    }
    catch (error) {
        console.log('ERROR! Nothing is happening!');
    }
  }

  return (
    <div v-else-if="contacts.length">
      <div class="card mb-3" v-for="contact in contacts">
        <div class="card-body">
          {/* <h5 class="card-title" :style="{color: contact.marked ? 'red' : 'black'}">{{contact.name}}</h5> */}
          {/* <h5 class="card-title">{{ discipline }}</h5> */}
          {/* <p class="card-text">{{ auditorium }}</p> */}
          <button class="btn btn-primary">Отметить</button>
          <button class="btn btn-danger">Удалить</button>
        </div>
      </div>
    </div>
    // <p>Контактов пока нет</p>
  )
};
