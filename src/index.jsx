import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'
import { ThemeProviderWrapper } from './contexts/theme.context'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <AuthProviderWrapper>
        <Router>
          <React.Suspense>
            <App />
          </React.Suspense>
        </Router>
      </AuthProviderWrapper>
    </ThemeProviderWrapper>
  </React.StrictMode>
)