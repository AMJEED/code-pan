import React from 'react'
import Editor from './Editor'
import { Box, stepButtonClasses } from '@mui/material'
import styled from '@emotion/styled'
import { useContext } from 'react';
import {DataContext} from '../Context/DataProvider'


const Cont = styled(Box)`
display:flex;
background-color:black
`

export default function Panel() {
  const {html,sethtml,css,setcss,js,setjs}= useContext(DataContext)

 
  return (
    <Cont><Editor heading="Html" icon = "/" color = "red" value ={html} onChange={sethtml} ></Editor>
    <Editor heading="css" icon = "*" color = "blue" value ={css} onChange={setcss} ></Editor>
    <Editor heading="javaScript" icon = "()" color = "yellow" value ={js} onChange={setjs} ></Editor></Cont>
      
   
  )
}
