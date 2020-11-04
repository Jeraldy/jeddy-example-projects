import { actions } from '../Reducers/RForm';
import Input from 'jeddy/dom/Input';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlign from 'jeddy/layouts/RowAlign';
const { handleCheckBox } = actions

const WCheckBox = ({ VCheckBox }) => {
    return Div({
        children: [
            Row({
                children: [
                    Input({
                        onclick: () => dispatch(handleCheckBox()),
                        checked: VCheckBox,
                        type: "checkbox"
                    }),
                    `${VCheckBox ? "CHECKED" : "UNCHECKED"}`
                ],
                align: RowAlign.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WCheckBox);

