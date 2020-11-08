import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../views/home/home'
import About from '../views/about/about'

const routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
  </Switch>
);

export default routes;