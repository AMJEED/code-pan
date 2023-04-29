import React, { useContext } from 'react'
import { Box,styled } from '@mui/material'
import { DataContext } from '../Context/DataProvider'


export default function Result() {
  const{html,css,js} = useContext(DataContext)

  const sourcseCode = `
  <html>
    <body>${html}</body>

    <style>${css}</style>
    <script>${js}</script>
  </html>

  `
  return (
    <Box>

      <iframe
      srcDoc={sourcseCode}
      title  = "Output"
      sandbox='allow-scripts'
      height='100%'
      width='100%'
      ></iframe>
    </Box>
  )
}
