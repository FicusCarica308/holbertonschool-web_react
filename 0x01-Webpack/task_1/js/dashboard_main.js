const $ = require( "jquery" );
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>')
$('body').append('<p id=count></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  let count = 0;

  $('button').on('click', () => {
    count += 1;
    $('#count').html(`${count} clicks on the button`)
  });
}

const debounced = _.debounce(updateCounter, 1000);
debounced();
