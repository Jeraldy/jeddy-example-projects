import Tr from "jeddy/dom/Tr";
import Td from "jeddy/dom/Td";
import Tbody from "jeddy/dom/Tbody";

export default (data) => {
    return Tbody({
        children: TableContent(data),
        style: { borderBottom: '2px solid black', color: "#616161" }
    })
}

const tdStyle = { padding: '10px', border: '1px solid #ddd' }

function TableContent(data) {
    return data.map((row, index) => {
        return Tr({
            children: [
                Td({ children: [(index + 1).toString()], style: tdStyle }),
                Td({ children: [row.name], style: tdStyle }),
                Td({ children: [row.username], style: tdStyle }),
                Td({ children: [row.email], style: tdStyle }),
                Td({ children: [row.phone], style: tdStyle }),
                Td({ children: [row.website], style: tdStyle }),
            ],
            attrs: { key: row.id }//necessary for dynamic listing
        })
    })
}
