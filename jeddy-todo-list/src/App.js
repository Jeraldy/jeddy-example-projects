import './App.css';
import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import InputBar from "./Widgets/InputBar";
import ListView from "./Widgets/ListView";

const App = () => {
    return Center({
        child: Div({
            children: [InputBar(), ListView()],
            style: { minHeight: '500px' }
        })
    })
}

export default App;