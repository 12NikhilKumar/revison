import logo from './logo.svg';
import './App.css';
import Home from './pages/carasol';
import { AppcontextProvider } from './contextapi/context';
import { SignUp } from './pages/signup';
import { Login } from './pages/login';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './component/navbar';
import { AllRoutes } from './routes/routes';
import { Alarm } from './pages/alarm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppcontextProvider>
          {/* <Navbar/> */}
          {/* <AllRoutes/> */}
          <Alarm/>
        </AppcontextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
