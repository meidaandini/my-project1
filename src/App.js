import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './container/Home/Home.jsx';
import YouTube from './component/YouTube/YouTubecomp.jsx';
import Post from './component/Post/Post.jsx';
import HelloComponent from './component/HelloComponent';
import BlogPost from './container/BlogPostFunctional/BlogPostFunctional.jsx';
import LifeCycleComp from './container/LifeCycleComp/LifeCycleComp.jsx';
import Header from './component/HeaderComp/Header.jsx';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/YouTube" component={YouTube} />
        <Route path="/Post" component={Post} />
        <Route path="/HelloComponent" component={HelloComponent} />
        <Route path="/BlogPost" component={BlogPost} />
        <Route path="/LifeCycleComp" component={LifeCycleComp} />
      </Switch>
    </Router>
  )
}

export default App;