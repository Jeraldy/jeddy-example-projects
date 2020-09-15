import Card from "jeddy/widgets/Card";
import Center from "jeddy/layouts/Center";
import WButton from "./Widgets/WButton";
import WCheckBox from "./Widgets/WCheckBox";
import WDropDown from "./Widgets/WDropDown";
import WFileInput from "./Widgets/WFileInput";
import WRadioInput from "./Widgets/WRadioInput";
import WTextArea from "./Widgets/WTextArea";
import WTextInput from "./Widgets/WTextInput";

const App = () => {
    return Center({
        child: Card({
            children: [
                WTextInput(),
                WButton(),
                WCheckBox(),
                WDropDown(),
                WFileInput(),
                WRadioInput(),
                WTextArea(),
            ],
            style: { width: '800px' }
        })
    })
}

export default App;