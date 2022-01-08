import  React from 'react';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import MyCheckpoint from "./pages/MyCheckpoint";
import Checkpoints from "./pages/Chekpoints";
import Home from "./pages/Home";
import Results from "./pages/Results";
function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/checkpoints">
                    <Checkpoints/>
                </Route>
                <Route  path="/checkpoints/:id">
                    <MyCheckpoint />
                </Route>
                <Route  path="/results/:id">
                    <Results/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
