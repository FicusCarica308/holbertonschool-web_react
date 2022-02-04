const $ = require( "jquery" );
const _ = require('lodash');

function updateCounter() {
  let count = 0;

  $('button').on('click', _.debounce(() => {
    count += 1;
    $('#count').html(`${count} clicks on the button`)
  }, 500));
}

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>')
updateCounter();
$('body').append('<p id=count></p>');
$('body').append('<p>Copyright - Holberton School</p>');
