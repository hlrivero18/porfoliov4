import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ScrollToHash from './hooks/scrollToHash'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToHash />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
