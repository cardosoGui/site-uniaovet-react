import React from "react"
import "./App.css"

//routes
import home from "../src/pages/home/index"
import about from "../src/pages/about/index"
import products from "../src/pages/products/index"
import contact from "../src/pages/contact/index"

import { Route } from "react-router-dom"
import Navigation from "./components/nav-menu/Navigation"

const App = () => (
  <>
    <Navigation>
      <Route path="/" exact component={home} />
      <Route path="/home" exact component={home} />
      <Route path="/sobre-nos" exact component={about} />
      <Route path="/produtos" exact component={products} />
      <Route path="/contato" exact component={contact} />
    </Navigation>
  </>
)

export default App
