console.log('hi');

console.log(`string text line 1
string text line 2456`);

var ReactDOM = require('react-dom');
var React = require('react');
var NoteApp = require('./components/NoteApp.jsx');

ReactDOM.render(
    <NoteApp />,
    document.getElementById('mountPoint')
);