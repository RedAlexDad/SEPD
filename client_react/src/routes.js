import React from 'react';
// Redirect - это сайт, в котором пользователь попадается, если нет нужного сайта. Т.е по умолчанию
// Вместо Redirect - Navigate, т.к версия устарела
// Вместо Switch - Routes, т.к версия устарела
import {Switch, Route, Redirect} from 'react-router-dom'
import {Main} from './pages/Main';
import {Request} from './pages/Request';
import {Sucessifull} from './pages/Sucessifull';

// Возврат полученный результат
export const useRoutes = isAuthenficated => {
    if(isAuthenficated) {
        return (
            // Компонент, который импортируется из react-router-dom
            <Switch>
                <Route path= "/main" exact>
                    <Main/>
                </Route>
                <Route path= "/request" exact>
                    <Request/> 
                </Route>
                <Route path= "/sucessifull" exact>
                    <Sucessifull/> 
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