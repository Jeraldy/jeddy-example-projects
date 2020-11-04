import Card from "jeddy/widgets/Card";
import ListItem from "./ListItem";
import { connect } from "jeddy/jredux";

const ListView = ({ todoList }) => {
    return Card({
        children: todoList.map((title, index) => ListItem(title, index)),
        style: { borderRadius: '10px', marginTop: '20px' }
    })
}

const mapStateToProps = (state) => ({ ...state.RTodo })

export default connect(mapStateToProps)(ListView);