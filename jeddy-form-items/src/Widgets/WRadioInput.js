import { actions } from '../Reducers/RForm';
import Input from 'jeddy/dom/Input';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlign from 'jeddy/layouts/RowAlign';
const { handleRadioInput } = actions

const WRadioInput = ({ VRadioInput }) => {
    return Div({
        children: [
            Row({
                children: [
                    Row({
                        children: [
                            "M",
                            Input({
                                checked: VRadioInput == 'M',
                                onclick: () => dispatch(handleRadioInput('M')),
                                type: "radio"
                            }),
                            "F",
                            Input({
                                checked: VRadioInput == 'F',
                                onclick: () => dispatch(handleRadioInput('F')),
                                type: "radio"
                            }),
                        ]
                    }),
                    VRadioInput
                ],
                align: RowAlign.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WRadioInput);

