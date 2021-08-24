import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from '../Pages/Home';
import SubProduct from "../Pages/SubProduct";
import SubSubProduct from "../Pages/SubSubProduct";

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/Products/bio-plus®ProcessComponents" component={SubProduct} />
                <Route exact path="/Products/bio-plus®ProcessComponents/ProcessHoseAssemblies&HoseFittings" component={SubSubProduct} />
            </Router>
        )
    }
}
export default AppRouter;