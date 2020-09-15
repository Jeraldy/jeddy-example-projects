import { actions } from '../Reducers/RForm';
import FileInput from 'jeddy/dom/FileInput';
import Div from 'jeddy/dom/Div';
import Row from "jeddy/layouts/Row";
import { dispatch, connect } from 'jeddy/jredux';
import RowAlignment from 'jeddy/layouts/RowAlignment';
import { ExtractFileName } from '../Utils/index';
const { handleFileInput } = actions

const WFileInput = ({ VFileInput }) => {
    return Div({
        children: [
            Row({
                children: [
                    FileInput({
                        onChange: (e) => dispatch(handleFileInput(e.target.value)),
                    }),
                    ExtractFileName(VFileInput)
                ],
                align: RowAlignment.SpaceBetween
            })
        ],
        style: { padding: '20px', border: '1px solid #F1F3F4' }
    })
}
const mapStateToProps = (state) => ({ ...state.RForm })

export default connect(mapStateToProps)(WFileInput);

