import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Home from "../pages/Home.jsx";
import Orders from "../pages/Orders.jsx";
import NewUser from "../pages/NewUser.jsx";
import SelectDrivers from "../pages/SelectDrivers.jsx";
import Summary from "../pages/Summary.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import { MenuItems } from "../components/MenuItems.jsx";

function Admin({ setIsLogin }) {
    console.log("admin hat sich gerendert");
    const [click, setClick] = useState(false);

    return (
        <BrowserRouter>
            <NavBar
                click={click}
                setClick={setClick}
                isLogin={true}
                setIsLogin={setIsLogin}
            />
            <Switch>
                <Route exact path="/">
                    <Home click={click} />
                </Route>
                <Route path="/orders">
                    <Orders click={click} />
                </Route>
                <Route path="/newuser">
                    <NewUser newUser={MenuItems[0]} />
                </Route>
                <Route path="/newdriver">
                    <NewUser newUser={MenuItems[1]} />
                </Route>
                <Route path="/selectdrivers">
                    {!click && <SelectDrivers />}
                </Route>
                <Route path="/summary">
                    {!click && <Summary />}
                </Route>
                <Route path="/login">
                    <Login setIsLogin={setIsLogin} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Admin
