// import { ModalProvider } from '@react95/core'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import '@react95/core/GlobalStyle';
import './styles/moddedtheme.css';

import "react-resizable/css/styles.css";

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
