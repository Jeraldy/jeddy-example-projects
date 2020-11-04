import { actions } from '../Reducers/RForm';
import Select from 'jeddy/dom/Select';
import Option from 'jeddy/dom/Option';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlign from 'jeddy/layouts/RowAlign';
const { handleDropDown } = actions

const WDropDown = ({ VDropDown }) => {
    return Div({
        children: [
            Row({
                children: [
                    Select({
                        value: VDropDown,
                        onChange: (e) => dispatch(handleDropDown(e.target.value)),
                        children: [
                            Option({ value: 'M', text: 'MALE' }),
                            Option({ value: 'F', text: 'FEMALE' })
                        ],
                        style: {
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '2px',
                            outline: 'none',
                            width: '280px'
                        }
                    }),
                    VDropDown
                ],
                align: RowAlign.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WDropDown);

