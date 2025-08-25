import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, GlobalFormat } from './styled.global.js';
import AuthProvider from './context/auth.jsx';
import Routers from './router.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={GlobalFormat}>
      <AuthProvider>
        <Routers />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
)
