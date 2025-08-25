import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './styled.global.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
      <GlobalStyle/>
    </BrowserRouter>

)
