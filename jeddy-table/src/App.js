import Center from "jeddy/layouts/Center";
import Card from "jeddy/widgets/Card";
import WTable from "./Widgets/WTable";

const App = () => {
    return Center({
        child: Card({
            children: [WTable()],
            style: { minWidth: '700px', minHeight: '300px' }
        })
    })
}

export default App;