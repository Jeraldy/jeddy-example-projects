import { actions } from '../Reducers/RForm';
import Input from 'jeddy/dom/Input';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlign from 'jeddy/layouts/RowAlign';
import { ExtractFileName } from '../Utils/index';
const { handleFileInput } = actions

const WFileInput = ({ VFileInput }) => {
    return Div({
        children: [
            Row({
                children: [
                    Input({
                        onChange: (e) => dispatch(handleFileInput(e.target.value)),
                        type: "file"
                    }),
                    ExtractFileName(VFileInput)
                ],
                align: RowAlign.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}
const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WFileInput);

