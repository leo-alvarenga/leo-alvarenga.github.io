import { Switch, BrowserRouter, Route } from "react-router-dom";

import { Home, NotFound } from "../pages";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
