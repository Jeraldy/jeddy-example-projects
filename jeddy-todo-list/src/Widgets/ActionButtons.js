import Icons from "jeddy/utils/Icons"
import Icon from "jeddy/widgets/Icon"
import A from "jeddy/dom/A"
import { actions } from '../Reducers/todos';
import { dispatch } from "jeddy/jredux";
import Row from "jeddy/layouts/Row";
const { removeTodo, editTodo } = actions

const ActionButtons = (title) => {
    return Row({
        children: [
            A({
                children: [Icon({ name: Icons.edit, style: _style })],
                onClick: () => dispatch(editTodo(title))
            }),
            A({
                children: [Icon({ name: Icons.delete, style: _style })],
                onClick: () => dispatch(removeTodo(title))
            })
        ]
    })
}
const _style = {
    fontSize: '15px',
    margin: '0 0 0 4px',
    cursor: 'pointer'
}
export default ActionButtons;