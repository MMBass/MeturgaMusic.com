import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/StyledApp';
import ContextComposer from '@context/ContextComposer';

import { v4 as uuidv4 } from 'uuid';

if (!localStorage.getItem('init')) localStorage.setItem('init', 'INITID:' + uuidv4());

ReactDOM.render(
  <StrictMode>
    <ContextComposer>
      <App className='app'/>
    </ContextComposer>
  </StrictMode>,
  document.getElementById('root')
)