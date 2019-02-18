// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice

const init = {
    firstName: 'Samruddhi',
    lastName: 'Somani',
    jobTitle: 'Core Bidding Manager',
    homeOffice: 'Austin DT'
}

// using jQuery and the object above, display the information as the appropriate button is clicked

const tellmemore = '<i class="fab fa-github-square fa-lg"></i>    <i class="fab fa-twitter-square fa-lg"></i>   <i class="fab fa-linkedin fa-lg"></i>'

$('#firstname').click(_ => ($('#answerstext').text(init['firstName'])))
$('#lastname').click(_ => ($('#answerstext').text(init['lastName'])))
$('#jobtitle').click(_ => ($('#answerstext').text(init['jobTitle'])))
$('#homeoffice').click(_ => ($('#answerstext').text(init['homeOffice'])))
$('#tellmemore').click(_ => {
    $('#answerstext').text("");
    $('#answerstext').append(tellmemore);
})