import React, { Component }                              from 'react';
import { bindActionCreators }                            from "redux";
import { connect }                                       from "react-redux";
import { FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap';


import * as snippetActions from "../../actions/snippetActions";

class SnippetSearch extends Component {
    
    handleChange(e) {
        this.props.filterSnippets(e.target.value.split(","));
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" placeholder="Search..." onChange={this.handleChange.bind(this)} />
                        <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
                    </InputGroup>
                </FormGroup>   
            </div>
        );
    }
}

const mapStateToProps = function(state) {
  return {
      snippetData: state.snippets.snippetData
  }
}

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(snippetActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetSearch);