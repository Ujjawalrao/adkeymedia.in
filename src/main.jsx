import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from './context/Context.jsx'

import App from './App.jsx'
import { AppProvider } from './components/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AppProvider>
  </StrictMode>,
)
