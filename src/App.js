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
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Git } from './pages/git';
import { Count, Counter, MemoizedCount } from './pages/memo';
import { Todo } from './pages/parent';
import { TickTok } from './pages/tictaktoe';
import { Timer } from './pages/timer';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <AppcontextProvider>
          {/* <Navbar/> */}
          {/* <AllRoutes/> */}
          {/* <Alarm/>
        </AppcontextProvider>
      </BrowserRouter> */}
      {/* <Provider store={store}>
        <Git/>
      </Provider> */}
      {/* <Alarm/> */}
      {/* <MemoizedCount/> */}
      {/* <Count/> */}
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <TickTok/> */}
      <Timer/>
    </div>
  );
}

export default App;
