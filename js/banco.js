window.addEventListener('load',carregado);


// Criando/abrindo o banco
var db = openDatabase("calcula", "1.0", "base de dados da aplicacao", 200000);
db.transaction(function(tx){
		tx.executeSql("CREATE TABLE IF NOT EXISTS disciplinas(id unique ,nome_disc TEXT, n_av INTEGER)");
	});
function carregado(){
	document.getElementById('addDisc').addEventListener('click',salvar);
	
}

function salvar(){
  var nome =  document.getElementById('nome_disc').value;
  var num_av = document.getElementById('n_av').value;

  db.transaction(function(tx){
    tx.executeSql('INSERT INTO disciplina (nome_disc,n_av) VALUES(?,?)',[nome,num_av]);
      // tx.executeSql("INSERT INTO disciplina(nome_disc,n_av) VALUES('testex',11)");

  });

}
