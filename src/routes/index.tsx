import { BrowserRouter, Route } from "react-router-dom";

import { HomePage, NotFoundPage } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} exact />
      <Route path="/*" component={NotFoundPage} />
    </BrowserRouter>
  );
}

export default Router;
