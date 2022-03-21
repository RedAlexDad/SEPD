import React from 'react';
// Подключаем картинку
import logotip from '../image/logotip.png';
import BMSTU from '../image/BMSTU.png';
import symbol from '../image/symbol.png';
import teacerandtranslater from '../image/teacerandtranslater.jpeg';
import translater from '../image/translater.jpg';
// Подключаем css для визуала
import '../css/styles.css';

// Для переключения других веб страниц
import { Link } from "react-router-dom";

export const Main = () => {
    return (
        <div>
            <title>Главная</title>
                    <header>
                        <div class="LOGO2">
                            <img src={logotip} alt={"logotip"}/> 
                        </div>
                    </header>
                    <center>
                        <div class="menu">
                            <ul>
                                <li><a class="color-menu" href>
                                <Link to="/main">Главная</Link></a></li>
                                <li><a class="color-menu" href>
                                <Link to="/request">Запись</Link></a></li>
                                <li><a class="color-menu" href>
                                <Link to="/contact_personal">Контакты</Link></a></li>
                                <li><a class="color-menu" href>
                                <Link to="/main">Войти</Link></a></li>
                            </ul>
                        </div>
                        <div class="position-relative photo-text">
                            <div class="photo">
                                <img src={BMSTU} alt={"BMSTU"}/> 
                                    <div class="position-absolute top-50 start-50 translate-middle">
                                        <p>Запись к переводчику в МГТУ им. Н. Э. Баумана</p>
                                    </div>
                            </div>
                        </div>
                    </center>

                    <main>
                        <center>

                            <div>
                                <div class="textandphoto">
                                    <div class="photo1">
                                        <img src={teacerandtranslater} alt={"teacerandtranslater"}/> 
                                    </div>
                                    <div class="text0">
                                        <p>Сурдопереводчикисопровождают преподавателей во время ведения пар. В штате факультета сейчас 13 переводчиков. Это самая многочисленная команда среди всех вузов, где обучаются студенты с нарушением слуха. За долгие годы работы в МГТУ переводчиками даже была разработана технологическая база жестов инженерных терминов. Например, термин «дифракция» может быть понятен любому студенту факультета благодаря языку жестов.</p>
                                    </div>
                                    <div class="photo2">
                                        <img src={translater} alt={"translater"}/> 
                                    </div>
                                </div>
                            </div>

                            <footer>
                                <div class="blok4">
                                    <div class="primer0">
                                        <img src={symbol} alt={"symbol"}/>  
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

                        </center>
                    </main>

                </div>
                )
}
