import React from 'react';
// Redirect - это сайт, в котором пользователь попадается, если нет нужного сайта. Т.е по умолчанию
// Для работы нужно установить версию npm i react-router-dom@5.0.0
// Вместо Navigate - Redirect, т.к версия другая
// Вместо Routes - Switch, т.к версия другая
import {Switch, Route, Redirect} from 'react-router-dom'
// import {Main} from './pages/Main';
import {Main} from './pages/Main';
import {RequestTranslator} from './pages/RequestTranslator';
import {Contact_personal} from './pages/Contact_personal';

// Возврат полученный результат
export const useRoutes = isAuthenficated => {
    if(isAuthenficated) {
        return (
            // Компонент, который импортируется из react-router-dom
            <Switch>
                {/* Сайт с ссылкой .../main */}
                <Route path= "/main" exact>
                    <Main/>
                </Route>
                {/* Сайт с ссылкой .../request */}
                <Route path= "/request" exact>
                    <RequestTranslator/> 
                </Route>
                {/* Сайт с ссылкой .../contact_personal */}
                <Route path= "/contact_personal" exact>
                    <Contact_personal/> 
                </Route>
                {/* Переходит в сайт, если из вышеперечисленных нет */}
                <Redirect to = "/main" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path= "/" exact>
            <main/>
            </Route>
            <Redirect to = "/" /> 
        </Switch>
    )
}