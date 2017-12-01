import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../../views/components/button/index';
import Icon from '../../../views/components/icon/index';
import './task-form.css';

export class TaskForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  constructor() {
    super(...arguments);

    this.state = {title: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  /**
   * Clear the task input field
   */
  clearInput() {
    this.setState({title: ''});
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleKeyUp(event) {
    if (event.keyCode === 27) this.clearInput();
  }

  focusInput() {
    this.titleInput.focus();
  }

  /**
   * Submit the create task
   *
   * @param event
   */
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    if (title.length) this.props.handleSubmit(title);
    this.clearInput();
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit} noValidate>
        <div className="task-title-wrapper">
          <div className="task-manager-title">Task Manager</div>
          <div className="add-detail-icon">
            <span className="add-new-task" onClick={this.focusInput}><Icon name="add"/></span>
          </div>
        </div>
        <div>
          <Button className={classNames('btn--icon btn-border-none')}>
            <Icon name="add"/>
          </Button>
          <input
            autoComplete="off"
            autoFocus
            className="task-form__input"
            maxLength="64"
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder="Add your task here"
            ref={e => this.titleInput = e}
            type="text"
            value={this.state.title}
          />
        </div>
      </form>
    );
  }
}

export default TaskForm;
