import React, { Component } from 'react';
import { FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';
import Snippet from './Snippet';

class SnippetList extends Component {
  render() {

    return (
        <div id="snippetList">
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Search..." onChange={this.handleChange.bind(this)} />
              <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
            </InputGroup>
          </FormGroup> 
          {this.state.snippets}
        </div>
    );
  }

  handleChange(e) {
    let filteredSnippets = this.filterSnippets(this.snippetData, [e.target.value]);
    this.setState({
      snippets: this.generateSnippetArray(filteredSnippets)
    })
  }
  
  filterSnippets(data, searchParams) {
      if(!searchParams || !searchParams[0] || searchParams.length === 0) return data;
      let searchString = searchParams.shift().toLowerCase().trim();
      return this.filterSnippets(data.filter(function(obj) {
        return obj.language.toLowerCase().includes(searchString) || 
          obj.title.toLowerCase().includes(searchString) || 
          obj.display.toLowerCase().includes(searchString) || 
          (obj.tags + "").toLowerCase().includes(searchString) ||
          !searchString
      }), searchParams);
    };

  generateSnippetArray(data) {
    let snippetArray = [];
    let title;
    let description;
    let tags;
    
    for (let i = 0; i < data.length; i++){
      title = data[i].title;
      description = data[i].display;
      tags = data[i].tags; 
      snippetArray.push(<Snippet title={title} description={description} tags={tags} />);
    }
    return snippetArray;
  }

  constructor() {
    super();
    this.snippetData = [{
      "title": "Flexidy",
      "display": "est phasellus sit amet erat nulla tempus vivamus",
      "language": "SQL",
      "tags": [
        "moderator",
        "Ameliorated"
      ]
    }, {
      "title": "Veribet",
      "display": "cum sociis natoque penatibus et magnis dis parturient montes",
      "language": "CSS",
      "tags": [
        "functionalities",
        "groupware",
        "systemic",
        "systemic",
        "budgetary management",
        "moderator",
        "Face to face",
        "User-friendly"
      ]
    }, {
      "title": "Konklab",
      "display": "eleifend luctus ultricies eu nibh quisque id justo sit amet",
      "language": "JAVASCRIPT",
      "tags": [
        "content-based",
        "full-range"
      ]
    }, {
      "title": "Prodder",
      "display": "mi nulla ac enim in tempor",
      "language": "VBNET",
      "tags": [
        "encryption",
        "firmware",
        "internet solution",
        "zero administration",
        "cohesive",
        "task-force",
        "3rd generation",
        "application",
        "fresh-thinking",
        "24 hour",
        "analyzer",
        "matrices"
      ]
    }, {
      "title": "Alpha",
      "display": "pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
      "language": "VBNET",
      "tags": [
        "orchestration",
        "Future-proofed",
        "Innovative",
        "Profit-focused",
        "Quality-focused",
        "reciprocal",
        "circuit",
        "orchestration",
        "encoding",
        "discrete"
      ]
    }, {
      "title": "It",
      "display": "neque vestibulum eget vulputate ut ultrices vel",
      "language": "HTML",
      "tags": [
        "Cloned",
        "Exclusive",
        "Quality-focused",
        "open system"
      ]
    }, {
      "title": "Fixflex",
      "display": "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt",
      "language": "TEXT",
      "tags": [
        "Multi-channelled",
        "Team-oriented",
        "Networked",
        "background"
      ]
    }, {
      "title": "Bamity",
      "display": "risus praesent lectus vestibulum quam sapien varius ut blandit",
      "language": "JAVASCRIPT",
      "tags": [
        "open system",
        "Persevering",
        "open system",
        "product",
        "methodology",
        "product",
        "6th generation",
        "Re-engineered"
      ]
    }, {
      "title": "Tampflex",
      "display": "rutrum at lorem integer tincidunt ante vel ipsum",
      "language": "HTML",
      "tags": [
        "software",
        "Horizontal",
        "zero administration",
        "standardization",
        "capability",
        "Distributed",
        "Diverse",
        "alliance",
        "Horizontal"
      ]
    }, {
      "title": "Matsoft",
      "display": "convallis eget eleifend luctus ultricies eu",
      "language": "JAVASCRIPT",
      "tags": [
        "Implemented",
        "logistical",
        "function"
      ]
      }]
      this.state = {snippets: this.generateSnippetArray(this.snippetData)};
  }
}

export default SnippetList;