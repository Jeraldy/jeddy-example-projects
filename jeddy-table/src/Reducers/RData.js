import { createReducer } from "jeddy/jredux";

const RData = createReducer({
    name: 'RData',
    initialState: {
        data: []
    },
    reducers: {
        fetchDataSuccess: (state, action) => {
            return { ...state, data: action.payload }
        }
    }
})

export const { reducer, actions } = RData;

