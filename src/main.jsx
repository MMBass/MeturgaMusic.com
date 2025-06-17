import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/StyledApp';
import ContextComposer from '@context/ContextComposer';
import { LOCAL_STORAGE_KEYS } from '@/enums';

import { v4 as uuidv4 } from 'uuid';

if (!localStorage.getItem(LOCAL_STORAGE_KEYS.INIT)) localStorage.setItem(LOCAL_STORAGE_KEYS.INIT, 'INITID:' + uuidv4());

ReactDOM.render(
  <StrictMode>
    <ContextComposer>
      <App className='app'/>
    </ContextComposer>
  </StrictMode>,
  document.getElementById('root')
)