

function FlexTableParent() {

    //brush up on the javascript, make a bunch of loops and take in fake data

    let rowSize = 4; 
    let dummyRowData = []; 

    for (let i = 0; i < rowSize; i++) {
        dummyRowData[i] = 0; 
    }

    //eventually need to add keys to each of these elements so I can track them
    //but won't waste the time now incase the actual data is structured differently
    //i.e a CSV file or other data scrape 
    function dummyRowDataCreation() {
        

        return <td> {dummyRowData} </td>; 
 
    }

    function dummyColumnDataCreation() {
        return <tr>
        <td> <input type = "checkbox" name = "pickMe"/> </td> 
        {dummyRowDataCreation()}
        {dummyRowDataCreation()}
        {dummyRowDataCreation()}
        {dummyRowDataCreation()}
         </tr>; 
    }


    function finalFakeDataRendering(columnSize) {
        let trList = []; 
        for (let i = 0; i < columnSize; i++) {
            trList.push(dummyColumnDataCreation()); 
        }
        return trList; 
    }

    return (

        <div className = "FlexTableParent">
            <table> 
                <tbody> 
                <tr className = "tableHeaders"> 
                    <th>      </th> 
                    <th> Room </th> 
                    <th> Teacher </th> 
                    <th> Capacity </th>
                    <th> Description </th> 

                </tr>
                {finalFakeDataRendering(12)}
                </tbody>
            </table> 

        </div>
    )
}

export default FlexTableParent; 

