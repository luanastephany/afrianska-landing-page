import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Blog from './screens/Blog'
import Contact from './screens/Contact'
import './App.scss';


function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>

    </BrowserRouter>

  );
}

export default App;
