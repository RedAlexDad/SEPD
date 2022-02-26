import React from "react";
// import 'material-css';
import {useRoutes} from './routes';

function App() {
    const routes = useRoutes(false)
    return (
        <div className = "container">
            {routes}
            <h1> Hello First main test</h1>
        </div>
    )
}

export default App;