var $ = require( "jquery" );

function makeParagraph (content) {
  $("<p>")
    .html(content)
    .appendTo('body')
}

makeParagraph('Holberton Dashboard');
makeParagraph('Dashboard data for the students');
makeParagraph('Copyright - Holberton School');
