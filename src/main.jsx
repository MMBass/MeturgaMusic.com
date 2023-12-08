import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { default as App } from './App/StyledApp';
import ContextComposer from '@context/ContextComposer';

ReactDOM.render(
  <StrictMode>
    <ContextComposer>
      <App className='app' />
    </ContextComposer>
  </StrictMode>,
  document.getElementById('root')
)
