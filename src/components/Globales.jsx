import React from "react";
import { useState, useEffect } from 'react';

import { Button, Icon , IconButton, Typography,withWidth,Grid, Container } from "@material-ui/core";
import { createTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';





const Globales= () =>
{

    let theme = createTheme(
        {
        typography:{htmlFontSize:17}          
        
        }  
           
    );
    theme = responsiveFontSizes(theme);



        







    const [datos, setDatos] = useState([])


    useEffect(()  => 
    {
        obtenerGlobales()
    }, [])


  
    const obtenerGlobales = async () => {
     
        const data = await fetch ('https://api.covid19api.com/summary')
        const elementos = await data.json()
        setDatos(elementos.Global)
    
      }

 

    return(




        <main className="container d-flex"  spacing={15}  > 


        
        <div className="globales" spacing={15}>  
        
              

        <ThemeProvider theme={theme}  >
        <Typography variant="h5"  align="center" color="primary" paragraph >
              Covid
              </Typography>

              <Typography variant="h1"  align="center" color="primary" >
              Resultados Globales
             </Typography>
        </ThemeProvider>


         <hr/>
            
         <div  className="row" >

              
      
        <div className=" col-md-3  ">    
        
         <div className="card" theme={theme}>
      

        

       
         <ThemeProvider >
         <Typography variant="h3"   align="center"  theme={theme} paragraph>
               New Confirmed
          </Typography>
          </ThemeProvider>

          <ThemeProvider>
          <Typography variant="h4"  align="center"   color="secondary" theme={theme}>
              {datos.NewConfirmed}
          </Typography>   
          </ThemeProvider>                       
               
          

         </div>  </div>

         


           
          

         <div className="card col-md-3 "  >  

           
     
         <Typography variant="h3"  align="center" paragraph > 
         Total Confirmed
          </Typography>

          <Typography variant="h4"  align="center" color="secondary">
          {datos.TotalConfirmed}
          </Typography>    
        
     
         </div>
        
       
         


         <div className="card col-md-3 "  >

         <Typography variant="h3"  align="center" paragraph>
         Recent Deaths
          </Typography>

          <Typography variant="h4"  align="center" color="secondary">
          {datos.NewDeaths}
          </Typography>          

         </div>




         <div className="card col-md-3 ">

         <Typography variant="h3"  align="center"  paragraph >
               Total Deaths
          </Typography>

          <Typography variant="h4"  align="center" color="secondary"  >
          {datos.TotalDeaths}
          </Typography>                 

         </div>
         
         </div>


         


         </div>  

         </main>   


        
    );

    }

export default Globales;