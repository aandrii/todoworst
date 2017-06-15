 var React = require('react');

 require('./Note.css');

 var Note = React.createClass({
    render: function() {
        let stylM = { backgroundColor: this.props.color };
        return (
            <div className="note" style={stylM}>
                <span className="deleteNote" onClick={this.props.onDelete}> x </span>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Note;