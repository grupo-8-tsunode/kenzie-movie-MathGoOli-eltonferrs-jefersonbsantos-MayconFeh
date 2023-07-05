
import { RoutesMain } from './routes/RoutesMain';
import { GlobalStyle } from './styles/globalStyles';
import { Reset } from './styles/reset';
import { ToastContainer } from 'react-toastify';



export const App = () => {


  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <ToastContainer autoClose={3000} />
      <RoutesMain/>
    </>
  )
}

