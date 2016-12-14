var express = require('express');
var app = express();

app.listen(3000, function() {
	console.log("Servidor rodando na porta 3000.")
});

app.get("/pagamentos", function(req, res) {
	console.log("Entrando na rota pagamentos");
	res.send("Ok.");
})