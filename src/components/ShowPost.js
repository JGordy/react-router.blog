import React, { Component } from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
        return results.json();
      }).then(data => {
        // this.setState({songs: data});
        console.log(data);
      })
}

  render() {
    return (
      <div className="ShowPost">
      </div>
    );
  }
}
