import React from "react";

import Avakian from "../image/Avakian.jpg";
import Kosyan from "../image/Kosyan.png";
import Bardakova from "../image/Bardakova.jpeg";
import Avakian2 from "../image/Avakian2.jpg";
import Sharafanenko from "../image/Sharafanenko.jpg";
import Vishnyakova from "../image/Vishnyakova.jpg";
import Usharov from "../image/Usharov.jpg";
import Old from "../image/Old.jpeg";
import Magomedsharipova from "../image/Magomedsharipova.jpg";
import Golovanova from "../image/Golovanova.png";
import symbol from "../image/symbol.png";
// Подключаем css для визуала
import "../css/styles.css";
// Для переключения других веб страниц
import { Link } from "react-router-dom";


export const Contact_personal = () => {
  return (
    <div>
      <title>Запись</title>

      <body>
        <header>
          <div class="LOGO2">
            <img src={symbol} alt={"symbol"} />
          </div>
        </header>
        <center>
          <div class="menu">
            <ul>
              <li>
                <a
                  class="color-menu"
                  href="http://127.0.0.1:5500/SEPD/index1/index.html">
                  <Link to="/main">Запись</Link>
                </a>
              </li>
              <li>
                <a
                  class="color-menu"
                  href="http://127.0.0.1:5500/SEPD/index2/index.html">
                  <Link to="/main">Главная</Link>
                </a>
              </li>
              <li>
                <a
                  class="color-menu"
                  href="http://127.0.0.1:5500/SEPD/index3/index.html">
                  <Link to="/contact_personal">Контакты</Link>
                </a>
              </li>
              <li>
                <a
                  class="color-menu"
                  href="http://127.0.0.1:5500/SEPD/index4/index.html">
                  <Link to="/main">Войти</Link>
                </a>
              </li>
            </ul>
          </div>

          <div class="parent">
            <div class="child">
              <img src={Avakian} alt={"Avakian"} />
              <div class="nadtext">
                <p class="fs-4">Авакян Татьяна Гарегиновна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child">
              <img src={Kosyan} alt={"Kosyan"} />
              <div class="nadtext2">
                <p class="fs-4">Косян Татьяна Викторовна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child">
              <img src={Sharafanenko} alt={"Sharafanenko"} />
              <div class="nadtext3">
                <p class="fs-4">Шарафаненко Дарья Валерьевна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child2">
              <img src={Bardakova} alt={"Bardakova"} />
              <div class="nadtext">
                <p class="fs-4">Бардакова Татьяна Викторовна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child2">
              <img src={Vishnyakova} alt={"Vishnyakova"} />
              <div class="nadtext2">
                <p class="fs-4">Вишнякова Ольга Николаевна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child2">
              <img src={Usharov} alt={"Usharov"} />
              <div class="nadtext3">
                <p class="fs-4">Ушаров Ростислав Сергеевич</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child3">
              <img src={Old} alt={"Old"} />
              <div class="nadtext">
                <p class="fs-4">Старых Любовь Петровна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child3">
              <img src={Magomedsharipova} alt={"Magomedsharipova"} />
              <div class="nadtext2">
                <p class="fs-4">Магомедшарипова Сайгат Гусейновна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child3">
              <img src={Avakian2} alt={"Avakian2"} />
              <div class="nadtext3">
                <p class="fs-4">Авакян Светлана Гарагиновна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
            <div class="child4">
              <img src={Golovanova} alt={"Golovanova"} />
              <div class="nadtext3">
                <p class="fs-4">Голованова Екатерина Вячеславовна</p>
              </div>
              <div class="ssilka">
                <p>
                  <a href="#" class="color text-decoration-none">
                    Связаться
                  </a>
                </p>
              </div>
            </div>
          </div>
        </center>

        <main>
          <center>
            <footer>
              <div class="blok4">
                <div class="primer1">
                  <p class="fs-5">
                    105005, Москва, 2-я Бауманкая ул., д. 5, стр. 1
                  </p>
                </div>
                <div class="primer2">
                  <p class="fs-5">8 (499)-263-63-91</p>
                </div>
                <div class="primer3">
                  <p class="fs-5">bauman@bmstu.ru</p>
                </div>
              </div>
            </footer>
          </center>
        </main>
      </body>
    </div>
  );
};
