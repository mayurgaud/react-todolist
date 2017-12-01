import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {tasksReducer} from './todoList/tasks';

export default combineReducers({
  routing: routerReducer,
  tasks: tasksReducer
});
