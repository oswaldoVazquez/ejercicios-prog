import React from "react";
import {AppBar, Toolbar, Typography, makeStyles,IconButton} from "@material-ui/core"


const useStyles= makeStyles( () =>(
  {

    root:{
      flexgrow:1
    },
     title:{
       flexGrow:1
     },
     imagen:{
       borderRadius:"40%"
     }





  }
));




const Navbar = () =>{

  const classes= useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
              <Toolbar  >
                <Typography variant="h2" className={classes.title}   > 
                
                   COVID - 19
                </Typography>
                <IconButton color="inherit"> 
                        <img src={require(`../assets/img/covid19.png`)} width="40px" height="40px" className={classes.imagen}/>                     
                        
                    </IconButton>

              </Toolbar>
            </AppBar>


        </div>



    )



}

export default Navbar;