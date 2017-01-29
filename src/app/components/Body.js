import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SnippetList from './SnippetList/SnippetList';
import SnippetDetails from './SnippetDetails/SnippetDetails';

class Body extends Component {
  render() {
    return (
        <Row>
            <Col xs={4}>
                <SnippetList />
            </Col>
            <Col xs={8}>
                <SnippetDetails />
            </Col>
        </Row>
    );
  }
}

export default Body;