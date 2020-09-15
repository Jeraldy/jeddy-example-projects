import { actions } from '../Reducers/Form';
import Select from 'jeddy/dom/Select';
import Option from 'jeddy/dom/Option';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlignment from 'jeddy/layouts/RowAlignment';
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
                align: RowAlignment.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.formReducer })

export default connect(mapStateToProps)(WDropDown);

