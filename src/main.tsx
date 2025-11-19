// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// IMPORTANT: this pulls in Tailwind + your custom styles
import './index.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
