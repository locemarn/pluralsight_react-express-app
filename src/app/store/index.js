import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from '../../server/defaultState'
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware()

import * as sagas from './sagas.mock'
import * as mutations from './mutations'

const {
  tasks,
  comments,
  users,
  groups
} = defaultState

export const store = createStore(
  combineReducers({
    tasks(task = defaultState.tasks, action) {
      switch(action.type) {
        case mutations.CREATE_TASK:
          return [...tasks, {
            id: action.taskID,
            name: "New Task",
            group: action.groupID,
            owner: action.ownerID,
            isComplete: false
          }]
      }

      return tasks
    },

    comments(comments = defaultState.comments) {
      return comments
    },

    groups(groups = defaultState.groups) {
      return groups
    },

    users(users = defaultState.users) {
      return users
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleware),
  )
  // runSaga: sagaMiddleware.run

  for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga])
  }