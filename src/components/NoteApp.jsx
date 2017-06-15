var React = require('react');
var NoteEditor = require('./NoteEditor.jsx')
var NoteGrid = require('./NoteGrid.jsx')

require('./NoteApp.css');

var NoteApp = React.createClass({
    getInitialState: function(newNote) {
        return {
            notes: [
                {
                    id: 0,
                    text: "HTMLAnchorElemdsf",
                    color: "#90EE90"
                }, {
                    id: 1,
                    text: "HTMLAnc horfdghfd ghElemdsf",
                    color: "#FFA07A"
                }, {
                    id: 2,
                    text: "HTMLfg hfghAnc horElemdsf",
                    color: "#00FA9A"
                }, {
                    id: 3,
                    text: "HTMLAnc horElemdhgf hfghsf",
                    color: "#FFB6C1"
                },
                    {
                    id: 4,
                    text: "HTMLAnchorElemdsf",
                    color: "#90EE90"
                }, {
                    id: 5,
                    text: "HTMLAnc horfdghfd ghElemdsf",
                    color: "#FFA07A"
                }, {
                    id: 6,
                    text: "HTMLfg hfghAnc horElemdsf",
                    color: "#00FA9A"
                }, {
                    id: 7,
                    text: "HTMLAnc horElemdhgf hfghsf",
                    color: "#FFB6C1"
                }
            ]
        };
    },

    componentDidMount: function() {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes) {
            this.setState({notes: localNotes});
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleNoteDelete: function(note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function(not) {
            return not.id !== noteId;
        });
        this.setState({ notes: newNotes });
    },

    handleNoteAdd: function(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes });
    },

    render: function() {
        return (
            <div className="notesApp"> 
                note app
                <NoteEditor onNoteAdd = {this.handleNoteAdd} />
                <NoteGrid notesApp = {this.state.notes} onNoteDelete={this.handleNoteDelete} />
            </div>
        );
    },

    _updateLocalStorage: function() {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

module.exports = NoteApp;