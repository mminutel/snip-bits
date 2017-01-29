import React, { Component } from 'react';
import { Button, Col, ControlLabel, FormControl, FormGroup, Glyphicon, Modal, Row } from 'react-bootstrap';
import './SnippetDetails.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/mode/javascript/javascript';

class SnippetDetails extends Component {
  close() {
    this.setState({showModal: false});
  }
  open() {
    this.setState({showModal: true});
  }
  constructor() {
    super();
    this.state = {showModal: false};
  }
  render() {
    return (
        <div id="snippetDetails">
          <Row>
            <Col xs={12}>
              <Glyphicon glyph="cog" pullRight="true" onClick={this.open.bind(this)} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <ControlLabel>Snippet: </ControlLabel>
                <CodeMirror options={{lineNumbers: true, theme: 'isotope', mode: 'javascript'}} />
              </FormGroup>
            </Col>
          </Row>
          
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <ControlLabel>Title: </ControlLabel>
                <FormControl type="text"/>
              </FormGroup> 
              <FormGroup>
                <ControlLabel>Description: </ControlLabel>
                <FormControl type="text" />
              </FormGroup> 
              <FormGroup>
                <ControlLabel>Tags: </ControlLabel>
                <FormControl type="text"/>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button>Save</Button>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>

        </div>
    );
  }
}

export default SnippetDetails;