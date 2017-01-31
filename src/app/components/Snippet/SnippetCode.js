import React, { Component } from 'react';
import CodeMirror           from 'react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/mode/javascript/javascript';

import './SnippetCode.css';

class SnippetCode extends Component {
    render() {
        return (
            <div>
                <CodeMirror options={{lineNumbers: true, theme: 'isotope', mode: 'javascript'}} />
            </div>
        );
    }
}

export default SnippetCode;