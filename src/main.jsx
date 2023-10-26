import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {default as App} from './App/StyledApp';
import ContextComposer from '@context/ContextComposer';

ReactDOM.render(
  <React.StrictMode>
    <ContextComposer>
        <App className='app'/>
    </ContextComposer>
  </React.StrictMode>,
  document.getElementById('root')
)
