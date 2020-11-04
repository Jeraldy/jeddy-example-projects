import { actions } from '../Reducers/RForm';
import Input from 'jeddy/dom/Input';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlign from 'jeddy/layouts/RowAlign';
const { handleTextInput } = actions

const WTextInput = ({ VTextInput }) => {
    return Div({
        children: [
            Row({
                children: [
                    Input({
                        onKeyUp: (e) => dispatch(handleTextInput(e.target.value)),
                        placeholder: 'Write something',
                        style: {
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '2px',
                            outline: 'none',
                            width: '260px'
                        },
                        type: "text"
                    }),
                    VTextInput
                ],
                align: RowAlign.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WTextInput);

