
//take dates in M/D/YYYY format and convert to YYYYMMDD
function formatDates() {
    
    document.querySelector('#output').textContent = "";
    let originalDatesList = document.querySelector('#input').value;
    let newDatesList = "";
    console.log("originalDatesList: " + "\n" + originalDatesList + " and the length is: " + originalDatesList.length);

    let sortedDatesList = originalDatesList.trim().split("\n");
    console.log("sortedDatesList: " + "\n" + sortedDatesList + " and the length is: " + sortedDatesList.length);

    //construct date for each item in the array
    sortedDatesList.forEach(date => {

        //set variables for M D YYYY
        let sortedMonth = date.split("/")[0];
        let sortedDay = date.split("/")[1];
        let sortedYear = date.split("/")[2];
        // console.log("Date: " + date + " sortedMonth: " + sortedMonth + " sortedDay: " + sortedDay + " sortedYear " + sortedYear)

        // check to see if 0's need to be applied for MM or DD
        if(sortedMonth.length < 2) {
            sortedMonth = 0 + sortedMonth;
        }
        if(sortedDay.length < 2) {
            sortedDay = 0 + sortedDay;
        }

        //construct output date in YYYYMMDD format
        let constructedDate = sortedYear + sortedMonth + sortedDay;
        // console.log("Date in YYYYMMDD format: " + constructedDate);

        //add to final date that will be set in output
        newDatesList += constructedDate + "\n";

    })

    document.querySelector('#output').textContent = newDatesList;
    document.querySelector("#clear-right").removeAttribute("disabled");
    console.log(document.querySelector('#output').innerHTML);

}

function clearOutput() {
    document.querySelector('#output').innerHTML = "";
}

function clearOutputRight() {
    document.querySelector('#output').innerHTML = "";
    document.querySelector("#clear-right").setAttribute("disabled", true);
}

function clearInputLeft() {
    document.querySelector('#input').value = "";
}


document.querySelector('#format').addEventListener("click", formatDates);
document.querySelector('#clear-right').addEventListener("click", clearOutputRight);
document.querySelector('#clear-left').addEventListener("click", clearInputLeft);