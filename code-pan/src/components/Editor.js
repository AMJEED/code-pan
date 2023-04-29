import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import SettingsIcon from '@mui/icons-material/Settings';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css';
import {Controlled as CodeMirror, Controlled} from 'react-codemirror2'
import '../App.css'

const Container  = styled(Box)`background: #353935;
padding: 10px;
display: flex;
color: #E2DFD2

`
const Heading = styled(Box)`
background:black;
display:flex;

justify-content:space-between
`
const Heading2 = styled(Box)`
padding: 10px;

background:  black;

justify-content:space-between;
color: #E2DFD2
`
const Cont = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0px 8px 8px;

`

export default function Editor({heading, color, icon,value,onChange}) {
    const handleChange = (editor,data,value)=>{
        onChange(value)
    
    }
    return (

        <>
            <Cont>

            <Heading>
                     <Container >
                        <Box  component="span" style={{
                            background:color,
                            borderRadius:5,
                           height:20,
                           width:20,
                           display:'flex',
                           placeContent:'center',
                           marginRight:'5px',
                           paddingBottom:2,
                           color: 'black',


                        }}>

                        {icon}</Box>
                       {heading}                       
                        </Container >
                        <Heading2>
                        <CloseFullscreenIcon ></CloseFullscreenIcon>
                        <SettingsIcon></SettingsIcon>
                        </Heading2>
                        </Heading>

                <CodeMirror
                className='controlled-editor'
                value = {value}
                onBeforeChange={handleChange}
                options={{
                    theme:'material',
                    
                    

                }}
                />


                
            </Cont>
        </>
    )
}
