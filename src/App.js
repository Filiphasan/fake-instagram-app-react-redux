import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList/PostList'
import Post from './components/Post/Post'
import './style.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
