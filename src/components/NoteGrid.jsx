var React = require('react');
var Note = require('./Note.jsx')

require('./NoteGrid.css');

var NoteGrid = React.createClass({
    componentDidMount: function() {         
        var grid = this.refs.grid;       
        this.msnry = new Masonry( grid, {                    
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10
        });
    },

    componentDidUpdate: function(prevProps) {
        if (this.props.notesApp.length !== prevProps.notesApp.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render: function() {
        var onNoleDel = this.props.onNoteDelete;
        return (
            <div className="notesGrid" ref="grid">
                {
                    this.props.notesApp.map(function(no) {
                        return  (
                            <Note 
                                key={no.id} 
                                onDelete={onNoleDel.bind(null, no)}
                                color={no.color}>
                                {no.text}
                            </Note>)
                    })                           
                }
            </div>
        );
    }
});

module.exports = NoteGrid;