import React, { lazy, Suspense } from "react";
//import { Route, BrowserRouter, Switch } from "react-router-dom";
//import IpfsRouter from "ipfs-react-router";
//import Loading from "./Loading";
//const Home = lazy(() => import("./Home"));
import Home from "./Home";

const App = () => {
  return (
    <div>
      {
        //<BrowserRouter basename={process.env.PUBLIC_URL}>
        //<Switch>
        //<Suspense fallback={<Loading />}>
        //<Route path="/" exact component={Home}></Route>
        //</Suspense>
        //</Switch>
        //</BrowserRouter>
      }
      <Home />
    </div>
  );
};

export default App;
