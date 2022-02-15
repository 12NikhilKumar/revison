import { Route, Router, Switch } from "react-router-dom"
import { Navbar } from "../component/navbar"
import Home from "../pages/carasol"
import { Login } from "../pages/login"
import { SignUp } from "../pages/signup"

// const newHistory = createBrowserHistory()
export const AllRoutes = () =>{
    return (
        <>
          <Switch>   
                <Route exact path="/">
                    <Navbar/>
                    <SignUp/>
                </Route>
                <Route exact={true} path="/login">
                    <Navbar/>
                    <Login/>
                </Route>
                <Route exact={true} path="/home">
                    <Navbar/>
                    <Home/>
                </Route>
                <Route>
                    <div>not found</div>
                </Route>
            </Switch> 
        </>
    )
}