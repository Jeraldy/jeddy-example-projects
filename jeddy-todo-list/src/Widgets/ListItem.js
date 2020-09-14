import Div from "jeddy/dom/Div"
import Row from "jeddy/layouts/Row";
import RowAlignment from "jeddy/layouts/RowAlignment";
import ActionButtons from "./ActionButtons";

const ListItem = (title, index) => {
    return Div({
        children: [
            Row({
                children: [
                    `${index + 1}. ${title}`,
                    ActionButtons(title)
                ],
                align: RowAlignment.SpaceBetween
            }),
        ],
        style: { padding: '8px', borderBottom: '1px solid #ccc', }
    })
}

export default ListItem;