import React, { Component } from 'react';

export default class Note extends Component {
  constructor (props) {
    super(props);

    this.state = {
      editing: false
    };
  };

  edit = () => {
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false
    });
  };

  renderEdit = () => {
    return <input type="text"
      autoFocus={true}
      placeholder={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderDelete = () => {
    return <button className="delete-note" onClick={this.props.onDelete}>x</button>
  };

  renderNote = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="task">{this.props.task}</span>
        {onDelete ? this.renderDelete() : null}
      </div>
    );
  };

  render () {
    if(this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }
}
