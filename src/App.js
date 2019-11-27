import React from 'react'
import './App.css'
import BasicModule from './components/BasicModule'
import BasicPropsModule from './components/BasicPropsModule'
import DefaultPropsModule from './components/DefaultPropsModule'
import BasicStateModule from './BasicStateModule'
import StateArrayModule from './components/StateArrayModule'
import LocalJSONModule from './components/LocalJSONModule'
import Checklist from './components/Checklist'

const App = () => {

  return(
    <div className="app">
      <Checklist />
      <LocalJSONModule /> 
      <StateArrayModule />
      <BasicStateModule />
      <DefaultPropsModule />
      <BasicPropsModule  value="pink"/>
      <BasicModule />
    </div>
  )
}

export default App;
