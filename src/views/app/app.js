import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import TasksPage from '../../todoList/pages/tasks';

const App = () => (
  <div>
    <main>
      <TasksPage/>
    </main>
  </div>
);

//=====================================
//  CONNECT
//-------------------------------------


export default withRouter(
  connect()(App)
);
