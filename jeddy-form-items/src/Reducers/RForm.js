import { createReducer } from "jeddy/jredux";

const RForm = createReducer({
    name: 'RForm',
    initialState: {
        VTextInput: '',
        VButton: 0,
        VDropDown: 'F',
        VFileInput: '',
        VRadioInput: 'M',
        VTextArea: '',
        VCheckBox: true
    },
    reducers: {
        handleTextInput: (state, action) => {
            return { ...state, VTextInput: action.payload }
        },
        handleButton: (state) => {
            return { ...state, VButton: state.VButton + 1 }
        },
        handleDropDown: (state, action) => {
            return { ...state, VDropDown: action.payload }
        },
        handleFileInput: (state, action) => {
            console.log(action.payload)
            return { ...state, VFileInput: action.payload }
        },
        handleRadioInput: (state, action) => {
            return { ...state, VRadioInput: action.payload }
        },
        handleTextArea: (state, action) => {
            return { ...state, VTextArea: action.payload }
        },
        handleCheckBox: (state) => {
            return { ...state, VCheckBox: !state.VCheckBox }
        },
    }
})

export const { reducer, actions } = RForm;

