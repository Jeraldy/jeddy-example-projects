import { actions } from '../Reducers/RForm';
import CheckBoxInput from 'jeddy/dom/CheckBoxInput';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlignment from 'jeddy/layouts/RowAlignment';
const { handleCheckBox } = actions

const WCheckBox = ({ VCheckBox }) => {
    return Div({
        children: [
            Row({
                children: [
                    CheckBoxInput({
                        onclick: () => dispatch(handleCheckBox()),
                        checked: VCheckBox
                    }),
                    `${VCheckBox ? "CHECKED" : "UNCHECKED"}`
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WCheckBox);

