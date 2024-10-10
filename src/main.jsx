import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/StyledApp';
import ContextComposer from '@context/ContextComposer';

ReactDOM.render(
  <StrictMode>
    <ContextComposer>
      <App className='app'/>
    </ContextComposer>
  </StrictMode>,
  document.getElementById('root')
)