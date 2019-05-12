// Stores the text and HTML formatting to display
var message = '<ol>';

// Loops through the students.js list and formats how to display text
for (var student in students) {
  message += '<li><b>Name: ' + students[student]['name'] + '</b><br/>';
  message += 'Track: ' + students[student]['track'] + '<br/>';
  message += 'Points: ' + students[student]['points'] + '<br/>';
  message += 'Achievements: ' + students[student]['achievements'] + '</li>';
}

// Closes the HTML list
message += '</ol>';

// Function for printing to index.html
function print(printToWeb){
  var htmlDiv = document.getElementById('output');
  htmlDiv.innerHTML = printToWeb;
}

// Calls the print function with the formatted message as parameter 
print(message);
