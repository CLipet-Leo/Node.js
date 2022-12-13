import * as React from 'react';
import { Link } from "react-router-dom";
import { Box,AppBar,Toolbar,Typography } from '@mui/material';

function Menu(){
    return <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div"sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            <ul>
                <li><Link to="../">Acceuil</Link></li>
                <li><Link to="../pokedex">Pokédex</Link></li>
                <li><Link to="../pokemons">Pokémons</Link></li>
                <li><Link to="../admin">Page de gestion</Link></li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
        {/* <nav>
        <ul>
            <li><Link to="../">Acceuil</Link></li>
            <li><Link to="../pokedex">Pokédex</Link></li>
            <li><Link to="../pokemons">Pokémons</Link></li>
            <li><Link to="../admin">Page de gestion</Link></li>
        </ul>
    </nav> */}
    </Box>
    </>
}

export default Menu;