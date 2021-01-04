import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../views/home/home'
import About from '../views/about/about'
import NotFoundPage from '../views/not-found-page/not-found-page'

const routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default routes;