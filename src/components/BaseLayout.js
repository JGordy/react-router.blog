import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="Layout">
        <nav>
          <NavLink activeClassName="selected" exact to='/'>Wobbly Blog</NavLink>
          <NavLink activeClassName="selected" to='/create'>Create Post</NavLink>
          <NavLink activeClassName="selected" to='/show'>Show All Posts</NavLink>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
