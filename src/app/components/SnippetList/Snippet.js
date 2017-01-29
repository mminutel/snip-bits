import React, { Component } from 'react';
import './Snippet.css';

class Snippet extends Component {
  render() {
    let tags = "";
    for(let i=0; i < this.props.tags.length; i++) {
        tags += this.props.tags[i] + ", ";
    }
    return (
        <div className="snippet" onClick={this.handleClick.bind(this)}>
            <div>
                <h4>{this.props.title}</h4>
                <p><small>{this.props.description}</small></p>
                <p><small>Tags: <em>{tags}</em></small></p>
            </div>
        </div>
    );
  }

  handleClick(e) {
      
  }
}

export default Snippet;