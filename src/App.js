import React from "react";
import ListaPaises from "./components/ListaPaises";
import Pais from "./components/Pais";
import Globales from "./components/Globales";
import Button from "@material-ui/core/Button";
import Navbar from "./components/Navbar";
import  Typography  from "@material-ui/core/Typography";
import {Box,Grid} from "@material-ui/core";
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import {Icon, IconButton} from "@material-ui/core";
import "../src/assets/css/Principal.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
   
} from "react-router-dom";



function App() {


  

  return(





    

    <Router>
      <div className="App">

      <Navbar/>

      
      <Globales/>

      <Grid container spacing={2}>

        <Grid item xs = {12} sm={4} md={4} lg={4} xl={4} >
           <Button variant="contained" fullWidth color="secondary"
           href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public" 
         


           
           
           >
            ¿Como protegerse?
           </Button>
        </Grid>


        <Grid item xs = {12} sm={4} md={4} lg={4} xl={4} >
           <Button variant="contained" fullWidth color="secondary"           
           href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines" >
            Vacunas
           </Button>
        </Grid>


        <Grid item xs = {12} sm={4} md={4} lg={4} xl={4}  >
           <Button variant="contained" fullWidth color="secondary"
           href="https://www.who.int/home/cms-decommissioning">
            Consejos sobre viajes
           </Button>
        </Grid>

      </Grid>













      
        
        <Routes>

          <Route path= "/:Slug" element={<Pais/>}>           
            
          </Route>    

              <Route path="/"   element={<ListaPaises/>} >  
          </Route>

        </Routes>


      </div>
    </Router>


     
  );

}

export default App;
