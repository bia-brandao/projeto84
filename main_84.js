pizzaListArray = []

function getmenu() {
  var item = document.getElementById('pizzaName').value

  pizzaListArray.push(item)

  var removeCommas = pizzaListArray.join('<br># ')
  document.getElementById('displayMenu').innerHTML = '# ' + removeCommas
}
