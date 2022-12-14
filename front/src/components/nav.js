import * as React from 'react';
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Button } from '@mui/material';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

const pages = ['Pokedex', 'Pokemons', 'Admin'];

function Menu() {
  return (
    <AppBar position="static" color="error" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
          >
            <CatchingPokemonTwoToneIcon fontSize="large"/>
          </Typography>
          <Typography variant="h6" component="div" align="center" sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.5rem',
            textDecoration: 'none',
          }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button component={Link}
                  key={page}
                  Link to={"../"+String(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Menu;