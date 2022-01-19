import React from "react";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from "@material-ui/core/Button";

const Pais = () => 
{

    useEffect(()  => 
    {
        obtenerPais()
    },[])

   let {Slug}= useParams ();
   const [Pais, setPais] = useState([])

  
    const obtenerPais= async () => {
     
        const data = await fetch (`https://api.covid19api.com/dayone/country/${Slug}/status/confirmed`)
        const elementos = await data.json()
        setPais(elementos)
    
      }

    return(



        <div className="content" id="content" >  
 
           <Button
                      color="primary"
                      variant="contained"
                      size="medium" 
                      href={`/`}  
                     
                              
               > 
               Regresar             
           </Button>


        <div  className="row row-cols-1 row-cols-md-3 g-4 " >


        
       
         <h1 className="titulos"> {Slug} </h1> 

         
         
    

         



        { //hacemos un listado con toda la info que obtuvimos 
                 
                 
          
                 Pais.map ((item,index) => 




                        <li className="contenidoPaises"  text="center"   key={index}>
                           Codigo Pais: {item.CountryCode}                          
                           <p> Lat: {item.Lat}</p>
                           <p> Lon: {item.Lon} </p>
                           <p> Caso: {item.Cases} </p>
                           <p> Estatus:{item.Status} </p>                          

                          <hr/>
                                                                        
                        </li>
                        





                    )
        }
           

        </div>
        </div>






     );

     
    
            
}

export default Pais;