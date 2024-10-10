import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import { AppProvider } from './context/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
    <AppProvider>
      <App />
    </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
