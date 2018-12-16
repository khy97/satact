import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from '../Start/Start';
import QuestionList from '../QuestionList/QuestionList';


class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Start} />
                    <Route exact path="/questions" component={QuestionList} />
                    {/* <Route path="/result" component={QuestionList} /> */}
                </Switch>
            </Router>
        );
    }
}

export default App;
