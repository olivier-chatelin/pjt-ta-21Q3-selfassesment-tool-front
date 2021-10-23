import  React from 'react';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import MyCheckpoint from "./pages/MyCheckpoint";
import Checkpoints from "./pages/Chekpoints";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/checkpoints">
                    <Checkpoints/>
                </Route>
                <Route  path="/checkpoints/:id">
                    <MyCheckpoint />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
