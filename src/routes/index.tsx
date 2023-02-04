import { BrowserRouter, Route } from "react-router-dom";

import { Home, NotFound } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/*" component={NotFound} />
    </BrowserRouter>
  );
}

export default Router;
