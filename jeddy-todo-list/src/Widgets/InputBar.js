import Card from "jeddy/widgets/Card";
import TextInput from "jeddy/dom/TextInput";
import Icons from "jeddy/utils/Icons";
import Icon from "jeddy/widgets/Icon";
import Row from "jeddy/layouts/Row";
import Button from "jeddy/dom/Button";
import { actions } from "../Reducers/todos";
import { dispatch, connect } from "jeddy/jredux";

const { addTodo, handleInput } = actions

const InputBar = ({ todo }) => {
    return Card({
        children: [
            Row({
                children: [
                    TextInput({
                        class: 'todo-input',
                        onKeyUp: (e) => dispatch(handleInput(e.target.value)),
                        value: todo,
                        placeholder: 'Enter your todo',
                    }),
                    Button({
                        class: 'btn',
                        onClick: () => dispatch(addTodo()),
                        children: [Icon({ name: Icons.add })]
                    })
                ]
            })
        ],
        style: { padding: '2px', borderRadius: '5px', }
    })
}

const mapStateToProps = (state) => ({ ...state.todoReducer })

export default connect(mapStateToProps)(InputBar);