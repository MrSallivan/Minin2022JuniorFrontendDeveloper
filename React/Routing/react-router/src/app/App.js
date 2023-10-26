import NavBar from "./components/navBar"
import { Route, Switch, Redirect } from "react-router-dom"
import Dashboard from "./components/dashboard"
import Home from "./components/home"
import Login from "./components/login"
import Posts from "./components/posts"
import Stats from "./components/stats"
import NotFound from "./components/notFound"

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/dashboard" render={(props)=>{return false && <Dashboard isAdmin="false" {...props}/>}} /> */}
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/asd" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
