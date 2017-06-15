var React = require('react');

require('./NoteEditor.css');

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },
    
    handleTextChange: function(event) {
        this.setState({ text: event.target.value});                
    },
    handleNoteAdd: function() {
        var newNote = {
            text: this.state.text,
            color: "green",
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: ''});

    },

    render: function() {
        return (
            <div className="noteEditor">                   
                <textarea 
                    placeholder="Enter you text" 
                    rows={5} 
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}                            
                />
                <button className="addButton" onClick={this.handleNoteAdd}>ADD</button>
            </div>
        );
    }
});

module.exports = NoteEditor;