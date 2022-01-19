import React from "react";
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";



const ListaPaises = () =>
{

    const [paises, setPaises] = useState([]) //hicimos un state que simplemente va tener (datos)
    


    useEffect( () => //con USE EFFECT hacemos el llamado a la api 
    {
        //console.log("useEffect")
        obtenerDatosPaises() //llamas la funcion y la info la mandas a variable setPaises
        
    },[])
  

const obtenerDatosPaises = async () => //para ejecuatr el obtener datos ya sabemos que podemos utilizar el usseEfect llamandolo de ahi 
{//
   const data = await fetch ("https://api.covid19api.com/summary")  
   const elementos = await data.json() // con el await data. json vamos a tener la informacion y lo guardamos en la variable users
   //console.log (users)
   setPaises(elementos.Countries) // vamos incorporar la informacion ya de ahi hacemos el div card en el return 
}

    return(



         
        
        <div className="content" id="content" spacing={20} >


          <div  className="row row-cols-1 row-cols-md-3 g-4" spacing={10} >

           
                      
              
                {paises.map ((item,index) =>  //hacemos un listado con toda la info que obtuvimos          
                         
               
               
               <div className="card border-warning"   key={index} >            
                <p> {item.Country} </p>
                <p> codigo pais: {item.CountryCode} </p>
                <p> pais: {item.Slug}</p>
                <p>Nuevos confirmados: {item.NewConfirmed}</p>
                <p>Total confirmados:{item.TotalConfirmed}</p>
                <p>Nuevas Muertes: {item.NewDeaths}</p>
                <p>Total Recuperados: {item.TotalRecovered} </p>               
                        
               <Button
                      color="primary"
                      variant="contained"
                      size="medium" 
                      href={`/${item.Slug}`}            
               > 
             Ir
                </Button>

                </div>
                
                        
                )}
                

         
         
         
              </div>
              </div>
              
           



      
        
    );
}

export default ListaPaises;