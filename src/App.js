import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Loading from "./Loading";
const Home = lazy(() => import("./Home"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Route path="/" exact component={Home}></Route>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
