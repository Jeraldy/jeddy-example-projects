import { actions } from '../Reducers/RForm';
import RadioInput from 'jeddy/dom/RadioInput';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlignment from 'jeddy/layouts/RowAlignment';
const { handleRadioInput } = actions

const WRadioInput = ({ VRadioInput }) => {
    return Div({
        children: [
            Row({
                children: [
                    Row({
                        children: [
                            "M",
                            RadioInput({
                                checked: VRadioInput == 'M',
                                onclick: () => dispatch(handleRadioInput('M')),
                            }),
                            "F",
                            RadioInput({
                                checked: VRadioInput == 'F',
                                onclick: () => dispatch(handleRadioInput('F')),
                            }),
                        ]
                    }),
                    VRadioInput
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WRadioInput);

