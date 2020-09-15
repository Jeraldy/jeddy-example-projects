import { actions } from '../Reducers/RForm';
import TextArea from 'jeddy/dom/TextArea';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlignment from 'jeddy/layouts/RowAlignment';
const { handleTextArea } = actions

const WTextArea = ({ VTextArea }) => {
    return Div({
        children: [
            Row({
                children: [
                    TextArea({
                        onKeyUp: (e) => dispatch(handleTextArea(e.target.value)),
                        style: {
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '2px',
                            outline: 'none',
                            width: '280px'
                        }
                    }),
                    VTextArea
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WTextArea);

