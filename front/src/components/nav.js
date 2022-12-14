import * as React from 'react';
import { Link } from "react-router-dom";
import { Box,AppBar,Toolbar,Typography } from '@mui/material';

function Menu(){
    return <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="error" >
        <Toolbar>
          <Typography variant="h6" component="div" align="center" sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.5rem',
              textDecoration: 'none',
            }}>
              <div className='table'>
                <ul className='no-bullets' id="horizontal-list">
                  <li><Link to="../">Accueil</Link></li>
                  <li><Link to="../pokedex">Pokédex</Link></li>
                  <li><Link to="../pokemons">Pokémons</Link></li>
                  <li><Link to="../admin">Page de gestion</Link></li>
                </ul>
              </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
}

export default Menu;