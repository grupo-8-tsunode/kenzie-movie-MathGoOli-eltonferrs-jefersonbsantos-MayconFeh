
import { useContext } from 'react';
import { UserContext } from './providers/UserContext';
import { RoutesMain } from './routes/RoutesMain';
import { GlobalStyle } from './styles/globalStyles';
import { Reset } from './styles/reset';
import { ToastContainer } from 'react-toastify';



export const App = () => {

  const { isLoading} = useContext(UserContext)
  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <ToastContainer autoClose={3000} />
      {isLoading ? <div className="loadingContainer">
          <div className="loading"/>
        </div> : <RoutesMain />}
      
    </>
  )
}

