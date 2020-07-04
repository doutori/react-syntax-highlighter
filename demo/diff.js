import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/index';
import docco from '../src/styles/hljs/docco';
import ExamplesLinks from './examples-links';

const CODE = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');

function itIs() {
  return 'no seriously really it is';
}`;

const ADDED = [1, 2];
const REMOVED = [6];

function DiffHighlight() {
  const h1Style = {
    fontSize: 42,
    color: 'aliceblue'
  };

  return (
    <div>
      <h1 style={h1Style}>React SyntaxHighlighter</h1>
      <div style={{ paddingTop: 20, display: 'flex' }}>
        <div style={{ flex: 1, width: '100%', flexDirection: 'column' }}>
          <SyntaxHighlighter
            style={docco}
            wrapLines={true}
            lineProps={lineNumber => {
              let style = { display: 'block' };
              if (ADDED.includes(lineNumber)) {
                style.backgroundColor = '#dbffdb';
              } else if (REMOVED.includes(lineNumber)) {
                style.backgroundColor = '#ffecec';
              }
              return { style };
            }}
          >
            {CODE}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

render(<DiffHighlight />, document.getElementById('app'));
