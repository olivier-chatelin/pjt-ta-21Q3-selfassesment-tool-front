import  React from 'react';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import MyCheckpoint from "./pages/MyCheckpoint";
import Checkpoints from "./pages/Chekpoints";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Results from "./pages/Results";
import {getStorageValue} from "./hooks/useLocalStorage";
function App() {
    let fullName = getStorageValue('fullName',null);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {fullName && <Intro/>}
                    {!fullName && <Home/>}
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
