import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {useRoutes} from './routes';
// import 'material-css';

// Для работы нужно установить версию npm i react-router-dom@5.0.0

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