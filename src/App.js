import  React from 'react';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import Home from "./pages/Home";
import MyCheckpoint from "./pages/MyCheckpoint";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route  path="/checkpoints/:id">
                    <MyCheckpoint />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
