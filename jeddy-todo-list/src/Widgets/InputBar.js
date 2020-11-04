import Card from "jeddy/widgets/Card";
import Input from "jeddy/dom/Input";
import Icons from "jeddy/utils/Icons";
import Icon from "jeddy/widgets/Icon";
import Row from "jeddy/layouts/Row";
import Button from "jeddy/dom/Button";
import { actions } from "../reducers/RTodo";
import { dispatch, connect } from "jeddy/jredux";

const { addTodo, handleInput } = actions

const InputBar = ({ todo }) => {
    return Card({
        children: [
            Row({
                children: [
                    Input({
                        onKeyUp: (e) => dispatch(handleInput(e.target.value)),
                        value: todo,
                        placeholder: 'Enter your todo',
                        type: "text"
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

const mapStateToProps = (state) => ({ ...state.RTodo })

export default connect(mapStateToProps)(InputBar);