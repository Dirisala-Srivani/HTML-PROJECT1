document.getElementById('submitButton').addEventListener('click', function() 
{
  var name = document.getElementById('nameInput').value;
  document.getElementById('output').textContent = 'Hello, ' + name + '!';
});
