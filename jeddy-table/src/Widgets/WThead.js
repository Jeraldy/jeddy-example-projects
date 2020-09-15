import Thead from "jeddy/dom/Thead";
import Tr from "jeddy/dom/Tr";
import Th from "jeddy/dom/Th";

const thStyle = { padding: '10px', border: '1px solid #ddd', textAlign: 'left' }

const headers = [
    { title: "#", style: thStyle },
    { title: "Fullname", style: thStyle },
    { title: "Username", style: thStyle },
    { title: "Email", style: thStyle },
    { title: "Phone", style: thStyle },
    { title: "Website", style: thStyle },
]

export default () => {
    return Thead({
        children: [
            Tr({
                children: headers.map(head => {
                    return Th({ children: [head.title], style: head.style })
                }),
                style: {
                    backgroundColor: '#F3F3F3',
                    fontSize: "15px",
                    borderBottom: '2px solid black',
                    color: '#212121'
                }
            })
        ]
    })
}