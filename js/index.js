document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Adicionando Disciplinas'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
var showDialog = function (id) {
  document
    .getElementById(id)
    .show();
};
var hideDialog = function (id) {
  document
    .getElementById(id)
    .hide();
};
function successCB() {
var db = window.openDatabase(calc_nota, 1.0, CNotas, 1000000);
        db.transaction(queryDB, errorCB);
    }
function createDB(){
var db = window.openDatabase(calc_nota, 1.0, CNotas, 1000000);
	db.transaction(executeQuery, errorCB, successCB);

    }
document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {

        window.alert("Create a database and display the content");
    }

function executeQuery(disc) {
        // disc.executeSql('DROP TABLE IF EXISTS Disc');
        disc.executeSql('CREATE TABLE IF NOT EXISTS Disc (id unique, Nome_disc)');
        disc.executeSql('INSERT INTO Disc (id, Nome_disc) VALUES (1, "mat")');


    }