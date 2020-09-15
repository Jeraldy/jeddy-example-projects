import { actions } from '../Reducers/Form';
import TextInput from 'jeddy/dom/TextInput';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlignment from 'jeddy/layouts/RowAlignment';
const { handleTextInput } = actions

const WTextInput = ({ VTextInput }) => {
    return Div({
        children: [
            Row({
                children: [
                    TextInput({
                        onKeyUp: (e) => dispatch(handleTextInput(e.target.value)),
                        placeholder: 'Write something',
                        style: {
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '2px',
                            outline: 'none',
                            width: '260px'
                        }
                    }),
                    VTextInput
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.formReducer })

export default connect(mapStateToProps)(WTextInput);

