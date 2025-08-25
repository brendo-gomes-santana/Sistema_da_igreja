import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'

import { GlobalStyle, GlobalFormat } from './styled.global.js';
import { ThemeProvider } from 'styled-components';
import Routers from './router.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={GlobalFormat}>
      <Routers />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
)
