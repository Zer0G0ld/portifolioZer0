// EXPANDINDO AS DIV's 
function toggleExpansion() {
  var content = document.querySelector('.expansion-content');
  content.style.display = (content.style.display === '' || content.style.display === 'none') ? 'block' : 'none';
}

function toggleExpansionSobre() {
  var content = document.querySelector('.expansion-contentSobre');
  content.style.display = (content.style.display === '' || content.style.display === 'none') ? 'block' : 'none';
}
