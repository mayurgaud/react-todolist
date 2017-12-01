import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../../views/components/button/index';
import Icon from '../../../views/components/icon/index';
import './task-item.css';
import Dialog from './Dialog'

export class TaskItem extends Component {
    constructor() {
        super(...arguments);

        this.state = {editing: false, showDialog: false};

        this.edit = this.edit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }

    /**
     * Edit the task
     */
    edit() {
        this.setState({editing: true});
    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.save(event);
        }
        else if (event.keyCode === 27) {
            this.stopEditing();
        }
    }

    /**
     * Remove the task
     */
    remove() {
        this.setState({showDialog: false});
        this.props.removeTask(this.props.task);
    }

    /**
     * Show the warning
     */
    showDialog() {
        this.setState({showDialog: true});
    }

    /**
     * Show the warning
     */
    hideDialog() {
        this.setState({showDialog: false});
    }

    /**
     * Create a new task
     *
     * @param event
     */
    save(event) {
        if (this.state.editing) {
            const {task} = this.props;
            const title = event.target.value.trim();

            if (title.length && title !== task.title) {
                this.props.updateTask(task, {title});
            }

            this.stopEditing();
        }
    }

    /**
     * Change the editing state
     */
    stopEditing() {
        this.setState({editing: false});
    }

    /**
     * Change the task completed status
     */
    toggleStatus() {
        const {task} = this.props;
        this.props.updateTask(task, {completed: !task.completed});
    }

    renderTitleInput(task) {
        return (
            <input
                autoComplete="off"
                autoFocus
                className="task-item__input"
                defaultValue={task.title}
                maxLength="64"
                onKeyUp={this.handleKeyUp}
                type="text"
            />
        );
    }

    render() {
        const {editing, showDialog} = this.state;
        const {task} = this.props;

        let containerClasses = classNames('task-item', {
            'task-item--completed': task.completed,
            'task-item--editing': editing
        });

        return (
            <div className={containerClasses} tabIndex="0">
                { showDialog &&
                    <Dialog title="Are you sure you want to delete?" handleSuccess={this.remove} handleReject={this.hideDialog}/>
                }
                <div className="cell">
                    <Button
                        className={classNames('btn--icon', 'task-item__button', {
                            'active': task.completed,
                            'hide': editing
                        })}
                        onClick={this.toggleStatus}>
                        <Icon name="done"/>
                    </Button>
                </div>

                {editing ? (
                    <div className="cell">{this.renderTitleInput(task)}</div>
                ) : (
                    <div className="cell cell-sort-element">
                        <div className="task-item__title" tabIndex="0">
                            <span>{task.title}</span>
                        </div>
                    </div>
                )}

                <div className="cell">
                    <Button
                        className={classNames('btn--icon', 'task-item__button', {'hide': editing})}
                        onClick={this.edit}>
                        <Icon name="mode_edit"/>
                    </Button>
                    <Button
                        className={classNames('btn--icon', 'task-item_button', {'hide': !editing})}
                        onClick={this.stopEditing}>
                        <Icon name="clear"/>
                    </Button>
                    <Button
                        className={classNames('btn--icon', 'task-item__button', {'hide': editing})}
                        onClick={this.showDialog}>
                        <Icon name="delete"/>
                    </Button>
                </div>
            </div>
        );
    }
}

TaskItem.propTypes = {
    removeTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired,
    taskKey: PropTypes.number.isRequired,
};

export default TaskItem;
