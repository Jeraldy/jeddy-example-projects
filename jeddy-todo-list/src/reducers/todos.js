import { createReducer } from "jeddy/jredux";

const todoReducer = createReducer({
    name: 'MyTodos',
    initialState: {
        todoList: [
            'Wake up at 6am',
            'Workout for 30 minutes',
            'Shower and breakfast at 6:30am',
            'Read the bible for  30 minutes',
            'Commute to work at 7:30am'
        ],
        todo: '',
        oldTodo: '',
        isEditing: false
    },
    reducers: {
        handleInput: (state, action) => {
            return {
                ...state,
                todo: action.payload
            }
        },
        addTodo: (state) => {
            if (state.isEditing && state.todo) {
                const newList = state
                    .todoList
                    .map(todo => todo == state.oldTodo ? state.todo : todo)

                return {
                    ...state,
                    isEditing: false,
                    todo: '',
                    todoList: newList
                }
            }
            if (state.todo && !state.todoList.includes(state.todo) && !state.isEditing) {
                return {
                    todoList: [...state.todoList, state.todo],
                    todo: ''
                }
            }
            return { ...state }
        },
        removeTodo: (state, action) => {
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo != action.payload)
            }
        },
        editTodo: (state, action) => {
            return {
                ...state,
                todo: action.payload,
                oldTodo: action.payload,
                isEditing: true
            }
        }
    }
})

export const { reducer, actions } = todoReducer;

