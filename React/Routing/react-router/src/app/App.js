import NavBar from "./components/navBar"
import { Route, Switch } from "react-router-dom"
import Dashboard from "./components/dashboard"
import Home from "./components/home"
import Login from "./components/login"
// import Posts from "./components/posts"
import Stats from "./components/stats"
import PostList from "./components/postList"
import Post from "./components/post"

const posts = [
	{id:1, label: "post1"},
	{id:2, label: "post2"},
	{id:3, label: "post3"}
]

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch> 
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/dashboard" render={(props)=>{
					return false && <Dashboard isAdmin="false" {...props}/>}
					} /> */}
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId" render={(props)=> (<Post posts={posts} {...props} />)} />
        <Route path="/posts" render={(props)=> (<PostList posts={posts} {...props} />)}  />
      </Switch>
    </div>
  )
}

export default App
