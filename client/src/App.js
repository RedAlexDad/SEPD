import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RequestTranslatorTasks from "./pages/RequestTranslatorTasks";
import { useRoutes } from "../src/routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import {Authorization} from "./pages/Authorization";
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
  // const routes = useRoutes(true);
  const { token, login, logout, userID } = useAuth();
  const isAuthenficated = !!token;
  const routes = useRoutes(isAuthenficated);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userID,
        isAuthenficated,
      }}
    >
      <Router>
          {/* {isAuthenficated && <Authorization />} */}
        <div className="container">{routes}</div>
        <Route path="/request_tasks" element={<RequestTranslatorTasks />} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
