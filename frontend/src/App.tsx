import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Routes from './routes/routes';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      ></ToastContainer>
      <Routes />
    </BrowserRouter>
  )
}

export default App
