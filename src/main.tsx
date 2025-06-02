import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux';

import { persistor, store } from './app/store';
import '@styles/main.scss';
import App from './App'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}> 
	<PersistGate loading={null} persistor={persistor}>
 <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
    <ToastContainer 
				position="bottom-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				theme="colored"
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			 />
  </BrowserRouter>
	</PersistGate>
	</Provider>
	
)
