import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles  from './styles/globalStyles.js'


import { Login } from './containers/Login/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
    <GlobalStyles/>
  </StrictMode>,
)
