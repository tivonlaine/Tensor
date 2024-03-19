import HomePage from "../homepage";
import React from "react";
import Options from "../options";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Information from "../information";

function App(){

return(

  <Router>

    <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/company/:companyName" element={<Information/>}></Route>

    </Routes>
  
  </Router>







)





}

export default App;