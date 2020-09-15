import Table from "jeddy/dom/Table";
import { connect } from "jeddy/jredux";
import WThead from "./WThead";
import WTbody from "./WTbody";
import { GetData } from "../Api/index";

const WTable = ({ data }) => {

    if (data.length == 0) { return "Loading..." }

    return Table({
        children: [WThead(), WTbody(data)],
        style: { borderCollapse: 'collapse', border: '1px solid #ddd' },
    })
}

WTable.onInit = () => GetData()

const mapStateToProps = (state) => ({ ...state.RData })

export default connect(mapStateToProps)(WTable)