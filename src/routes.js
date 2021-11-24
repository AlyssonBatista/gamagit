import React from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link
} from "react-router-dom"; 

import Repositories from "./Repositories";

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/Repositories' component={Repositories}/>
      </Switch>
    </BrowserRouter>
  )
}


