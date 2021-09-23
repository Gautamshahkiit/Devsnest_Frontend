import Header from "./sections/Header";
import "./App.css";
import FrontPage from "./sections/FrontPage";
import Category from "./components/Category";
import ProductPage from "./sections/ProductPage";
import Wallet from "./sections/Wallet";
import Bids from "./components/Bids";
import login from "./components/login";
import SignUp from "./components/signup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./actions/index";
import FooterPagePro from "./sections/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            {products.length ? <FrontPage products={products} /> : null}
          </Route>

          <Route exact path="/bids" component={Bids} />
          <Route exact path="/wallet" component={Wallet} />
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact path="/:category">
            <Category />
          </Route>
        </Switch>
        <FooterPagePro />
      </div>
    </Router>
  );
}

export default App;
