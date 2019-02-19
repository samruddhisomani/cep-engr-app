// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice

const init = {
    firstName: 'Samruddhi',
    lastName: 'Somani',
    jobTitle: 'Core Bidding Manager',
    homeOffice: 'Austin DT'
}

// using jQuery and the object above, display the information as the appropriate button is clicked

const tellmemore =
    '<a href="https://github.com/samruddhisomani/Showcase"><i class="fab fa-github-square fa-lg"></i></a>   ' +
    '<a href="https://twitter.com/samruddhisomani"><i class="fab fa-twitter-square fa-lg"></i></a>  ' +
    '<a href="https://www.linkedin.com/in/samruddhisomani"><i class="fab fa-linkedin fa-lg"></i></a>'

$('#firstname').click(_ => ($('#answerstext').text(init['firstName'])))
$('#lastname').click(_ => ($('#answerstext').text(init['lastName'])))
$('#jobtitle').click(_ => ($('#answerstext').text(init['jobTitle'])))
$('#homeoffice').click(_ => ($('#answerstext').text(init['homeOffice'])))
$('#tellmemore').click(_ => {
    $('#answerstext').text("");
    $('#answerstext').append(tellmemore);
})

$('#catlink').click(_ => {
    if ($('#catphotoimg')) { $('#catphotoimg').remove() }
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then(function (myJson) {
            $('#ex1').prepend(`<img id='catphotoimg' alt='A random cat photo' src=${myJson.file}>`)
        });
}
)