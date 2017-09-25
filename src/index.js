import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import ShowPost from './components/ShowPost';
import PostList from './components/PostList';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/create' component={CreatePost}/>
          <Route path='/show' component={ShowPost}/>
          <Route path='/post/:id' component={PostList}/>
        </Switch>
      </App>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
