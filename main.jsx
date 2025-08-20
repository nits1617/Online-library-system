import React from 'react'
import { StrictMode } from 'react'
import { createRoot, ReactDom } from 'react-dom/client'
import { Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { store } from './redux/store.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
