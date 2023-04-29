import React from 'react'
import {AppBar, Toolbar , styled} from '@mui/material'
const Container  =styled(AppBar)`background: black;
height: 9vh ;`

export default function Header() {
  return (
    <><Container>
        <Toolbar className = "toolbar">
            Code Pane
            <nav className= "Navabar">
                 <a href='#'>About Us</a>
                 <a href='#'>Contact</a>
            </nav>
        </Toolbar>
        </Container></>
  )
}
