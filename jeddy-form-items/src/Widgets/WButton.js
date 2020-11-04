import { actions } from '../Reducers/RForm';
import Button from 'jeddy/dom/Button';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlign from 'jeddy/layouts/RowAlign';
const { handleButton } = actions

const WButton = ({ VButton }) => {
    return Div({
        children: [
            Row({
                children: [
                    Button({
                        children: ['Click Me'],
                        onclick: () => dispatch(handleButton()),
                        style: {
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '2px',
                            outline: 'none',
                            width: '280px',
                            cursor: 'pointer'
                        }
                    }),
                    `Clicked: ${VButton} times`
                ],
                align: RowAlign.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}

const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WButton);

