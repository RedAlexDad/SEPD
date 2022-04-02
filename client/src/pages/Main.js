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
        <meta charset="UTF-8" />
        {/* <link rel="stylesheet" href="styles.css" /> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"/>  
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.1/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.7.14/js/bootstrap-datetimepicker.min.js"></script>
        
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
                                <Link to="/authorization">Войти</Link></a></li>
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
