import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../page/home'
import Category from '../page/category'
import Search from '../page/search'

const App = props => {
    return(
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/category/:slug" component={Category}></Route>
            <Route path="/Search/:slug" component={Search}></Route>
          </Switch>
        </Router>
      )
    
    }
export default App;
