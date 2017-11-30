import React, {Component} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';


function TaskList({removeTask, tasks, updateTask, updateTaskOrdering}) {
  let taskItems = tasks.map((task, index) => {
    return (
      <TaskItem
        key={index}
        taskKey={index}
        task={task}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    );
  });

  const onSortEnd = ({oldIndex, newIndex}) => {
    updateTaskOrdering({oldIndex, newIndex});
  };

  return (
    <div className="task-list">
      <SortableList items={taskItems} onSortEnd={onSortEnd}/>
    </div>
  );
}


const SortableItem = SortableElement(({value}) =>
  <li style={{listStyleType: 'none'}}>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value}/>
      ))}
    </ul>
  );
});


TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List).isRequired,
  updateTask: PropTypes.func.isRequired,
  updateTaskOrdering: PropTypes.func.isRequired
};

export default TaskList;
