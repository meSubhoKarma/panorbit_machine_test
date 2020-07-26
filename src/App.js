import React from "react"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import history from "./utils/history"
import Layout from "./ui/layout/Layout"

import Landing from "./pages/Landing"
import Profile from "./pages/Profile"
import Posts from "./pages/Posts"
import Gallery from "./pages/Gallery"
import Todos from "./pages/Todos"

const App = () => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
        <Route exact path="/landing" component={Landing} />
        <Layout>
          <Route exact path="/:profileId" component={Profile} />
          <Route exact path="/:profileId/posts" component={Posts} />
          <Route exact path="/:profileId/gallery" component={Gallery} />
          <Route exact path="/:profileId/todos" component={Todos} />
        </Layout>
      </Switch>
    </HashRouter>
  )
}

export default App
