import React from 'react';
// Redirect - это сайт, в котором пользователь попадается, если нет нужного сайта. Т.е по умолчанию
// Для работы нужно установить версию npm i react-router-dom@5.0.0
// Вместо Navigate - Redirect, т.к версия другая
// Вместо Routes - Switch, т.к версия другая
import {Switch, Route, Redirect} from 'react-router-dom'
// import {Main} from './pages/Main';
import {Main} from './pages/Main';
import {RequestTranslator} from './pages/RequestTranslator';
import {ContactPersonal} from './pages/ContactPersonal';
import {RequestTranslatorTasks} from './pages/RequestTranslatorTasks';
import {FeedBack} from './pages/FeedBack';
import {Registration} from './pages/Registration';
import {Authorization} from './pages/Authorization';
import {Translator} from './pages/Translator';
import {TestRole} from './pages/TestRole';

// Возврат полученный результат
export const useRoutes = isAuthenficated => {
    if(isAuthenficated) {
        return (
            // Компонент, который импортируется из react-router-dom
            <Switch>
                {/* Сайт с ссылкой .../main */}
                <Route path= "/main/" exact>
                    <Main/>
                </Route>
                {/* Сайт с ссылкой .../request */}
                <Route path= "/request" exact>
                    <RequestTranslator/> 
                </Route>
                {/* Сайт с ссылкой .../request_tasks */}
                <Route path= "/request_tasks" exact>
                    <RequestTranslatorTasks/> 
                </Route>
                {/* Сайт с ссылкой .../feed_back */}
                <Route path= "/feed_back" exact>
                    <FeedBack/> 
                </Route>
                {/* Сайт с ссылкой .../contact_personal */}
                <Route path= "/contact_personal" exact>
                    <ContactPersonal/> 
                </Route>
                {/* Сайт с ссылкой .../registration */}
                <Route path= "/regist" exact>
                    <Registration/> 
                </Route>
                {/* Сайт с ссылкой .../login */}
                <Route path= "/login" exact>
                    <Authorization/> 
                </Route>
                {/* Сайт с ссылкой .../translator */}
                <Route path= "/translator" exact>
                    <Translator/> 
                </Route>
                {/* Сайт с ссылкой .../test_role */}
                <Route path= "/test_role" exact>
                    <TestRole/> 
                </Route>
                {/* Переходит в сайт, если из вышеперечисленных нет */}
                <Redirect to = "/main" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path= "/" exact>
                <Authorization/>
            </Route>
            <Redirect to = "/" /> 
        </Switch>
    )
}