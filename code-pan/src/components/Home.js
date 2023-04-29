import React from 'react'
import Panel from './Panel'
import Header from './Header'
import Result from './Result'

export default function Home() {
  return (
    <div>
    <Header></Header>
   
   <div className='pane'>

    <Panel></Panel>
   </div>
   <Result></Result>
    
    </div>
  )
}

