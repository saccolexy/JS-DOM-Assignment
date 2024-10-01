//*ANCHOR TODO
//Using HTML, Bootstrap, and Javascript create a single page website that contains the following:
    //a bootstrap styled table representing your choice of data
    //a bootstrap styled form that allows a user to add a new row to the table when clicking on 'submit'

//Button should add information to my table
//Get information from input fields and their value


const formButton = document.getElementById('formSubmit')

//select button element from HTML by ID and assign to variable 'formButton'

let number = 1

//created number variable and initialized it to 1 to track form entries

//add event listener to track clicks

//used preventdefault to prevent page from refreshing when button is clicked

formButton.addEventListener('click', (event) => {
    event.preventDefault()
    //variables to hold values of the form - grab element values
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let favoriteColor = document.getElementById('favoriteColor').value

    //declared variables and attached values using assigned IDs

    //create a tr node to append to form

    //created new table row to hold entered data

    let newTableRow = document.createElement('tr')

    //created and appended table data cells

    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    let firstNameNode = document.createElement('td')
    firstNameNode.innerHTML = firstName
    newTableRow.append(firstNameNode)

    let lastNameNode = document.createElement('td')
    lastNameNode.innerHTML = lastName
    newTableRow.append(lastNameNode)

    let favoriteColorNode = document.createElement('td')
    favoriteColorNode.innerHTML = favoriteColor
    newTableRow.append(favoriteColorNode)

    document.getElementById('tBody').appendChild(newTableRow)

    //appended new table row to table body

    document.getElementById('firstName').value = ''

    document.getElementById('lastName').value = ''

    document.getElementById('favoriteColor').value = ''

    //cleared entry fields upon submission

    number++

    //incremented entry counter to track form entries
})