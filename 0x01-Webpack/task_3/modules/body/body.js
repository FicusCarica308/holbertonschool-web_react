const _ = require('lodash');
const $ = require( "jquery" );
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>')
$('body').append('<p id=count></p>');

function updateCounter() {
  let count = 0;

  $('button').on('click', _.debounce(() => {
    count += 1;
    $('#count').html(`${count} clicks on the button`)
  }, 500));
}

updateCounter();
