import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </StrictMode>
)
