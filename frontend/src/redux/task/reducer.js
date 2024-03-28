import * as ActionTypes from './actionTypes';

const initialState = {
  tasks: [],
  selectedtask: null,
  status: 'idle',
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS_START:
    case ActionTypes.GET_TASK_BY_ID_START:
      return {
        ...state,
        status: 'loading',
      };

    case ActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        tasks: action.payload,
      };

    case ActionTypes.FETCH_TASKS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };

    case ActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case ActionTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case ActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    case ActionTypes.GET_TASK_BY_ID_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        selectedtask: action.payload,
      };

    case ActionTypes.GET_TASK_BY_ID_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };

    default:
      return state;
  }
};

export { taskReducer };
