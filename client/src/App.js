import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutes} from '../src/routes';
// import 'material-css';

// Для работы нужно установить версию npm i react-router-dom@5.0.0
// Если не удается запускать сервер, npm start, т.е компилятор не видит
/*
> client_react@0.1.0 start > react-scripts start "react-scripts" 
не является внутренней или внешней командой, 
исполняемой программой или пакетным файлом.
*/
// То нужно переустановить npm, npm i

// npm run dev - запускать сервер
// Если сервер не работает, тогда установить npm, npm i

function App() {
    const routes = useRoutes(true)
    return (
        <Router>
            <div className = "container">
                {routes}
            </div>
        </Router>
    )
}

export default App;